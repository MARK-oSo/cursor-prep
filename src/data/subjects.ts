export interface Subject {
  id: string;
  name: string;
  emoji: string;
  description: string;
  questionCount: number;
}

export const subjects: Subject[] = [
  {
    id: 'matematicas',
    name: 'Matemáticas',
    emoji: '📐',
    description: 'Álgebra, geometría, probabilidad y aritmética con enfoque COMIPEMS.',
    questionCount: 2400,
  },
  {
    id: 'espanol',
    name: 'Español',
    emoji: '📖',
    description: 'Comprensión lectora, gramática, ortografía y redacción.',
    questionCount: 1800,
  },
  {
    id: 'ciencias',
    name: 'Ciencias',
    emoji: '🔬',
    description: 'Biología, química y física integradas como aparecen en el examen.',
    questionCount: 2200,
  },
  {
    id: 'historia',
    name: 'Historia',
    emoji: '🌎',
    description: 'Historia de México e historia universal desde el enfoque de bachillerato.',
    questionCount: 1600,
  },
  {
    id: 'ingles',
    name: 'Inglés',
    emoji: '🗣️',
    description: 'Vocabulario, gramática y comprensión de lectura en inglés básico-intermedio.',
    questionCount: 1000,
  },
];
