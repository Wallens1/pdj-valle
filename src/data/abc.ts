// Fuente: ABC de las Plataformas de Juventud, edición final 2026.

export const hitos = [
  { anio: '1991', titulo: 'Constitución Política', texto: 'Los artículos 45 y 103 blindan el derecho de los jóvenes a participar. No es negociable.' },
  { anio: '2012', titulo: 'Sentencia C-862', texto: 'La Corte hace control previo y declara exequible el estatuto por su trámite de ley estatutaria.' },
  { anio: '2013', titulo: 'Ley 1622, Estatuto de Ciudadanía Juvenil', texto: 'Nace el Sistema Nacional de Juventud: por primera vez la ley reconoce al joven como sujeto político.' },
  { anio: '2018', titulo: 'Ley 1885', texto: 'Reforma los artículos 60 a 62 y da origen al diseño vigente de la Plataforma, autónoma.' },
  { anio: '2019', titulo: 'Plataforma Nacional', texto: 'Se instala formalmente como instancia de incidencia en la agenda pública del país.' },
  { anio: '2021', titulo: 'CONPES 4040', texto: '«Pacto Colombia con las Juventudes»: 14.600 jóvenes consultados e inversión histórica.' },
  { anio: '2021', titulo: 'Primeros Consejos electos', texto: '5 de diciembre: primera elección unificada de Consejos de Juventud en la historia del país.' },
  { anio: '2022', titulo: 'Consejería Presidencial', texto: 'Se crea la Consejería Presidencial para la Juventud, con vocería directa ante el Gobierno Nacional.' },
  { anio: '2025', titulo: 'Segunda elección', texto: '19 de octubre: segunda elección de Consejos de Juventud. El sistema ya es recurrente.' },
];

export const conpes = [
  { cifra: 14.6, sufijo: ' mil', texto: 'jóvenes consultados en 492 mesas de los 32 departamentos', decimales: 1 },
  { cifra: 1272, sufijo: '', texto: 'propuestas de acción recogidas en el territorio', decimales: 0 },
  { cifra: 33.5, sufijo: ' billones', texto: 'de pesos de inversión comprometida entre 2021 y 2030', decimales: 1 },
  { cifra: 142, sufijo: '', texto: 'acciones con 32 entidades del Estado comprometidas', decimales: 0 },
];

export const siEres = [
  'Escenario de encuentro entre procesos juveniles',
  'Autónoma: con tu propio reglamento',
  'Obligatoria en cada nivel territorial',
  'Interlocutora válida ante el Estado',
];

export const noEres = [
  'Persona jurídica: no firmas convenios',
  'Dependencia de la Alcaldía o la Gobernación',
  'Reemplazo de la autonomía de tus organizaciones',
  'Instancia con decisión administrativa directa',
];

export const puede = [
  { si: true, texto: 'Definir su plan de acción y sus prioridades' },
  { si: true, texto: 'Proponer alianzas y proyectos' },
  { si: true, texto: 'Adoptar su propio reglamento interno' },
  { si: true, texto: 'Concertar la agenda juvenil con la administración' },
  { si: false, texto: 'Ejecutar presupuesto público a su nombre' },
  { si: false, texto: 'Firmar convenios como entidad' },
  { si: false, texto: 'Imponer su agenda de forma unilateral' },
];

export const integrantes = [
  { tipo: 'Formales', texto: 'Con personería jurídica y registro ante autoridad competente.' },
  { tipo: 'No formales', texto: 'Sin personería, pero reconocidos por documento privado.' },
  { tipo: 'Informales', texto: 'Colectivos espontáneos, parches, barras: la ley los reconoce igual.' },
];

export const niveles = [
  { nivel: 'Municipal', conforma: 'Procesos y espacios juveniles del territorio.', registro: 'Personería Municipal', sesiona: 'Mínimo 1 vez al mes' },
  { nivel: 'Distrital', conforma: 'Igual que la municipal, en Cali y Buenaventura.', registro: 'Personería Distrital', sesiona: 'Mínimo 1 vez al mes' },
  { nivel: 'Departamental', conforma: '2 delegados (1 hombre + 1 mujer) por cada plataforma municipal, o por subregión.', registro: 'Procuraduría Regional', sesiona: 'Mínimo 2 veces al año' },
  { nivel: 'Nacional', conforma: '2 delegados por cada Departamental o Distrital; mínimo 50 % instaladas.', registro: 'Procuraduría', sesiona: '2 veces al año' },
];

