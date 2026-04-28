import { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function AnalyticsChart({ size = 24, className, ...props }: IconProps) {
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
        <linearGradient id="chart-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Y axis */}
      <line stroke="url(#chart-gradient)" x1="4" y1="4" x2="4" y2="20" />
      {/* X axis */}
      <line stroke="url(#chart-gradient)" x1="4" y1="20" x2="21" y2="20" />
      {/* Rising curve */}
      <path
        stroke="url(#chart-gradient)"
        d="M4 18 C7 17, 9 15, 11 13 S15 9, 20 5"
      />
      {/* Data points */}
      <circle stroke="url(#chart-gradient)" fill="none" cx="7" cy="17" r="1.2" />
      <circle stroke="url(#chart-gradient)" fill="none" cx="11" cy="13" r="1.2" />
      <circle stroke="url(#chart-gradient)" fill="none" cx="15.5" cy="9.5" r="1.2" />
      <circle stroke="url(#chart-gradient)" fill="none" cx="20" cy="5" r="1.2" />
    </svg>
  );
}
