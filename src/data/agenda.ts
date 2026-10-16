// AGENDA DE EJEMPLO (PH-04). Fechas, lugares y temas son ilustrativos para ver
// el diseño con contenido completo; se reemplazan por los reales al avalar.

export type Evento = { hora: string; titulo: string; nota: string; lugar: string; tipo: 'Sesión' | 'Comisión' | 'Encuentro' | 'Taller' };
export type Dia = { id: string; dia: string; fecha: string; eventos: Evento[] };

export const agenda: Dia[] = [
  {
    id: 'nov-08',
    dia: 'Sábado',
    fecha: '8 nov',
    eventos: [
      { hora: '09:00', titulo: 'Sesión ordinaria departamental', nota: 'Balance del Plan de Acción y relevo de delegaciones', lugar: 'Cali', tipo: 'Sesión' },
      { hora: '14:00', titulo: 'Mesa de reglamento interno', nota: 'Revisión del capítulo de delegados', lugar: 'Cali', tipo: 'Taller' },
    ],
  },
  {
    id: 'nov-22',
    dia: 'Sábado',
    fecha: '22 nov',
    eventos: [
      { hora: '10:00', titulo: 'Encuentro subregional Norte', nota: 'Plataformas de Cartago, Roldanillo y municipios vecinos', lugar: 'Cartago', tipo: 'Encuentro' },
      { hora: '15:00', titulo: 'Taller: derecho de petición', nota: 'Cómo exigir convocatoria y espacio con la ley en la mano', lugar: 'Cartago', tipo: 'Taller' },
    ],
  },
  {
    id: 'dic-05',
    dia: 'Viernes',
    fecha: '5 dic',
    eventos: [
      { hora: '08:30', titulo: 'Comisión de Concertación y Decisión', nota: 'Seguimiento al rubro de juventud del Plan de Desarrollo', lugar: 'Gobernación del Valle', tipo: 'Comisión' },
    ],
  },
  {
    id: 'dic-13',
    dia: 'Sábado',
    fecha: '13 dic',
    eventos: [
      { hora: '09:00', titulo: 'Encuentro subregional Pacífico', nota: 'Plataforma Distrital de Buenaventura', lugar: 'Buenaventura', tipo: 'Encuentro' },
      { hora: '13:00', titulo: 'Cierre de año juvenil', nota: 'Muestra de procesos y cultura del Pacífico', lugar: 'Buenaventura', tipo: 'Encuentro' },
    ],
  },
];