export const rutaConformacion = [
  { paso: 'Convocatoria inicial', texto: 'La entidad de juventud convoca y levanta la línea base de procesos existentes.' },
  { paso: 'Caracterización', texto: 'Se identifican los procesos y espacios juveniles del territorio.' },
  { paso: 'Encuentro autónomo', texto: 'La administración pone el lugar; los procesos se articulan sin injerencia.' },
  { paso: 'Conformación', texto: 'La Plataforma define su reglamento y su plan de acción.' },
  { paso: 'Registro', texto: 'Ante Personería (municipal o distrital) o Procuraduría Regional (departamental).' },
  { paso: 'Ejercicio pleno', texto: 'El Ministerio Público hace seguimiento y la Plataforma ejerce sus funciones del Art. 62.' },
];

export const funciones = [
  { verbo: 'Impulsar', texto: 'Procesos y espacios de participación juvenil en el territorio.' },
  { verbo: 'Participar en agendas', texto: 'Diseño y desarrollo de Agendas de Juventud en todos los niveles.' },
  { verbo: 'Ejercer veeduría', texto: 'A planes de desarrollo, políticas y programas de juventud.' },
  { verbo: 'Autorregularse', texto: 'Reglamento interno propio y plan de acción, sin injerencia.' },
  { verbo: 'Designar veedores', texto: '2 integrantes en la Comisión de Concertación, con voz y sin voto.' },
  { verbo: 'Interlocución oficial', texto: 'Canal válido de diálogo ante el Estado y actores privados.' },
  { verbo: 'Proponer', texto: 'Políticas, planes y proyectos ante las autoridades territoriales.' },
];

export const comision = [
  { quien: 'Gobierno', cuantos: 3, texto: 'delegados de la administración territorial', voto: true },
  { quien: 'Consejo de Juventud', cuantos: 3, texto: 'delegados del Consejo, con voto', voto: true },
  { quien: 'Plataforma', cuantos: 2, texto: 'veedores con voz y sin voto, salvo régimen transitorio', voto: false },
];

export const beneficios = {
  municipal: {
    titulo: 'Si eres plataformado municipal',
    items: [
      'Vocería reconocida y oficial ante la Alcaldía (Art. 62.6)',
      'Voz directa en el diseño de la Agenda de Juventud local',
      'Veeduría formal a planes y presupuesto de juventud',
      'Acompañamiento garantizado de la Personería Municipal',
      'Elegibilidad para delegar a la Plataforma Departamental',
      'Trayectoria de liderazgo verificable para tu hoja de vida',
    ],
    tip: 'Guarda cada acta, oficio y radicado de tu gestión: es el respaldo que te habilita para postularte como delegado departamental.',
  },
  departamental: {
    titulo: 'Si eres delegado departamental',
    items: [
      'Interlocución directa con la Gobernación y su Secretaría',
      'Incidencia real en el rubro de juventud del Plan de Desarrollo',
      'Articulación con redes departamentales como Ruta Joven del Valle',
      'Elegibilidad para delegar a la Plataforma Nacional',
      'Acceso a oferta de cooperación internacional en juventud',
      'Visibilidad institucional en espacios como el Día de la Juventud',
    ],
    tip: 'Cuando negocies con la Gobernación, exige que el rubro de juventud quede nombrado en el Plan de Desarrollo: un rubro sin línea propia es el primero en desaparecer.',
  },
  distrital: {
    titulo: 'Si eres plataformado distrital',
    items: [
      'Identidad institucional propia frente a la Alcaldía Distrital',
      'Interlocución sobre la política pública distrital de juventud',
      'Referente nacional: la Casa de Juventud de Bogotá ya funciona',
      'Participación en la Departamental como delegación de base',
      'Registro simplificado ante una sola Personería Distrital',
    ],
    tip: 'Exigir un espacio físico propio y estable es un objetivo concreto y ya probado, no una aspiración vaga.',
  },
};

