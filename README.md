# PDJ Valle · sitio web

Sitio informativo y de consulta de la **Plataforma Departamental de Juventudes del Valle del Cauca**, construido sobre el *ABC de las Plataformas de Juventud* (edición final 2026, 32 págs.).

## Empezar

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/ (sitio estático)
npm run preview   # sirve dist/
```

## Páginas

| Ruta | Qué tiene |
|---|---|
| `/` | Bienvenida, cifras, cómo escala la plataforma, funciones, buscador «¿De dónde eres?», agenda, FAQ |
| `/quienes-somos` | Misión y visión (borrador), qué sí/no somos, quién puede integrarla, paridad, equipo, voces |
| `/abc` | El ABC completo: marco legal, identidad, estructura, potestades, diagnóstico, beneficios, hoja de ruta, autodiagnóstico y plantilla de derecho de petición |
| `/territorio` | Las 6 subregiones y los 42 territorios, con buscador |
| `/agenda` | Agenda (de ejemplo) y periodicidad legal |
| `/documentos` | Biblioteca pública y adelanto de la fase 2 (cuentas de plataformados) |
| `/contacto` | Formulario que abre el correo con el mensaje listo y canales |
| `/revision` | Registro de todo lo pendiente de aval |

## Notas de revisión (placeholders)

Cada nota amarilla del sitio sale de `src/data/pendientes.ts` y tiene un código (`PH-01`…`PH-20`). La Plataforma envía correcciones citando el código. Para cerrar una:

1. Reemplaza el contenido de ejemplo en la página indicada (o en `src/data/*.ts`).
2. Cambia su `estado` a `'aprobado'` en `src/data/pendientes.ts` y quita el `<Pendiente id="…" />` de la página.

El botón abajo a la izquierda oculta/muestra las notas para ver la página como quedará.

## Dónde se edita el contenido

Todo el texto reutilizable vive en `src/data/`: `site.ts` (nombre, correo, redes, equipo, créditos), `abc.ts` (contenido del ABC), `territorio.ts` (subregiones y municipios), `agenda.ts`, `documentos.ts` y `pendientes.ts`.

## Fase 2: cuentas y subida de documentos

El sitio es estático hoy (`output: 'static'` en `astro.config.mjs`). Para la fase 2:

- Cambiar a `output: 'server'` con un adaptador (Vercel, Netlify o Node) y agregar autenticación (por ejemplo Supabase Auth).
- Mover `documentos.ts` y `agenda.ts` a tablas de base de datos; las páginas ya leen listas, así que solo cambia el origen de los datos.
- Flujo previsto: la plataforma municipal sube el acta → la vocería la aprueba → se publica en `/documentos` (ver `PH-19`).

## Diseño

- Colores del ABC y del logo: índigo `#5b2adf`, coral `#ee536a`, lima `#b3e500`, azul `#2b9bff`, más teal `#0b7f88` y viridian `#1d7357`. Tokens en `src/styles/global.css`.
- Tipografías: Bricolage Grotesque (todo) y Caveat (anotaciones a mano).
- Cada sección es un «capítulo» de color a pantalla completa; el movimiento respeta `prefers-reduced-motion`.

## Créditos de imagen

Fotos del territorio (Wikimedia Commons): «Tuluá, Valle del Cauca, Colombia», Andres Garzon, CC BY 2.0 · «Palmira Valle Del Cauca», Dantiagok017, CC BY-SA 4.0 · «El Dovio, Valle del Cauca, Colombia», Hectorangelazul, CC BY-SA 4.0 · «Puente de los Nayeros Buenaventura, Colombia», Diaz.darly, CC BY-SA 4.0. Detalle en `assets/credits.json`. Fotos de la Plataforma (`public/img/abc-*.webp`, `foto-*.webp`), logo e ilustraciones: tomados del ABC 2026.
