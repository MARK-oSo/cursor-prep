export interface Testimonial {
  id: string;
  name: string;
  schoolTarget: string;
  avatarUrl?: string;
  quote: string;
  rank?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sofía Ramírez',
    schoolTarget: 'UNAM Prepa 6',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Sofia+Ramirez',
    quote:
      'Con los simulacros adaptativos identifiqué mis huecos en matemáticas en la primera semana. Entré a Prepa 6 con 107 aciertos.',
    rank: 3,
  },
  {
    id: 't2',
    name: 'Carlos Mendoza',
    schoolTarget: 'IPN CECyT 7',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Carlos+Mendoza',
    quote:
      'La analítica me mostró que perdía tiempo en reactivos de historia. Ajusté mi estrategia y subí 15 puntos en el último mes.',
  },
  {
    id: 't3',
    name: 'Valeria Espinoza',
    schoolTarget: 'ENP 2',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Valeria+Espinoza',
    quote:
      'Vivía en Guadalajara y no tenía acceso a cursos presenciales buenos. CursorPrep fue mi única preparación y funcionó.',
    rank: 12,
  },
  {
    id: 't4',
    name: 'Emilio Torres',
    schoolTarget: 'IPN ESCOM',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Emilio+Torres',
    quote:
      'El modo examen cronometrado le quitó el miedo al tiempo. El día del COMIPEMS me sentí como en casa.',
  },
  {
    id: 't5',
    name: 'Mariana Castillo',
    schoolTarget: 'UNAM FES Acatlán',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Mariana+Castillo',
    quote:
      'Llevo estudiando tres meses con el plan personalizado. Por primera vez siento que el tiempo que invierto realmente importa.',
  },
  {
    id: 't6',
    name: 'Rodrigo Peña',
    schoolTarget: 'UANL Preparatoria 16',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Rodrigo+Pena',
    quote:
      'Pensé que era demasiado tarde para prepararme bien. Empecé dos meses antes del examen y quedé en mi primera opción.',
    rank: 8,
  },
];
