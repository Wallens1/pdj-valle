# Graph Report - pdj-valle  (2026-10-16)

## Corpus Check
- Corpus is ~24,406 words - fits in a single context window. You may not need a graph.

## Summary
- 156 nodes · 261 edges · 12 communities
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 80,199 input · 0 output

## Community Hubs (Navigation)
- Contenido del ABC
- Layout, navegación y 404
- Notas de revisión (PH)
- Componentes visuales
- Despliegue y documentación
- Reglas de redacción
- Dependencias del proyecto
- Buscador y territorio
- Capa de movimiento
- Agenda
- Biblioteca de documentos
- Middleware de ruta base

## God Nodes (most connected - your core abstractions)
1. `Revisión manual de textos en español` - 6 edges
2. `scripts` - 4 edges
3. `site` - 4 edges
4. `build job (npm ci + npm run build + upload dist)` - 4 edges
5. `PDJ Valle sitio web` - 4 edges
6. `ABC de las Plataformas de Juventud (edicion 2026)` - 4 edges
7. `Notas de revision (placeholders PH-01..PH-20)` - 4 edges
8. `Contenido editable en src/data/ (site, abc, territorio, agenda, documentos, pendientes)` - 4 edges
9. `Fase 2: cuentas y subida de documentos` - 4 edges
10. `PDJ Valle (sitio Astro)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Fase 2: cuentas y subida de documentos` --conceptually_related_to--> `Publicar en GitHub Pages (workflow)`  [AMBIGUOUS]
  README.md → .github/workflows/pages.yml
- `build job (npm ci + npm run build + upload dist)` --implements--> `PDJ Valle sitio web`  [INFERRED]
  .github/workflows/pages.yml → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **GitHub Pages build and deploy pipeline** — _github_workflows_pages_publicar_en_github_pages, _github_workflows_pages_build, _github_workflows_pages_deploy, _github_workflows_pages_site_url_base_path, astro_config [INFERRED 0.85]
- **Placeholder review workflow (PH codes)** — readme_notas_de_revision_placeholders, src_data_pendientes, readme_pendiente_component, readme_paginas [EXTRACTED 1.00]
- **Catálogo de patrones de escritura IA aplicables en español** — claude_patron_rotulos_remate, claude_patron_no_es_x_es_y, claude_patron_triadas, claude_patron_rayas_negritas [EXTRACTED 1.00]
- **Sistema de notas PH y revisión con voz del autor** — claude_notas_ph, src_data_pendientes, claude_pagina_revision, claude_voz_singular_autor [INFERRED 0.85]

## Communities (12 total, 0 thin omitted)

### Community 0 - "Contenido del ABC"
Cohesion: 0.12
Nodes (25): Props, autodiagnostico, beneficios, comision, conpes, exigibilidad, faq, frases (+17 more)

### Community 1 - "Layout, navegación y 404"
Cohesion: 0.17
Nodes (12): Props, autoria, creditos, nav, site, base, Props, [usuario, dominio] (+4 more)

### Community 2 - "Notas de revisión (PH)"
Cohesion: 0.15
Nodes (11): Notas PH (placeholders), Página /revision, <Pendiente id> component, p, Props, Estado, frase(), pendiente (+3 more)

### Community 3 - "Componentes visuales"
Cohesion: 0.15
Nodes (10): Props, Props, formas, Props, Props, integrantes, noEres, siEres (+2 more)

### Community 4 - "Despliegue y documentación"
Cohesion: 0.17
Nodes (12): build job (npm ci + npm run build + upload dist), deploy job (actions/deploy-pages), Publicar en GitHub Pages (workflow), SITE_URL / BASE_PATH env vars, ABC de las Plataformas de Juventud (edicion 2026), Creditos de imagen (Wikimedia Commons, assets/credits.json), Paginas del sitio (/, /quienes-somos, /abc, /territorio, /agenda, /documentos, /contacto, /revision), PDJ Valle sitio web (+4 more)

### Community 5 - "Reglas de redacción"
Cohesion: 0.17
Nodes (6): ABC (términos legales, cifras, artículos y fuentes), Astro, Skill avoid-ai-writing, PDJ Valle (sitio Astro), Plataforma Departamental de Juventudes del Valle, README.md

### Community 6 - "Dependencias del proyecto"
Cohesion: 0.18
Nodes (10): dependencies, astro, name, private, scripts, build, dev, preview (+2 more)

### Community 7 - "Buscador y territorio"
Cohesion: 0.33
Nodes (7): datos, porSubregion(), Subregion, subregiones, Territorio, territorios, clases

### Community 8 - "Capa de movimiento"
Cohesion: 0.33
Nodes (4): contar(), formatear(), prepararEntradas(), terminarConteo()

### Community 9 - "Agenda"
Cohesion: 0.33
Nodes (5): colores, Props, agenda, Dia, Evento

### Community 10 - "Biblioteca de documentos"
Cohesion: 0.40
Nodes (4): Documento, documentos, colores, g

### Community 11 - "Middleware de ruta base"
Cohesion: 0.40
Nodes (3): base, onRequest, raiz

## Ambiguous Edges - Review These
- `Publicar en GitHub Pages (workflow)` → `Fase 2: cuentas y subida de documentos`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps
- **5 isolated node(s):** `Plataforma Departamental de Juventudes del Valle del Cauca`, `Creditos de imagen (Wikimedia Commons, assets/credits.json)`, `Astro`, `README.md`, `ABC (términos legales, cifras, artículos y fuentes)`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 64 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Fase 2: cuentas y subida de documentos` connect `Despliegue y documentación` to `Notas de revisión (PH)`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **What connects `Plataforma Departamental de Juventudes del Valle del Cauca`, `Creditos de imagen (Wikimedia Commons, assets/credits.json)`, `Astro` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contenido del ABC` be split into smaller, more focused modules?**
  _Cohesion score 0.12169312169312169 - nodes in this community are weakly interconnected._
- **Why does `Voz singular informal del autor del sitio` connect `Notas de revisión (PH)` to `Reglas de redacción`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Should `Componentes visuales` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._
- **Why does `Contenido editable en src/data/ (site, abc, territorio, agenda, documentos, pendientes)` connect `Despliegue y documentación` to `Notas de revisión (PH)`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Publicar en GitHub Pages (workflow)` and `Fase 2: cuentas y subida de documentos`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._