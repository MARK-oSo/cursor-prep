import { subjects } from '../../data/subjects';
import { Card } from '../ui/Card';
import { GradientText } from '../ui/GradientText';
import { ScrollReveal } from '../effects/ScrollReveal';

export function Subjects() {
  return (
    <section id="subjects" className="bg-bg-base py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display font-bold text-text-primary text-h2">
            Las <GradientText>materias</GradientText> del COMIPEMS
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Practica cada área del examen con bancos de preguntas reales y retroalimentación inmediata.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {subjects.map((subject, index) => (
            <ScrollReveal key={subject.id} delay={index * 0.08}>
              <Card hoverGlow className="flex flex-col items-center text-center gap-3 h-full">
                <span className="text-4xl" role="img" aria-label={subject.name}>
                  {subject.emoji}
                </span>
                <h3 className="font-display font-semibold text-text-primary text-base">
                  {subject.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {subject.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
