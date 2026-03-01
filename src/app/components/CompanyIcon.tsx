import React from 'react';

interface CompanyIconProps {
  className?: string;
  size?: number;
}

export function CompanyIcon({ className = '', size = 64 }: CompanyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Elegant outer circle with subtle gradient */}
      <circle 
        cx="60" 
        cy="60" 
        r="58" 
        stroke="url(#borderGradient)" 
        strokeWidth="0.5" 
        fill="white"
        opacity="0.3"
      />
      
      {/* Main circle */}
      <circle 
        cx="60" 
        cy="60" 
        r="56.5" 
        stroke="url(#borderGradient)" 
        strokeWidth="1.2" 
        fill="white"
      />
      
      {/* Minimalist Oak Tree */}
      <g transform="translate(60, 60)">
        {/* Oak canopy - organic rounded lobes characteristic of oak leaves */}
        {/* Bottom layer - wider lobes */}
        <path
          d="M -22 -5 Q -22 -12 -16 -12 Q -12 -12 -12 -8 Q -12 -12 -8 -12 Q -4 -12 -4 -8 Q -4 -12 0 -12 Q 4 -12 4 -8 Q 4 -12 8 -12 Q 12 -12 12 -8 Q 12 -12 16 -12 Q 22 -12 22 -5 L 18 -5 Q 18 -2 15 -2 L 5 -2 Q 5 1 0 1 Q -5 1 -5 -2 L -15 -2 Q -18 -2 -18 -5 Z"
          fill="#375357"
          opacity="0.9"
        />
        
        {/* Middle layer - characteristic oak shape */}
        <path
          d="M -18 -10 Q -18 -16 -13 -16 Q -10 -16 -10 -13 Q -10 -17 -6 -17 Q -2 -17 -2 -13 Q -2 -17 2 -17 Q 6 -17 6 -13 Q 6 -17 10 -17 Q 10 -16 13 -16 Q 18 -16 18 -10 Q 17 -8 14 -8 L 8 -8 Q 8 -6 4 -6 L -4 -6 Q -8 -6 -8 -8 L -14 -8 Q -17 -8 -18 -10 Z"
          fill="#375357"
          opacity="0.95"
        />
        
        {/* Top layer - crown */}
        <path
          d="M -14 -16 Q -14 -21 -10 -21 Q -8 -21 -8 -19 Q -8 -22 -4 -22 Q 0 -22 0 -19 Q 0 -23 0 -23 Q 0 -22 4 -22 Q 8 -22 8 -19 Q 8 -21 10 -21 Q 14 -21 14 -16 Q 13 -14 10 -14 L 5 -14 Q 5 -12 0 -12 Q -5 -12 -5 -14 L -10 -14 Q -13 -14 -14 -16 Z"
          fill="#375357"
        />
        
        {/* Trunk - strong and tapered */}
        <path
          d="M -4 -2 L -3 25 L 3 25 L 4 -2 Z"
          fill="#375357"
        />
        
        {/* Visible roots - showing establishment */}
        <path
          d="M -3 25 Q -5 27 -8 29 M -3 25 Q -4 27 -6 28 M 3 25 Q 5 27 8 29 M 3 25 Q 4 27 6 28 M 0 25 L 0 27"
          stroke="#375357"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Acorn details - signature oak feature */}
        <g opacity="0.8">
          {/* Left acorn */}
          <ellipse cx="-19" cy="-4" rx="1.8" ry="2.2" fill="#c3937d" />
          <path d="M -20.8 -4 Q -19 -5.5 -17.2 -4" stroke="#c3937d" strokeWidth="0.8" fill="none" />
          
          {/* Right acorn */}
          <ellipse cx="19" cy="-4" rx="1.8" ry="2.2" fill="#c3937d" />
          <path d="M 17.2 -4 Q 19 -5.5 20.8 -4" stroke="#c3937d" strokeWidth="0.8" fill="none" />
          
          {/* Top center acorn */}
          <ellipse cx="0" cy="-22" rx="1.8" ry="2.2" fill="#e9a753" />
          <path d="M -1.8 -22 Q 0 -23.5 1.8 -22" stroke="#e9a753" strokeWidth="0.8" fill="none" />
        </g>
      </g>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#375357" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#c3937d" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#e9a753" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
