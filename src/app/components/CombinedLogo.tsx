import TreeLogo from './TreeLogo';

interface CombinedLogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'color' | 'black' | 'white';
}

export function CombinedLogo({ 
  width = 800, 
  height = 100,
  className = '',
  variant = 'color'
}: CombinedLogoProps) {
  const fontSize = Math.min(width / 25, 32);
  const logoSize = height * 0.8;
  
  return (
    <div 
      className={`inline-flex items-center gap-4 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <TreeLogo width={logoSize} height={logoSize} variant={variant} />
      <svg
        width={width - logoSize - 40}
        height={height}
        viewBox={`0 0 ${width - logoSize - 40} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="navTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#375357', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#c3937d', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#e9a753', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <text
          x="0"
          y="50%"
          textAnchor="start"
          dominantBaseline="middle"
          fill={variant === 'white' ? 'white' : variant === 'black' ? 'black' : 'url(#navTextGradient)'}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="300"
          fontSize={`${fontSize}px`}
          letterSpacing="0.5px"
        >
          First Centennial Title of Nevada
        </text>
      </svg>
    </div>
  );
}
