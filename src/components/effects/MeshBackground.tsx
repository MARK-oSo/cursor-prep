import { cn } from '../../lib/cn';
import { GlowOrb } from '../ui/GlowOrb';

interface MeshBackgroundProps {
  className?: string;
}

export function MeshBackground({ className }: MeshBackgroundProps) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      aria-hidden="true"
    >
      <GlowOrb color="violet" size={500} className="-top-40 -left-40" />
      <GlowOrb color="cyan" size={450} className="top-20 right-0" />
      <GlowOrb color="pink" size={350} className="bottom-0 left-1/3" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-base" />
    </div>
  );
}
