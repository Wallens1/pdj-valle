// Biblioteca pública. En la fase 2 esta lista vendrá de la base de datos y los
// plataformados podrán subir documentos que la vocería aprueba antes de publicar.

export type Documento = {
  titulo: string;
  tipo: 'Guía' | 'Reglamento' | 'Plan' | 'Acta' | 'Norma';
  fecha: string;
  peso?: string;
  href?: string; // sin href = pendiente de entrega
  pendiente?: string; // id del registro de pendientes
  externo?: boolean;
};

export const documentos: Documento[] = [
  { titulo: 'ABC de las Plataformas de Juventud 2026', tipo: 'Guía', fecha: '2026', peso: 'PDF · 32 págs. · 6 MB', href: '/docs/abc-plataformas-juventud-valle.pdf' },
  { titulo: 'Reglamento interno de la Plataforma Departamental', tipo: 'Reglamento', fecha: '[fecha]', pendiente: 'PH-12' },
  { titulo: 'Plan de Acción del período', tipo: 'Plan', fecha: '[fecha]', pendiente: 'PH-13' },
  { titulo: 'Acta de conformación y registro ante la Procuraduría Regional', tipo: 'Acta', fecha: '[fecha]', pendiente: 'PH-14' },
  { titulo: 'Ley 1622 de 2013, Estatuto de Ciudadanía Juvenil', tipo: 'Norma', fecha: '2013', peso: 'Función Pública', href: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52971', externo: true },
  { titulo: 'Ley 1885 de 2018, reforma al Estatuto', tipo: 'Norma', fecha: '2018', peso: 'Secretaría del Senado', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1885_2018.html', externo: true },
];
