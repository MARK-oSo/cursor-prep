export interface PricingPlan {
  id: 'free' | 'premium';
  name: string;
  priceMXN: number;
  pricePeriod: 'mes' | 'unico';
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Gratis',
    priceMXN: 0,
    pricePeriod: 'mes',
    description: 'Para explorar la plataforma y medir tu punto de partida.',
    features: [
      '1 simulacro adaptativo al mes',
      'Banco de 500 preguntas (selección básica)',
      'Resultados generales por simulacro',
      'Acceso a 2 materias',
      'App web sin descarga',
    ],
    ctaLabel: 'Empezar gratis',
  },
  {
    id: 'premium',
    name: 'Premium',
    priceMXN: 149,
    pricePeriod: 'mes',
    description: 'Todo lo que necesitas para entrar a la escuela que quieres.',
    features: [
      'Simulacros adaptativos ilimitados',
      'Banco completo de 10,000 preguntas',
      'Analítica avanzada por tema y por reactivo',
      'Modo examen cronometrado oficial',
      'Plan de estudio personalizado',
      'Las 5 materias completas',
      'Soporte prioritario',
      'Sin anuncios',
    ],
    ctaLabel: 'Empezar ahora',
    highlighted: true,
    badge: 'Más popular',
  },
];
