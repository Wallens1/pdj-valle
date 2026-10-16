import { defineMiddleware } from 'astro:middleware';

// En GitHub Pages el sitio vive en un subdirectorio (/pdj-valle/). Las páginas y
// los datos escriben rutas desde la raíz ("/img/...", "/abc"); aquí se les
// antepone la base una sola vez, al generar el HTML, para no repetirla en cada
// enlace. Si el sitio pasa a un dominio propio, basta con quitar `base`.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const raiz = new RegExp(`(\\s(?:href|src|action|poster)=")/(?!/|${base.slice(1)}/)`, 'g');

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const respuesta = await next();
  if (!base || !respuesta.headers.get('content-type')?.includes('text/html')) return respuesta;
  const html = (await respuesta.text()).replace(raiz, `$1${base}/`);
  return new Response(html, { status: respuesta.status, headers: respuesta.headers });
});
