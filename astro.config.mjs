import { defineConfig } from 'astro/config';

// Hoy el sitio es estático. Cuando lleguen las cuentas de plataformados y la
// subida de documentos, se cambia a output: 'server' con un adaptador
// (Vercel, Netlify o Node) sin tocar las páginas existentes.
export default defineConfig({
  site: 'https://pdjvalle.co',
  output: 'static',
});
