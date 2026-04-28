import { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function BrainAdaptive({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="brain-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Brain outline - left hemisphere */}
      <path
        stroke="url(#brain-gradient)"
        d="M9 3C6.5 3 4 5 4 8c0 1.5.5 2.8 1.5 3.8C4.6 12.5 4 13.7 4 15c0 2.5 2 4 4 4h1"
      />
      {/* Brain outline - right hemisphere */}
      <path
        stroke="url(#brain-gradient)"
        d="M15 3c2.5 0 5 2 5 5 0 1.5-.5 2.8-1.5 3.8.9.7 1.5 1.9 1.5 3.2 0 2.5-2 4-4 4h-1"
      />
      {/* Center divider */}
      <line stroke="url(#brain-gradient)" x1="12" y1="3" x2="12" y2="19" />
      {/* Neural nodes */}
      <circle stroke="url(#brain-gradient)" cx="8" cy="9" r="1" />
      <circle stroke="url(#brain-gradient)" cx="16" cy="9" r="1" />
      <circle stroke="url(#brain-gradient)" cx="7" cy="14" r="1" />
      <circle stroke="url(#brain-gradient)" cx="17" cy="14" r="1" />
      {/* Connections */}
      <line stroke="url(#brain-gradient)" x1="8" y1="9" x2="12" y2="11" />
      <line stroke="url(#brain-gradient)" x1="16" y1="9" x2="12" y2="11" />
      <line stroke="url(#brain-gradient)" x1="7" y1="14" x2="12" y2="11" />
      <line stroke="url(#brain-gradient)" x1="17" y1="14" x2="12" y2="11" />
    </svg>
  );
}
