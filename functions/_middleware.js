// Puerta de acceso temporal para la revisión del borrador (Cloudflare Pages Functions).
//
// Corre en el servidor de Cloudflare ANTES de entregar cualquier archivo: páginas,
// imágenes y el PDF. Sin usuario y clave válidos no sale nada del sitio.
//
// Variables de entorno (Cloudflare → Pages → proyecto → Settings → Variables, tipo «Secret»):
//   REVISION_CUENTAS  usuario:clave[:AAAA-MM-DD], separadas por coma. La fecha es opcional
//                     y vence esa cuenta al final de ese día (hora de Colombia).
//                     Ej.: "vocería:Tr3s-Palmas-81:2026-11-30,diseño:Rio-Cauca-47"
//                     La clave no puede llevar «:» ni «,».
//   REVISION_VENCE    AAAA-MM-DD. Desde el día siguiente nadie entra (fin de la revisión).
//
// Si falta alguna de las dos, el sitio queda cerrado (nunca abierto por error).
// Para el lanzamiento: borrar este archivo. Ver README, «Revisión privada».

const REINO = 'PDJ Valle - revision del borrador'; // ASCII: va en una cabecera HTTP
const COLOMBIA = '-05:00';

/** @param {string} fecha AAAA-MM-DD → último instante de ese día en Colombia, o null. */
export function finDelDia(fecha) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha ?? '')) return null;
  const t = Date.parse(`${fecha}T23:59:59.999${COLOMBIA}`);
  return Number.isNaN(t) ? null : t;
}

/** @returns {{usuario: string, clave: string, vence: number | null}[] | null} null si hay errores. */
export function leerCuentas(texto) {
  if (!texto?.trim()) return null;
  const cuentas = [];
  for (const parte of texto.split(',')) {
    const [usuario, clave, fecha, sobra] = parte.trim().split(':');
    if (!usuario || !clave || sobra !== undefined) return null;
    const vence = fecha === undefined ? null : finDelDia(fecha);
    if (fecha !== undefined && vence === null) return null;
    cuentas.push({ usuario: usuario.normalize('NFC'), clave: clave.normalize('NFC'), vence });
  }
  return cuentas;
}

/** Lee «Authorization: Basic …» como UTF-8 (para que funcionen tildes y eñes). */
export function leerCredenciales(cabecera) {
  const m = /^Basic\s+([A-Za-z0-9+/=]+)$/i.exec(cabecera ?? '');
  if (!m) return null;
  try {
    const bytes = Uint8Array.from(atob(m[1]), (c) => c.charCodeAt(0));
    const texto = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    const i = texto.indexOf(':');
    if (i < 1) return null;
    return { usuario: texto.slice(0, i).normalize('NFC'), clave: texto.slice(i + 1).normalize('NFC') };
  } catch {
    return null;
  }
}

// Comparación en tiempo constante: se comparan los SHA-256 (siempre 32 bytes),
// así el tiempo de respuesta no delata cuántos caracteres de la clave acertó alguien.
async function iguales(a, b) {
  const enc = new TextEncoder();
  const [x, y] = await Promise.all([a, b].map((s) => crypto.subtle.digest('SHA-256', enc.encode(s))));
  const u = new Uint8Array(x), v = new Uint8Array(y);
  let dif = 0;
  for (let i = 0; i < u.length; i++) dif |= u[i] ^ v[i];
  return dif === 0;
}

/** Decide sin efectos: 'ok' | 'falta-config' | 'terminada' | 'pedir' | 'vencida'. */
export async function decidir(env, cabecera, ahora = Date.now()) {
  const cuentas = leerCuentas(env.REVISION_CUENTAS);
  const fin = finDelDia(env.REVISION_VENCE);
  if (!cuentas || fin === null) return { estado: 'falta-config' };
  if (ahora > fin) return { estado: 'terminada' };

  const cred = leerCredenciales(cabecera);
  if (!cred) return { estado: 'pedir' };

  // Se recorren todas las cuentas sin cortar al primer acierto (tiempo parejo).
  let encontrada = null;
  for (const c of cuentas) {
    const ok = (await iguales(cred.usuario, c.usuario)) & (await iguales(cred.clave, c.clave));
    if (ok && !encontrada) encontrada = c;
  }
  if (!encontrada) return { estado: 'pedir', fallo: cred.usuario };
  if (encontrada.vence !== null && ahora > encontrada.vence) return { estado: 'vencida', usuario: encontrada.usuario };
  return { estado: 'ok', usuario: encontrada.usuario };
}

const MENSAJES = {
  'falta-config': [503, 'Sitio en preparación', 'El acceso de revisión todavía no está configurado.'],
  terminada: [403, 'La revisión terminó', 'El periodo de revisión del borrador ya cerró. Si necesitas entrar, escríbele a quien te compartió el acceso.'],
  pedir: [401, 'Acceso de revisión', 'Este es el borrador del sitio de la Plataforma Departamental de Juventudes del Valle. Para verlo necesitas el usuario y la clave que te compartieron.'],
  vencida: [401, 'Tu acceso venció', 'La clave con la que entraste ya no está vigente. Pide una nueva a quien te compartió el acceso.'],
};

function pagina(titulo, texto) {
  return `<!doctype html><html lang="es-CO"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<title>${titulo} · PDJ Valle</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#5b2adf;color:#fff;
font:18px/1.5 system-ui,sans-serif;padding:16px}main{max-width:32rem}h1{color:#b3e500;margin:0 0 .5rem}</style>
</head><body><main><h1>${titulo}</h1><p>${texto}</p></main></body></html>`;
}

function rechazo(estado) {
  const [codigo, titulo, texto] = MENSAJES[estado];
  const cabeceras = {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-store',
    'x-robots-tag': 'noindex, nofollow',
  };
  // Solo se vuelve a pedir la clave cuando tiene sentido intentarlo de nuevo.
  if (codigo === 401) cabeceras['www-authenticate'] = `Basic realm="${REINO}", charset="UTF-8"`;
  return new Response(pagina(titulo, texto), { status: codigo, headers: cabeceras });
}

export async function onRequest(ctx) {
  const d = await decidir(ctx.env, ctx.request.headers.get('authorization'));
  if (d.estado !== 'ok') {
    // Aparece en Cloudflare → Pages → proyecto → Functions → registros en tiempo real.
    if (d.fallo !== undefined || d.estado === 'vencida') console.log(`revisión: rechazo ${d.estado} usuario=${JSON.stringify(d.fallo ?? d.usuario)}`);
    if (d.estado === 'falta-config') console.log('revisión: faltan REVISION_CUENTAS o REVISION_VENCE, o tienen formato inválido');
    return rechazo(d.estado);
  }

  const respuesta = await ctx.next();
  const r = new Response(respuesta.body, respuesta);
  // Que ningún caché compartido guarde el borrador ni lo entregue a quien no tiene clave,
  // y que los buscadores no lo indexen.
  r.headers.set('cache-control', 'private, no-cache');
  r.headers.set('x-robots-tag', 'noindex, nofollow');
  return r;
}
