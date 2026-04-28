import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';
import { formatPriceMXN } from '../../lib/format';
import { cn } from '../../lib/cn';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { ScrollReveal } from '../effects/ScrollReveal';

export function Pricing() {
  return (
    <section id="pricing" className="bg-bg-base py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display font-bold text-text-primary text-h2">
            Elige tu <GradientText>plan</GradientText>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Empieza gratis cuando quieras. Sube a premium cuando estés listo para ir en serio.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.1}>
              <Card
                hoverGlow={!plan.highlighted}
                className={cn(
                  'flex flex-col h-full p-8',
                  plan.highlighted &&
                    'border-accent-primary/40 shadow-glow-violet hover:-translate-y-0.5',
                )}
              >
                {plan.badge && (
                  <div className="mb-4">
                    <Badge variant="primary">{plan.badge}</Badge>
                  </div>
                )}

                <h3 className="font-display font-semibold text-text-primary text-xl mb-2">
                  {plan.name}
                </h3>

                <div className="mb-4">
                  {plan.priceMXN === 0 ? (
                    <p className="font-display font-bold text-text-primary text-4xl">
                      {formatPriceMXN(plan.priceMXN)}
                    </p>
                  ) : (
                    <p className="font-display font-bold text-4xl leading-none">
                      <GradientText>{formatPriceMXN(plan.priceMXN)}</GradientText>
                      <span className="text-base font-normal text-text-secondary ml-1">
                        /{plan.pricePeriod}
                      </span>
                    </p>
                  )}
                </div>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'primary' : 'ghost'}
                  size="lg"
                  className="w-full"
                >
                  {plan.ctaLabel}
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
