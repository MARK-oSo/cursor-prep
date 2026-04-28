import { steps } from '../../data/steps';
import { GradientText } from '../ui/GradientText';
import { ScrollReveal } from '../effects/ScrollReveal';

export function HowItWorks() {
  return (
    <section id="how" className="bg-bg-base py-24 px-6">
      <div className="mx-auto max-w-5xl">

        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display font-bold text-text-primary text-h2">
            Así es como{' '}
            <GradientText>funciona</GradientText>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Tres pasos para llegar al examen listo de verdad.
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {/* Horizontal connector — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px opacity-30 bg-gradient-to-r from-accent-primary to-accent-secondary"
          />

          {steps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              delay={index * 0.15}
              className="relative flex flex-col items-center text-center px-6"
            >
              <div className="relative z-10 mb-5 bg-bg-base px-2">
                <GradientText className="block text-8xl font-display font-bold leading-none select-none">
                  {step.number}
                </GradientText>
              </div>
              <h3 className="font-display font-semibold text-text-primary text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
