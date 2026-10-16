// Las 6 subregiones y los 42 territorios del Valle del Cauca.
// Fuente: ABC de las Plataformas de Juventud (ed. 2026), p. 12.
// `confirmar: true` marca los municipios que el ABC no ubica de forma explícita
// en una subregión: la Plataforma debe validar la asignación (ver /revision).

export type Subregion = {
  id: string;
  nombre: string;
  color: string; // token CSS de su capítulo
  tinta: string;
  foto?: { src: string; alt: string; credito?: string };
  resumen: string;
};

export type Territorio = {
  nombre: string;
  subregion: string;
  distrito?: string; // nombre oficial cuando es Distrito Especial
  confirmar?: boolean;
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
    resumen: 'Llanura, caña y municipios que se mueven a ritmo de feria.',
  },
  {
    id: 'centro',
    nombre: 'Centro',
    color: 'var(--azul)',
    tinta: 'var(--tinta)',
    resumen: 'Cali y su área: la mayor concentración de procesos juveniles del departamento.',
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
    resumen: 'Buenaventura: puerto, biodiversidad y Distrito Especial con plataforma propia.',
  },
  {
    id: 'centro-norte',
    nombre: 'Centro-Norte',
    color: 'var(--lima)',
    tinta: 'var(--tinta)',
    resumen: 'Buga, Calima y el valle medio: lagos, montaña y tradición.',
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
    resumen: 'El corazón del Valle: Tuluá y los municipios cordilleranos que la rodean.',
  },
  {
    id: 'norte',
    nombre: 'Norte',
    color: 'var(--indigo)',
    tinta: 'var(--papel)',
    foto: {
      src: '/img/territorio-el.webp',
      alt: 'Plaza, iglesias y tejados de El Dovio entre montañas',
      credito: '“El Dovio, Valle del Cauca, Colombia”, Hectorangelazul, CC BY-SA 4.0',
    },
    resumen: 'Cartago y el norte cafetero: el territorio con más municipios del Valle.',
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
  { nombre: 'La Cumbre', subregion: 'centro', confirmar: true },
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
  { nombre: 'Bugalagrande', subregion: 'tulua', confirmar: true },
  { nombre: 'Zarzal', subregion: 'tulua' },
  { nombre: 'Trujillo', subregion: 'tulua' },
  { nombre: 'Riofrío', subregion: 'tulua' },
  { nombre: 'San Pedro', subregion: 'tulua' },
  { nombre: 'Sevilla', subregion: 'tulua' },
  { nombre: 'Caicedonia', subregion: 'tulua' },
  // Norte
  { nombre: 'Cartago', subregion: 'norte' },
  { nombre: 'Roldanillo', subregion: 'norte' },
  { nombre: 'La Unión', subregion: 'norte' },
  { nombre: 'Toro', subregion: 'norte' },
  { nombre: 'El Águila', subregion: 'norte' },
  { nombre: 'Alcalá', subregion: 'norte', confirmar: true },
  { nombre: 'Ansermanuevo', subregion: 'norte', confirmar: true },
  { nombre: 'Argelia', subregion: 'norte', confirmar: true },
  { nombre: 'Bolívar', subregion: 'norte', confirmar: true },
  { nombre: 'El Cairo', subregion: 'norte', confirmar: true },
  { nombre: 'El Dovio', subregion: 'norte', confirmar: true },
  { nombre: 'La Victoria', subregion: 'norte', confirmar: true },
  { nombre: 'Obando', subregion: 'norte', confirmar: true },
  { nombre: 'Ulloa', subregion: 'norte', confirmar: true },
  { nombre: 'Versalles', subregion: 'norte', confirmar: true },
];

export const porSubregion = (id: string) => territorios.filter((t) => t.subregion === id);
