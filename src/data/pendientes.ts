// Registro único de todo lo que falta por avalar o entregar.
// Cada <Pendiente id="PH-xx" /> en las páginas lee de aquí, y /revision lista
// el registro completo. Para cerrar uno: cambia `estado` a 'aprobado' y
// reemplaza el contenido de ejemplo en la página indicada.

export type Estado = 'pendiente' | 'en-revision' | 'aprobado';

export type Pendiente = {
  id: string;
  titulo: string;
  pagina: string; // ruta donde aparece
  falta: string; // qué necesitamos de la Plataforma
  tipo: 'texto' | 'foto' | 'dato' | 'documento' | 'contacto' | 'funcion';
  estado: Estado;
};

export const pendientes: Pendiente[] = [
  { id: 'PH-01', titulo: 'Mensaje de bienvenida', pagina: '/', tipo: 'texto', estado: 'pendiente',
    falta: 'Texto de bienvenida firmado por la vocería (máximo 60 palabras). El actual es un borrador de ejemplo.' },
  { id: 'PH-02', titulo: 'Foto principal 2026', pagina: '/', tipo: 'foto', estado: 'pendiente',
    falta: 'Foto horizontal de buena resolución (mín. 1600 px) de la Plataforma en sesión, con autorización de uso de imagen.' },
  { id: 'PH-03', titulo: 'Plataformas municipales activas', pagina: '/', tipo: 'dato', estado: 'pendiente',
    falta: 'Número de plataformas municipales/distritales activas en el Valle a la fecha, con fuente (Procuraduría o Secretaría).' },
  { id: 'PH-04', titulo: 'Agenda de sesiones', pagina: '/agenda', tipo: 'dato', estado: 'pendiente',
    falta: 'Fechas, lugares y temas reales de sesiones ordinarias, Comisión de Concertación y encuentros subregionales.' },
  { id: 'PH-05', titulo: 'Canales oficiales', pagina: '/contacto', tipo: 'contacto', estado: 'pendiente',
    falta: 'Correo, Instagram, TikTok, WhatsApp/canal y teléfono oficiales. Los actuales son de ejemplo.' },
  { id: 'PH-06', titulo: 'Misión', pagina: '/quienes-somos', tipo: 'texto', estado: 'pendiente',
    falta: 'Misión aprobada en plenaria (o confirmar que se usa el borrador).' },
  { id: 'PH-07', titulo: 'Visión', pagina: '/quienes-somos', tipo: 'texto', estado: 'pendiente',
    falta: 'Visión aprobada en plenaria (o confirmar que se usa el borrador).' },
  { id: 'PH-08', titulo: 'Fotos y roles del equipo', pagina: '/quienes-somos', tipo: 'foto', estado: 'pendiente',
    falta: 'Retrato vertical (4:5) de cada integrante, su municipio y su rol (vocería, secretaría técnica, delegación…).' },
  { id: 'PH-09', titulo: 'Modelo de conformación', pagina: '/abc', tipo: 'dato', estado: 'pendiente',
    falta: 'Confirmar con la Secretaría de Desarrollo Social si la Departamental se conforma por subregión o por municipio, y cuántos delegados la integran.' },
  { id: 'PH-10', titulo: 'Municipios por subregión', pagina: '/territorio', tipo: 'dato', estado: 'pendiente',
    falta: 'Validar la subregión de los municipios marcados con «por confirmar» (el ABC no los ubica de forma explícita).' },
  { id: 'PH-11', titulo: 'Contacto de cada plataforma municipal', pagina: '/territorio', tipo: 'contacto', estado: 'pendiente',
    falta: 'Por municipio: estado (activa/inactiva), fecha de registro, contacto público de la vocería y red social.' },
  { id: 'PH-12', titulo: 'Reglamento interno', pagina: '/documentos', tipo: 'documento', estado: 'pendiente',
    falta: 'PDF del reglamento interno vigente de la Plataforma Departamental.' },
  { id: 'PH-13', titulo: 'Plan de acción', pagina: '/documentos', tipo: 'documento', estado: 'pendiente',
    falta: 'PDF del Plan de Acción del período y fecha de aprobación.' },
  { id: 'PH-14', titulo: 'Actas públicas', pagina: '/documentos', tipo: 'documento', estado: 'pendiente',
    falta: 'Actas que la Plataforma decida publicar (conformación, sesiones, delegaciones).' },
  { id: 'PH-15', titulo: 'Logros y noticias', pagina: '/', tipo: 'texto', estado: 'pendiente',
    falta: 'Tres logros o noticias recientes con fecha, foto y dos líneas cada uno.' },
  { id: 'PH-16', titulo: 'Galería de jornadas', pagina: '/', tipo: 'foto', estado: 'pendiente',
    falta: 'Entre 6 y 12 fotos de jornadas en distintos municipios, con crédito y autorización.' },
  { id: 'PH-17', titulo: 'Voces del Valle', pagina: '/quienes-somos', tipo: 'texto', estado: 'pendiente',
    falta: 'Testimonios reales (nombre, municipio, una frase) de jóvenes plataformados. No se publicará ninguno inventado.' },
  { id: 'PH-18', titulo: 'Dominio definitivo', pagina: '/contacto', tipo: 'contacto', estado: 'pendiente',
    falta: 'Dominio web y correo institucional definitivos.' },
  { id: 'PH-19', titulo: 'Acceso de plataformados', pagina: '/documentos', tipo: 'funcion', estado: 'pendiente',
    falta: 'Fase 2: cuentas para plataformados que suben actas y documentos. Definir quién aprueba las cuentas y qué se publica.' },
  { id: 'PH-20', titulo: 'Aliados institucionales', pagina: '/', tipo: 'foto', estado: 'pendiente',
    falta: 'Logos autorizados de aliados (Gobernación, Secretaría, Procuraduría Regional, cooperación) y permiso de uso.' },
];

export const pendiente = (id: string) => pendientes.find((p) => p.id === id);
