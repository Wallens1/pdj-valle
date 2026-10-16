import { defineMiddleware } from 'astro:middleware';

// Antepone la base (/pdj-valle) a las rutas que empiezan con /.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const raiz = new RegExp(`(\\s(?:href|src|action|poster)=")/(?!/|${base.slice(1)}/)`, 'g');

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const respuesta = await next();
  if (!base || !respuesta.headers.get('content-type')?.includes('text/html')) return respuesta;
  const html = (await respuesta.text()).replace(raiz, `$1${base}/`);
  return new Response(html, { status: respuesta.status, headers: respuesta.headers });
});
