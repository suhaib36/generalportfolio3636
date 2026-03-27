import { ReactNode } from "react";

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const PixelCard = ({ children, className = "", hover = true }: PixelCardProps) => {
  return (
    <div
      className={`
        bg-secondary/50 p-4 md:p-6 pixel-border
        ${hover ? "transition-all duration-200 hover:scale-[1.02] hover:bg-secondary/70" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default PixelCard;
