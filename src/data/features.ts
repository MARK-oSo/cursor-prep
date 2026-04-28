export interface Feature {
  id: string;
  iconName: 'BrainAdaptive' | 'QuestionBank' | 'AnalyticsChart' | 'TimerExam';
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 'adaptive',
    iconName: 'BrainAdaptive',
    title: 'Simulacros adaptativos',
    description:
      'El examen aprende de ti. Cada pregunta calibra tu nivel y te empuja justo donde necesitas crecer.',
  },
  {
    id: 'question-bank',
    iconName: 'QuestionBank',
    title: 'Banco de 10,000 preguntas',
    description:
      'Reactivos verificados de COMIPEMS, IPN y UNAM. Filtra por tema, dificultad o examen objetivo y practica a tu ritmo.',
  },
  {
    id: 'analytics',
    iconName: 'AnalyticsChart',
    title: 'Analítica en tiempo real',
    description:
      'Sabes exactamente qué dominas y qué te falta. Tendencias por materia, tiempo por reactivo, predicción de aciertos.',
  },
  {
    id: 'timed-exam',
    iconName: 'TimerExam',
    title: 'Modo examen cronometrado',
    description:
      'Simula la presión del día real. Cronómetro estricto, secciones cerradas, resultado al final como en el examen oficial.',
  },
];
