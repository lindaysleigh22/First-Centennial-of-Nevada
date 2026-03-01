import logoImage from "figma:asset/5aa341f7053430afe982bc2119c7a875ac5f8b21.png";

interface ModernOakIconProps {
  size?: number;
  variant?: string;
  className?: string;
}

export function ModernOakIcon({ size = 48, className = '' }: ModernOakIconProps) {
  return (
    <img
      src={logoImage}
      alt="First Centennial Title of Nevada"
      width={size}
      height={size}
      className={className}
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain'
      }}
    />
  );
}
