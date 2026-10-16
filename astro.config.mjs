import { defineConfig } from 'astro/config';

// Publicado en GitHub Pages como sitio de proyecto: https://<usuario>.github.io/pdj-valle/
// Con dominio propio: quitar `base` y cambiar `site` (y agregar public/CNAME).
// Fase 2 (cuentas y subida de documentos): output: 'server' con un adaptador.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH ?? '/pdj-valle',
  output: 'static',
  trailingSlash: 'ignore',
});
