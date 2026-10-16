// Las 6 subregiones del Valle del Cauca, tal como las trae el ABC de las
// Plataformas de Juventud (ed. 2026), tabla «Las 6 subregiones del Valle», p. 12.
//
// El ABC nombra 35 territorios y para el Norte agrega «y 8 más» sin decir
// cuáles. Los municipios que el ABC no nombra quedan en `sinUbicar` hasta que la
// Plataforma confirme su subregión (pendiente PH-10). No se asignan por cuenta propia.

export type Subregion = {
  id: string;
  nombre: string; // como aparece en el ABC
  color: string; // token CSS de su capítulo
  tinta: string;
  foto?: { src: string; alt: string; credito?: string };
  notaAbc?: string; // aclaración que trae el propio ABC
};

export type Territorio = {
  nombre: string;
  subregion: string | null; // null = el ABC no lo ubica
  distrito?: string; // nombre oficial cuando es Distrito Especial
};

export const subregiones: Subregion[] = [
  {
    id: 'sur',
    nombre: 'Sur',
    color: 'var(--coral)',
    tinta: 'var(--tinta)',
    foto: {
      src: '/img/territorio-palmira.webp',
      alt: 'Collage de calles, parques y plazas de Palmira',
      credito: '“Palmira Valle Del Cauca”, Dantiagok017, CC BY-SA 4.0',
    },
  },
  {
    id: 'centro',
    nombre: 'Centro',
    color: 'var(--azul)',
    tinta: 'var(--tinta)',
    notaAbc: 'Incluye a Santiago de Cali, Distrito Especial: su plataforma es distrital y se registra ante la Personería Distrital.',
  },
  {
    id: 'pacifico',
    nombre: 'Pacífico',
    color: 'var(--teal)',
    tinta: 'var(--papel)',
    foto: {
      src: '/img/territorio-puente.webp',
      alt: 'Muelle de madera y lanchas en Buenaventura',
      credito: '“Puente de los Nayeros Buenaventura, Colombia”, Diaz.darly, CC BY-SA 4.0',
    },
    notaAbc: 'Buenaventura es Distrito Especial: su plataforma es distrital y participa en la Departamental como cualquier delegación de base.',
  },
  {
    id: 'centro-norte',
    nombre: 'Centro-Norte',
    color: 'var(--lima)',
    tinta: 'var(--tinta)',
  },
  {
    id: 'tulua',
    nombre: 'Tuluá',
    color: 'var(--viridian)',
    tinta: 'var(--papel)',
    foto: {
      src: '/img/territorio-tulua.webp',
      alt: 'Vista panorámica de Tuluá con la cordillera al fondo',
      credito: '“Tuluá, Valle del Cauca, Colombia”, Andres Garzon, CC BY 2.0',
    },
  },
  {
    id: 'norte',
    nombre: 'Norte',
    color: 'var(--indigo)',
    tinta: 'var(--papel)',
    notaAbc: 'El ABC nombra estos 5 municipios «y 8 más», sin decir cuáles.',
  },
];

export const territorios: Territorio[] = [
  // Sur
  { nombre: 'Palmira', subregion: 'sur' },
  { nombre: 'Florida', subregion: 'sur' },
  { nombre: 'Pradera', subregion: 'sur' },
  { nombre: 'El Cerrito', subregion: 'sur' },
  { nombre: 'Candelaria', subregion: 'sur' },
  { nombre: 'Ginebra', subregion: 'sur' },
  // Centro
  { nombre: 'Cali', subregion: 'centro', distrito: 'Santiago de Cali, Distrito Especial' },
  { nombre: 'Yumbo', subregion: 'centro' },
  { nombre: 'Jamundí', subregion: 'centro' },
  { nombre: 'Dagua', subregion: 'centro' },
  // Pacífico
  { nombre: 'Buenaventura', subregion: 'pacifico', distrito: 'Buenaventura, Distrito Especial' },
  // Centro-Norte
  { nombre: 'Buga', subregion: 'centro-norte' },
  { nombre: 'Guacarí', subregion: 'centro-norte' },
  { nombre: 'Calima-Darién', subregion: 'centro-norte' },
  { nombre: 'Restrepo', subregion: 'centro-norte' },
  { nombre: 'Vijes', subregion: 'centro-norte' },
  { nombre: 'Yotoco', subregion: 'centro-norte' },
  // Tuluá
  { nombre: 'Tuluá', subregion: 'tulua' },
  { nombre: 'Andalucía', subregion: 'tulua' },
  { nombre: 'Zarzal', subregion: 'tulua' },
  { nombre: 'Trujillo', subregion: 'tulua' },
  { nombre: 'Riofrío', subregion: 'tulua' },
  { nombre: 'San Pedro', subregion: 'tulua' },
  { nombre: 'Sevilla', subregion: 'tulua' },
  { nombre: 'Caicedonia', subregion: 'tulua' },
  // Norte (los que nombra el ABC)
  { nombre: 'Cartago', subregion: 'norte' },
  { nombre: 'Roldanillo', subregion: 'norte' },
  { nombre: 'La Unión', subregion: 'norte' },
  { nombre: 'Toro', subregion: 'norte' },
  { nombre: 'El Águila', subregion: 'norte' },
  // Sin ubicar en el ABC (8 de ellos son los «8 más» del Norte)
  { nombre: 'Alcalá', subregion: null },
  { nombre: 'Ansermanuevo', subregion: null },
  { nombre: 'Argelia', subregion: null },
  { nombre: 'Bolívar', subregion: null },
  { nombre: 'Bugalagrande', subregion: null },
  { nombre: 'El Cairo', subregion: null },
  { nombre: 'El Dovio', subregion: null },
  { nombre: 'La Cumbre', subregion: null },
  { nombre: 'La Victoria', subregion: null },
  { nombre: 'Obando', subregion: null },
  { nombre: 'Ulloa', subregion: null },
  { nombre: 'Versalles', subregion: null },
];

export const porSubregion = (id: string) => territorios.filter((t) => t.subregion === id);
export const sinUbicar = territorios.filter((t) => t.subregion === null);
