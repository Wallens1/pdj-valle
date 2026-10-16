# PDJ Valle

Sitio en Astro de la Plataforma Departamental de Juventudes del Valle. Ver README.md para comandos y estructura.

## Textos

Todo texto visible nuevo o editado pasa por la skill `avoid-ai-writing` (`.claude/skills/`). Está calibrada para inglés: su detector no ve nada en español, así que la revisión es manual con los patrones del catálogo que sí aplican:

- Rótulos de remate con dos puntos: «La clave:», «El reto:», «En corto:», «El resultado:». Dar el dato directo.
- «No es X, es Y» y negación seguida de dos puntos («No somos X: hacemos Y»). Máximo uno por página.
- Tríadas repetidas («proponemos, vigilamos y concertamos»). Una vez basta.
- Rayas (—) en prosa, negritas de más, comentarios de código decorativos o narrativos.

No reescribir términos legales, cifras, artículos ni fuentes del ABC.

## Voz

- El sitio habla por la Plataforma, en plural: «Somos jóvenes…», «No somos una oficina…».
- En las notas PH (`src/data/pendientes.ts`) y en la página `/revision` habla quien hace el sitio, en singular y en tono informal: «Mándenme…», «lo voy cambiando».
- Cada nota PH muestra solo su código y una frase: «Aquí falta foto» (tipo foto) o «Esto va a cambiar a lo que ustedes digan» (el resto).
