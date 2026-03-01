import { motion } from 'motion/react';
import { animationConfig } from '@/app/utils/animations';

interface AcornIconProps {
  className?: string;
  variant?: 'default' | 'static';
  width?: number;
  height?: number;
}

export function AcornIcon({ 
  className = "w-8 h-8", 
  variant = 'default',
  width,
  height 
}: AcornIconProps) {
  const SVGComponent = variant === 'static' ? 'svg' : motion.svg;
  const PathComponent = variant === 'static' ? 'path' : motion.path;
  
  const animationProps = variant === 'static' ? {} : {
    animate: {
      rotate: [0, 2, -2, 0],
      y: [0, -3, 0],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  return (
    <SVGComponent
      viewBox="0 0 100 120"
      fill="none"
      className={className}
      width={width}
      height={height}
      {...animationProps}
    >
      {/* Curved stem */}
      <PathComponent 
        d="M 60 10 Q 65 15, 70 25" 
        stroke="#375357" 
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        {...(variant === 'static' ? {} : {
          animate: {
            pathLength: [1, 0.95, 1],
          },
          transition: {
            duration: 6,
            repeat: Infinity,
          }
        })}
      />
      
      {/* Acorn cap with diagonal stripes */}
      <PathComponent 
        d="M 25 45 Q 25 30, 35 25 Q 50 20, 65 25 Q 75 30, 75 45 L 25 45 Z" 
        fill="#c3937d"
        {...(variant === 'static' ? {} : {
          animate: {
            opacity: [1, 0.92, 1],
          },
          transition: {
            duration: 5,
            repeat: Infinity,
          }
        })}
      />
      
      {/* Acorn body - rounded bottom */}
      <path 
        d="M 25 50 L 25 80 Q 25 100, 50 105 Q 75 100, 75 80 L 75 50 Z" 
        fill="#a67d68"
      />
      
      {/* Highlight on body - subtle breathing glow */}
      <PathComponent 
        d="M 62 55 Q 68 70, 68 85" 
        stroke="white" 
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        {...(variant === 'static' ? {} : {
          animate: {
            opacity: [0.5, 0.75, 0.5],
          },
          transition: {
            duration: 7,
            repeat: Infinity,
          }
        })}
      />
    </SVGComponent>
  );
}
