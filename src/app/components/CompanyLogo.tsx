import React from 'react';

interface CompanyLogoProps {
  className?: string;
  size?: number;
}

export function CompanyLogo({ className = '', size = 120 }: CompanyLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular badge background */}
      <circle cx="60" cy="60" r="58" fill="#f8f6f4" fillOpacity="0.5" />
      
      {/* Oak tree branches - left side */}
      <path
        d="M 60 85 Q 45 75 35 65 Q 30 60 25 58"
        stroke="#375357"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Oak tree branches - right side */}
      <path
        d="M 60 85 Q 75 75 85 65 Q 90 60 95 58"
        stroke="#375357"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Center trunk */}
      <path
        d="M 60 85 L 60 50"
        stroke="#375357"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Left upper branch */}
      <path
        d="M 60 65 Q 50 58 42 52"
        stroke="#375357"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Right upper branch */}
      <path
        d="M 60 65 Q 70 58 78 52"
        stroke="#375357"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Oak leaves - geometric, minimal style */}
      
      {/* Left leaves */}
      <ellipse cx="28" cy="56" rx="6" ry="10" fill="#c3937d" opacity="0.9" />
      <ellipse cx="38" cy="48" rx="5" ry="9" fill="#e9a753" opacity="0.85" />
      
      {/* Right leaves */}
      <ellipse cx="92" cy="56" rx="6" ry="10" fill="#c3937d" opacity="0.9" />
      <ellipse cx="82" cy="48" rx="5" ry="9" fill="#e9a753" opacity="0.85" />
      
      {/* Top center leaves */}
      <ellipse cx="60" cy="42" rx="5" ry="10" fill="#e9a753" opacity="0.9" />
      <ellipse cx="52" cy="45" rx="4" ry="8" fill="#c3937d" opacity="0.85" />
      <ellipse cx="68" cy="45" rx="4" ry="8" fill="#c3937d" opacity="0.85" />
      
      {/* Acorn cap */}
      <path
        d="M 52 88 Q 52 85 56 85 L 64 85 Q 68 85 68 88 L 68 92 Q 68 94 66 94 L 54 94 Q 52 94 52 92 Z"
        fill="#333333"
      />
      
      {/* Acorn cap texture - crosshatch pattern */}
      <line x1="54" y1="87" x2="66" y2="87" stroke="#d9ccc4" strokeWidth="0.5" opacity="0.6" />
      <line x1="54" y1="89" x2="66" y2="89" stroke="#d9ccc4" strokeWidth="0.5" opacity="0.6" />
      <line x1="54" y1="91" x2="66" y2="91" stroke="#d9ccc4" strokeWidth="0.5" opacity="0.6" />
      <line x1="54" y1="93" x2="66" y2="93" stroke="#d9ccc4" strokeWidth="0.5" opacity="0.6" />
      
      {/* Acorn body */}
      <ellipse cx="60" cy="100" rx="8" ry="10" fill="#c3937d" />
      
      {/* Acorn highlight */}
      <ellipse cx="58" cy="98" rx="2.5" ry="3" fill="#e9a753" opacity="0.4" />
      
      {/* Subtle outer ring for premium feel */}
      <circle 
        cx="60" 
        cy="60" 
        r="56" 
        stroke="url(#logoGradient)" 
        strokeWidth="0.5" 
        fill="none"
        opacity="0.3"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#375357" />
          <stop offset="50%" stopColor="#c3937d" />
          <stop offset="100%" stopColor="#e9a753" />
        </linearGradient>
      </defs>
    </svg>
  );
}
