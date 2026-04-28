import type { ComponentType } from 'react';
import { features } from '../../data/features';
import type { Feature } from '../../data/features';
import { Card } from '../ui/Card';
import { GradientText } from '../ui/GradientText';
import { ScrollReveal } from '../effects/ScrollReveal';
import { BrainAdaptive } from '../../assets/icons/BrainAdaptive';
import { QuestionBank } from '../../assets/icons/QuestionBank';
import { AnalyticsChart } from '../../assets/icons/AnalyticsChart';
import { TimerExam } from '../../assets/icons/TimerExam';

const iconMap: Record<Feature['iconName'], ComponentType<{ size?: number | string; className?: string }>> = {
  BrainAdaptive,
  QuestionBank,
  AnalyticsChart,
  TimerExam,
};

export function Features() {
  return (
    <section id="features" className="bg-bg-base py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display font-bold text-text-primary text-h2">
            Todo lo que necesitas para{' '}
            <GradientText>aprobar</GradientText>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Herramientas diseñadas para que tu preparación sea efectiva, medible y sin estrés.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <ScrollReveal key={feature.id} delay={index * 0.08}>
                <Card hoverGlow className="flex flex-col gap-4 h-full">
                  <Icon size={40} />
                  <h3 className="font-display font-semibold text-text-primary text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
