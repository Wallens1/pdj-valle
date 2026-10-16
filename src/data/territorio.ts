// Subregiones del Valle del Cauca según el ABC de las Plataformas de Juventud,
// edición final 2026, «Las subregiones del Valle — completas», p. 12:
// 3 subregiones + 2 Distritos Especiales = 42 territorios.

export type Subregion = {
  id: string;
  nombre: string; // como aparece en el ABC
  color: string; // token CSS de su capítulo
  tinta: string;
  foto?: { src: string; alt: string; credito?: string };
  notaAbc?: string; // aclaración que trae el propio ABC
  distritos?: boolean; // el grupo de los Distritos Especiales
};

export type Territorio = {
  nombre: string;
  subregion: string;
  distrito?: string; // nombre oficial cuando es Distrito Especial
};

export const subregiones: Subregion[] = [
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
  },
  {
    id: 'centro',
    nombre: 'Centro',
    color: 'var(--teal)',
    tinta: 'var(--papel)',
    foto: {
      src: '/img/territorio-tulua.webp',
      alt: 'Vista panorámica de Tuluá con la cordillera al fondo',
      credito: '“Tuluá, Valle del Cauca, Colombia”, Andres Garzon, CC BY 2.0',
    },
  },
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
    id: 'distritos',
    nombre: 'Distritos Especiales',
    color: 'var(--lima)',
    tinta: 'var(--tinta)',
    distritos: true,
    foto: {
      src: '/img/abc-buenaventura.webp',
      alt: 'Jóvenes de Buenaventura juntando sus manos al centro',
      credito: 'Jóvenes de Buenaventura. Foto: ABC de las Plataformas de Juventud 2026',
    },
    notaAbc: 'Cali y Buenaventura no son municipios comunes: registran su Plataforma como Distrital (Personería Distrital), no municipal. En Buenaventura, 1 de cada 4 habitantes es joven (14 a 28 años): 82.420 personas (DANE, citado en Pares/CODHES 2022).',
  },
];

export const territorios: Territorio[] = [
  // Subregión Norte: 16 municipios
  ...[
    'Alcalá', 'Ansermanuevo', 'Argelia', 'Bolívar', 'Cartago', 'El Águila', 'El Cairo', 'El Dovio',
    'La Unión', 'La Victoria', 'Obando', 'Roldanillo', 'Toro', 'Ulloa', 'Versalles', 'Zarzal',
  ].map((nombre) => ({ nombre, subregion: 'norte' })),
  // Subregión Centro: 13 municipios
  ...[
    'Andalucía', 'Bugalagrande', 'Caicedonia', 'Calima-El Darién', 'Guadalajara de Buga', 'Guacarí',
    'Restrepo', 'Riofrío', 'San Pedro', 'Sevilla', 'Trujillo', 'Tuluá', 'Yotoco',
  ].map((nombre) => ({ nombre, subregion: 'centro' })),
  // Subregión Sur: 11 municipios
  ...[
    'Candelaria', 'Dagua', 'El Cerrito', 'Florida', 'Ginebra', 'Jamundí', 'La Cumbre', 'Palmira',
    'Pradera', 'Vijes', 'Yumbo',
  ].map((nombre) => ({ nombre, subregion: 'sur' })),
  // Distritos Especiales: 2 ciudades
  { nombre: 'Cali', subregion: 'distritos', distrito: 'Santiago de Cali, Distrito Especial, Deportivo, Cultural, Turístico, Empresarial y de Servicios' },
  { nombre: 'Buenaventura', subregion: 'distritos', distrito: 'Buenaventura, Distrito Especial, Industrial, Portuario, Biodiverso y Ecoturístico' },
];

export const porSubregion = (id: string) => territorios.filter((t) => t.subregion === id);
