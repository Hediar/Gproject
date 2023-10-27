import { SVGProps } from 'react';
export const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="2" height="40" viewBox="0 0 2 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 0V40" stroke="#C1C7CD" />
  </svg>
);

export const BlueDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none" {...props}>
    <path d="M0 1H335" stroke="#349FDA" />
  </svg>
);

export const LightBlueDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none" {...props}>
    <path opacity="0.5" d="M0 1H335" stroke="#349FDA" />
  </svg>
);

export const DotLineDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none" {...props}>
    <path d="M0 1H335" stroke="#C1C7CD" strokeDasharray="3 2" />
  </svg>
);

export const MiniDotLineDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="280" height="2" viewBox="0 0 280 2" fill="none" {...props}>
    <path d="M0 1H280" stroke="#DDE1E6" strokeDasharray="2 1" />
  </svg>
);

export const LineDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="277" height="2" viewBox="0 0 277 2" fill="none" {...props}>
    <path d="M1 1H276" stroke="#DDE1E6" strokeLinecap="round" />
  </svg>
);