export const planTactico = [
  { plazo: '0 a 3 meses', tareas: ['Actualizar el acta ante la Procuraduría Regional', 'Designar delegados formales ante la Comisión', 'Verificar si el Consejo está posesionado en cada municipio'] },
  { plazo: '0 a 6 meses', tareas: ['Aprobar el reglamento interno propio', 'Definir el Plan de Acción del período', 'Confirmar el modelo de conformación departamental'] },
  { plazo: '1 a 4 años', tareas: ['Exigir rubro presupuestal específico en el Plan de Desarrollo', 'Impulsar lineamientos territoriales unificados'] },
];

export const autodiagnostico = [
  '¿Tienen acta de conformación vigente?',
  '¿Están registrados ante Personería o Procuraduría?',
  '¿Tienen reglamento interno propio adoptado?',
  '¿Cuentan con un Plan de Acción que todos conocen?',
  '¿Cumplen la periodicidad mínima de sesiones?',
  '¿Han designado delegados a la Comisión?',
  '¿Verificaron si aplica voto pleno o veeduría?',
  '¿La administración garantiza espacio y herramientas?',
];

export const exigibilidad = [
  { paso: 'Derecho de petición', texto: 'Formal, radicado, con copia a la oficina de juventud del territorio. Tienen 15 días hábiles para responder (Ley 1755 de 2015).' },
  { paso: 'Queja a la Personería', texto: 'Si vence el plazo sin respuesta, radica la queja sin esperar más.' },
  { paso: 'Procuraduría Regional', texto: 'Si persiste: tiene un mecanismo activo de seguimiento a las Plataformas.' },
  { paso: 'Acción de tutela', texto: 'Cuando lo anterior no basta, o hay riesgo de un perjuicio irremediable: el mecanismo constitucional más fuerte y rápido que existe en Colombia.' },
];

export const plantillaPeticion = `Señor(a) [Alcalde / Gobernador] de [territorio]:

Solicito respetuosamente [convocar la Plataforma / garantizar espacio y herramientas].

Fundamento: Art. [60 / 61 / 66], Ley 1622 de 2013, modificada por la Ley 1885 de 2018.

Plazo de respuesta: 15 días hábiles (Ley 1755 de 2015).

Atentamente,
[Nombre] · [Plataforma de Juventud de …] · [correo]`;

export const faq = [
  { p: '¿Quién puede hacer parte de la Plataforma?', r: 'Cualquier proceso juvenil: organizaciones formales con personería jurídica, procesos no formales reconocidos por documento privado y colectivos informales sin registro. Todos cuentan.' },
  { p: '¿La Plataforma puede firmar convenios o recibir recursos?', r: 'No a su nombre: no tiene personería jurídica. Un recurso se canaliza por una organización formal que integre la Plataforma o por la entidad territorial de juventud.' },
  { p: '¿Tenemos voto en la Comisión de Concertación?', r: 'Si el Consejo de Juventud está posesionado, la Plataforma tiene 2 veedores con voz y sin voto. Si no lo está, 3 delegados asumen las funciones del Consejo con voto. Verifícalo por escrito con la Personería.' },
  { p: '¿Cada cuánto tenemos que sesionar?', r: 'Municipal y distrital: mínimo una vez al mes. Departamental: mínimo dos veces al año. Las extraordinarias, según el reglamento interno.' },
  { p: 'Soy de Cali o Buenaventura, ¿qué cambia?', r: 'Ambos son Distritos Especiales: tu plataforma es distrital, se registra ante la Personería Distrital y participa en la Departamental como cualquier delegación de base.' },
  { p: '¿Qué hacemos si no nos convocan?', r: 'Derecho de petición citando el Art. 61 de la Ley 1622. Si en 15 días hábiles no responden, queja a la Personería, luego traslado a la Procuraduría Regional y, como cuarto escalón, acción de tutela.' },
  { p: '¿Qué es ser plataformado?', r: 'No es un cargo ni un cupo. Es representar tu organización (no solo tu opinión), rendir cuentas a quien te delegó, ejercer veeduría aunque incomode y sostener el proceso más allá de tu período.' },
  { p: '¿Por qué exigir paridad en las delegaciones?', r: 'Porque es obligatoria: cada delegación a otro nivel lleva 1 hombre y 1 mujer. Una delegación sin paridad puede ser objetada en el registro.' },
];

