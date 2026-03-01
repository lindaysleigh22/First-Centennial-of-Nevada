import treeImage from 'figma:asset/1b93bdbf6c1a006e3ea3999dc4b1e8348d9e0736.png';

export default function TreeLogo({ 
  className = "", 
  width = 200, 
  height = 200,
  variant = "color" // "color", "black", "white"
}: { 
  className?: string; 
  width?: number; 
  height?: number;
  variant?: "color" | "black" | "white";
}) {
  return (
    <img 
      src={treeImage}
      alt="First Centennial Title Tree Logo"
      className={className}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`, 
        objectFit: 'contain',
        filter: variant === "black" ? "brightness(0)" : variant === "white" ? "brightness(0) invert(1)" : "none"
      }}
    />
  );
}
