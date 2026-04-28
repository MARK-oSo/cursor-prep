export interface Step {
  number: '01' | '02' | '03';
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Diagnóstico inicial',
    description:
      'Resuelves un examen corto y CursorPrep mide tu nivel real en cada tema.',
  },
  {
    number: '02',
    title: 'Plan personalizado',
    description:
      'Recibes un plan de estudio adaptado a tus huecos, con simulacros calibrados a tu ritmo.',
  },
  {
    number: '03',
    title: 'Práctica y medición',
    description:
      'Practicas, revisas tus resultados y ajustas el rumbo. El día del examen, ya sabes que puedes.',
  },
];