// Sección 00 · Qué es una plataforma
export const queEs = {
  definicion: 'Escenario de encuentro, articulación, coordinación e interlocución de las juventudes, de carácter autónomo.',
  real: 'Esa es la definición jurídica. La real: el lugar donde parches, colectivos, semilleros, barras, grupos culturales, deportivos, ambientales, estudiantiles, étnicos y LGBTIQ+ dejan de actuar por separado y empiezan a hablar con una sola voz frente al Estado.',
  plataformado: 'No es un cargo ni un cupo. Es representar tu organización (no solo tu opinión), rendir cuentas a quien te delegó, ejercer veeduría aunque incomode y sostener el proceso más allá de tu período.',
  porQue: 'Antes de 1991 la juventud no era sujeto político en la ley: era objeto de protección, como un menor permanente. La Constitución rompió eso. En 1997 nació la primera Ley de la Juventud (375), sin blindaje estatutario: cualquier gobierno podía vaciarla. La Sentencia C-862 de 2012 exigió el trámite más fuerte, y en 2013 nació la Ley 1622.',
  lucha: 'Entre 2019 y 2021, la movilización social juvenil, incluido el paro nacional de 2021, puso la exclusión en el centro del debate. El Gobierno respondió con 492 mesas y 14.600 jóvenes consultados en 32 departamentos.',
  resultado: 'CONPES 4040: 1.272 propuestas recogidas del territorio, 142 acciones, 32 entidades del Estado comprometidas y $33,5 billones de inversión 2021-2030.',
};

export const subsistemas = [
  { nombre: 'Institucional', texto: 'Consejo Nacional de Política Pública de Juventud y dependencias territoriales.' },
  { nombre: 'Participación', texto: 'Procesos organizativos, espacios juveniles, Plataformas y Asambleas.' },
  { nombre: 'Comisiones', texto: 'Comisiones de Concertación y Decisión.' },
];

export const guionVoto = [
  'Solicito confirmar si el Consejo de Juventud de [municipio] está posesionado.',
  'En caso afirmativo, indicar la fecha de posesión.',
  'En caso negativo, confirmar el régimen transitorio vigente.',
];

export const roles = [
  { rol: 'Radicar', quien: 'Vocero o vocera de la Plataforma' },
  { rol: 'Archivar', quien: 'Secretaría técnica interna' },
  { rol: 'Verificar', quien: 'Delegados ante la Comisión' },
];

export const tutela = {
  protege: 'La participación juvenil es un derecho fundamental (Arts. 45 y 103 de la Constitución): su vulneración es tutelable.',
  quien: 'Cualquier persona, sin necesidad de abogado, en nombre propio o de su organización, ante cualquier juez de la República.',
  requisitos: [
    'Vulneración de un derecho fundamental.',
    'No existe otro medio de defensa judicial, o hay riesgo de perjuicio irremediable.',
    'Explicar con claridad el hecho y el derecho afectado.',
  ],
  plazo: 'Fallo en máximo 10 días hábiles desde que se radica. Si no se cumple, la autoridad incurre en desacato: arresto hasta 6 meses y multa (Art. 52, Decreto 2591 de 1991).',
  cuando: [
    { caso: 'Nunca convocaron la conformación', detalle: 'Pese a petición y queja previas ante la Personería.' },
    { caso: 'La Comisión no sesiona hace más de un año', detalle: 'Pese a ser obligatoria por el Art. 66.' },
    { caso: 'Te niegan espacio y recursos sistemáticamente', detalle: 'Después de haberlo exigido por escrito más de una vez.' },
  ],
};

export const frases = {
  identidad: 'Nunca dejes de pelear por algo que es tu derecho: participa y defiende tus ideales.',
  diagnostico: 'El 18,5 % de las Plataformas municipales reportadas nunca llega a sesionar. El problema no es la ley sino la continuidad.',
  delegados: 'Ser delegado departamental es ocupar, con voz y decisión real, una de las pocas sillas que el país sí les garantiza a los jóvenes.',
};
