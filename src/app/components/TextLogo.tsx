interface TextLogoProps {
  variant?: 'static' | 'white';
  width?: number;
  height?: number;
  className?: string;
}

export function TextLogo({ 
  variant = 'static', 
  width = 600, 
  height = 80,
  className = '' 
}: TextLogoProps) {
  const fontSize = Math.min(width / 18, 32);
  
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#375357', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#c3937d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e9a753', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="300"
        fontSize={`${fontSize}px`}
        letterSpacing="0.5px"
      >
        First Centennial Title of Nevada
      </text>
    </svg>
  );
}
