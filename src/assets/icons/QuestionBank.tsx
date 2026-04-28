import { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function QuestionBank({ size = 24, className, ...props }: IconProps) {
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
        <linearGradient id="qbank-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Book spine */}
      <line stroke="url(#qbank-gradient)" x1="12" y1="4" x2="12" y2="20" />
      {/* Left page */}
      <path stroke="url(#qbank-gradient)" d="M12 4C10 4 5 5 4 7v13c1-2 6-2.5 8-2.5" />
      {/* Right page */}
      <path stroke="url(#qbank-gradient)" d="M12 4c2 0 7 1 8 3v13c-1-2-6-2.5-8-2.5" />
      {/* Left page lines */}
      <line stroke="url(#qbank-gradient)" x1="6" y1="9" x2="10.5" y2="8.5" />
      <line stroke="url(#qbank-gradient)" x1="6" y1="12" x2="10.5" y2="11.5" />
      <line stroke="url(#qbank-gradient)" x1="6" y1="15" x2="10.5" y2="14.5" />
      <line stroke="url(#qbank-gradient)" x1="6.5" y1="17.5" x2="10.5" y2="17" />
      {/* Right page lines */}
      <line stroke="url(#qbank-gradient)" x1="13.5" y1="8.5" x2="18" y2="9" />
      <line stroke="url(#qbank-gradient)" x1="13.5" y1="11.5" x2="18" y2="12" />
      <line stroke="url(#qbank-gradient)" x1="13.5" y1="14.5" x2="18" y2="15" />
      <line stroke="url(#qbank-gradient)" x1="13.5" y1="17" x2="17.5" y2="17.5" />
    </svg>
  );
}
