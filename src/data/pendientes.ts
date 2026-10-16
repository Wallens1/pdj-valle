export type Estado = 'pendiente' | 'en-revision' | 'aprobado';

export type Pendiente = {
  id: string;
  titulo: string;
  pagina: string; // ruta donde aparece
  falta: string; // qué necesito de la Plataforma
  tipo: 'texto' | 'foto' | 'dato' | 'documento' | 'contacto' | 'funcion';
  estado: Estado;
};

export const pendientes: Pendiente[] = [
  { id: 'PH-01', titulo: 'Mensaje de bienvenida', pagina: '/', tipo: 'texto', estado: 'pendiente',
    falta: 'El saludo de la portada lo escribí yo de ejemplo. Mándenme el de ustedes, cortico.' },
  { id: 'PH-02', titulo: 'Foto principal', pagina: '/', tipo: 'foto', estado: 'pendiente',
    falta: 'Una foto bien bonita de ustedes en sesión. Que se vea grande y que los que salen estén de acuerdo.' },
  { id: 'PH-03', titulo: 'Plataformas activas', pagina: '/', tipo: 'dato', estado: 'pendiente',
    falta: '¿Cuántas plataformas municipales están funcionando hoy en el Valle? Si saben de dónde sale el dato, mejor.' },
  { id: 'PH-04', titulo: 'Agenda', pagina: '/agenda', tipo: 'dato', estado: 'pendiente',
    falta: 'Las fechas que están son inventadas. Pásenme las reales: cuándo, dónde y de qué se va a hablar.' },
  { id: 'PH-05', titulo: 'Redes y contacto', pagina: '/contacto', tipo: 'contacto', estado: 'pendiente',
    falta: 'El correo ya quedó. Las redes que aparecen siguen siendo de mentiras: pásenme las de verdad.' },
  { id: 'PH-06', titulo: 'Misión', pagina: '/quienes-somos', tipo: 'texto', estado: 'pendiente',
    falta: 'Esta misión es un borrador. Cámbienla por la que aprueben o díganme si les sirve así.' },
  { id: 'PH-07', titulo: 'Visión', pagina: '/quienes-somos', tipo: 'texto', estado: 'pendiente',
    falta: 'Igual que la misión: es borrador. Me dicen si va así o la cambian.' },
  { id: 'PH-08', titulo: 'Fotos del equipo', pagina: '/quienes-somos', tipo: 'foto', estado: 'pendiente',
    falta: 'Una foto de cada uno (mejor vertical), de qué municipio es y qué hace en la Plataforma.' },
  { id: 'PH-09', titulo: 'Cómo se conforma', pagina: '/abc', tipo: 'dato', estado: 'pendiente',
    falta: 'Falta confirmar si la Departamental se arma por subregión o por municipio, y cuántos delegados son.' },
  { id: 'PH-10', titulo: 'Municipios por subregión', pagina: '/territorio', tipo: 'dato', estado: 'aprobado',
    falta: 'Listo, ya quedó con el ABC 2026.' },
  { id: 'PH-11', titulo: 'Contacto de cada municipio', pagina: '/territorio', tipo: 'contacto', estado: 'pendiente',
    falta: 'De cada plataforma municipal: si está activa, desde cuándo, y a quién se le puede escribir.' },
  { id: 'PH-12', titulo: 'Reglamento', pagina: '/documentos', tipo: 'documento', estado: 'pendiente',
    falta: 'Pásenme el reglamento interno en PDF.' },
  { id: 'PH-13', titulo: 'Plan de acción', pagina: '/documentos', tipo: 'documento', estado: 'pendiente',
    falta: 'El plan de acción en PDF y la fecha en que lo aprobaron.' },
  { id: 'PH-14', titulo: 'Actas', pagina: '/documentos', tipo: 'documento', estado: 'pendiente',
    falta: 'Las actas que quieran que la gente vea.' },
  { id: 'PH-15', titulo: 'Noticias', pagina: '/', tipo: 'texto', estado: 'pendiente',
    falta: 'Tres cosas que hayan logrado hace poco, con foto y un par de líneas.' },
  { id: 'PH-16', titulo: 'Galería', pagina: '/', tipo: 'foto', estado: 'pendiente',
    falta: 'Entre 6 y 12 fotos de jornadas en distintos municipios, diciendo quién las tomó.' },
  { id: 'PH-17', titulo: 'Voces del Valle', pagina: '/quienes-somos', tipo: 'texto', estado: 'pendiente',
    falta: 'Frases de jóvenes reales (nombre y municipio). No voy a poner ninguna inventada.' },
  { id: 'PH-18', titulo: 'Dirección de la página', pagina: '/contacto', tipo: 'contacto', estado: 'pendiente',
    falta: 'Falta decidir la dirección final de la página.' },
  { id: 'PH-19', titulo: 'Cuentas para subir documentos', pagina: '/documentos', tipo: 'funcion', estado: 'pendiente',
    falta: 'Más adelante cada plataforma podrá subir sus actas. Hay que decidir quién da el visto bueno.' },
  { id: 'PH-20', titulo: 'Aliados', pagina: '/', tipo: 'foto', estado: 'pendiente',
    falta: 'Los logos de las entidades aliadas, con su permiso para ponerlos.' },
];

export const pendiente = (id: string) => pendientes.find((p) => p.id === id);

export const frase = (p: Pendiente) => (p.tipo === 'foto' ? 'Aquí falta foto' : 'Esto va a cambiar a lo que ustedes digan');
