// Capa de movimiento e interacción común a todas las páginas.
// Todo lo que anima parte de contenido ya visible: si este script no carga,
// la página se lee completa.

const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const raiz = document.documentElement;

// --- Entradas escalonadas al entrar en pantalla -------------------------
function prepararEntradas() {
  document.querySelectorAll<HTMLElement>('[data-revelar]').forEach((grupo) => {
    Array.from(grupo.children).forEach((hijo, i) => (hijo as HTMLElement).style.setProperty('--i', String(i)));
  });

  // Largo real de cada trazo para dibujarlo
  document.querySelectorAll<SVGPathElement>('.garabato path, .subrayado path').forEach((p) => {
    try {
      p.style.setProperty('--largo', String(Math.ceil(p.getTotalLength()) + 2));
    } catch {
      /* algunos navegadores no miden trazos ocultos */
    }
  });

  const objetivos = document.querySelectorAll('[data-revelar], [data-revelar-solo], .linea-mascara, .garabato, [data-contar]');
  if (reducir || !('IntersectionObserver' in window)) {
    objetivos.forEach((el) => el.classList.add('visible'));
    document.querySelectorAll<HTMLElement>('[data-contar]').forEach((el) => terminarConteo(el));
    return;
  }

  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        if ((e.target as HTMLElement).dataset.contar !== undefined) contar(e.target as HTMLElement);
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
  );
  objetivos.forEach((el) => io.observe(el));

  // Red de seguridad: lo que ya está en pantalla nunca se queda oculto.
  setTimeout(() => {
    objetivos.forEach((el) => {
      if (el.classList.contains('visible')) return;
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
        if ((el as HTMLElement).dataset.contar !== undefined) terminarConteo(el as HTMLElement);
      }
    });
  }, 1500);
}

// --- Cifras que cuentan hacia arriba -------------------------------------
function formatear(n: number, dec: number) {
  return n.toLocaleString('es-CO', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
function terminarConteo(el: HTMLElement) {
  el.textContent = formatear(Number(el.dataset.contar), Number(el.dataset.decimales || 0)) + (el.dataset.sufijo || '');
}
function contar(el: HTMLElement) {
  const meta = Number(el.dataset.contar);
  const dec = Number(el.dataset.decimales || 0);
  const suf = el.dataset.sufijo || '';
  const dur = 1600;
  const t0 = performance.now();
  const paso = (t: number) => {
    const k = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - k, 4);
    el.textContent = formatear(meta * e, dec) + suf;
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

// --- Deriva suave de fotos con el scroll ---------------------------------
function prepararDeriva() {
  if (reducir) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-deriva]'));
  if (!els.length) return;
  let pendiente = false;
  const mover = () => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const f = Number(el.dataset.deriva || 0.08);
      const centro = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-centro * f).toFixed(1)}px, 0)`;
    });
    pendiente = false;
  };
  window.addEventListener('scroll', () => {
    if (!pendiente) { pendiente = true; requestAnimationFrame(mover); }
  }, { passive: true });
  mover();
}

// --- Cabecera que se esconde al bajar y vuelve al subir ------------------
function prepararCabecera() {
  const cab = document.querySelector<HTMLElement>('.cabecera');
  if (!cab) return;
  let ultimo = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const oculta = y > ultimo && y > 240;
    cab.classList.toggle('oculta', oculta);
    raiz.classList.toggle('cabecera-oculta', oculta);
    ultimo = y;
  }, { passive: true });
}

// --- Menú móvil ----------------------------------------------------------
function prepararMenu() {
  const menu = document.getElementById('menu-movil');
  const abrir = document.querySelector<HTMLButtonElement>('[data-abrir-menu]');
  const cerrar = document.querySelector<HTMLButtonElement>('[data-cerrar-menu]');
  if (!menu || !abrir || !cerrar) return;
  const set = (abierto: boolean) => {
    menu.classList.toggle('abierto', abierto);
    menu.setAttribute('aria-hidden', String(!abierto));
    abrir.setAttribute('aria-expanded', String(abierto));
    document.body.style.overflow = abierto ? 'hidden' : '';
    if (abierto) cerrar.focus(); else abrir.focus();
  };
  abrir.addEventListener('click', () => set(true));
  cerrar.addEventListener('click', () => set(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('abierto')) set(false); });
}

// --- Vista limpia / vista de revisión ------------------------------------
function prepararRevision() {
  const boton = document.querySelector<HTMLButtonElement>('[data-interruptor-revision]');
  if (!boton) return;
  const etiqueta = boton.querySelector('[data-etiqueta]');
  const aplicar = (limpia: boolean) => {
    raiz.classList.toggle('vista-limpia', limpia);
    boton.setAttribute('aria-pressed', String(!limpia));
    if (etiqueta) etiqueta.textContent = limpia ? 'Mostrar notas de revisión' : 'Ocultar notas de revisión';
  };
  let limpia = false;
  try { limpia = localStorage.getItem('pdj-vista-limpia') === '1'; } catch { /* sin almacenamiento */ }
  aplicar(limpia);
  boton.addEventListener('click', () => {
    limpia = !raiz.classList.contains('vista-limpia');
    aplicar(limpia);
    try { localStorage.setItem('pdj-vista-limpia', limpia ? '1' : '0'); } catch { /* sin almacenamiento */ }
  });
}

prepararEntradas();
prepararDeriva();
prepararCabecera();
prepararMenu();
prepararRevision();
requestAnimationFrame(() => document.body.classList.add('listo'));
// Si la pestaña arranca en segundo plano, rAF no corre: el titular igual aparece.
setTimeout(() => document.body.classList.add('listo'), 400);
