import { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function TimerExam({ size = 24, className, ...props }: IconProps) {
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
        <linearGradient id="timer-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Top button */}
      <rect stroke="url(#timer-gradient)" x="10" y="2" width="4" height="2" rx="1" />
      {/* Connector to body */}
      <line stroke="url(#timer-gradient)" x1="12" y1="4" x2="12" y2="6" />
      {/* Main circle body */}
      <circle stroke="url(#timer-gradient)" cx="12" cy="14" r="8" />
      {/* Progress arc ~270° (start top, clockwise, leaving ~90° gap at bottom-left) */}
      {/* Arc from top (12,6) going clockwise ~270° to left (4,14) */}
      <path
        stroke="url(#timer-gradient)"
        strokeDasharray="none"
        d="M12 6.1 A7.9 7.9 0 1 1 4.1 14"
      />
      {/* Clock hand / minute marker */}
      <line stroke="url(#timer-gradient)" x1="12" y1="14" x2="16" y2="10" />
      {/* Center dot */}
      <circle stroke="url(#timer-gradient)" fill="url(#timer-gradient)" cx="12" cy="14" r="0.75" />
    </svg>
  );
}
