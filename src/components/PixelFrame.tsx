import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

interface PixelFrameProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const PixelFrame = ({ title, children, icon }: PixelFrameProps) => {
  return (
    <div className="min-h-screen bg-background cozy-gradient p-4 md:p-8">
      {/* Decorative corner elements */}
      <div className="fixed top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-primary opacity-50" />
      <div className="fixed top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-primary opacity-50" />
      <div className="fixed bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-primary opacity-50" />
      <div className="fixed bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-primary opacity-50" />

      {/* Back to city button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-pixel text-xs pixel-border transition-all hover:scale-105"
      >
        <Home size={16} />
        <span className="hidden sm:inline">CITY</span>
      </Link>

      {/* Main content frame */}
      <div className="max-w-6xl mx-auto pt-16">
        {/* Window frame header */}
        <div className="bg-pixel-wood pixel-border p-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-accent rounded-sm" />
            <div className="w-4 h-4 bg-primary rounded-sm" />
            <div className="w-4 h-4 bg-muted rounded-sm" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-3">
            {icon && <span className="text-primary">{icon}</span>}
            <h1 className="font-pixel text-sm md:text-base text-foreground tracking-wider">
              {title}
            </h1>
          </div>
          <div className="w-16" /> {/* Spacer for symmetry */}
        </div>

        {/* Content area */}
        <div className="bg-card pixel-border-accent p-6 md:p-8 min-h-[70vh]">
          {/* Warm light effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-pixel-warm-light/10 blur-3xl rounded-full warm-glow pointer-events-none" />
          
          <div className="relative z-10">
            {children}
          </div>
        </div>

        {/* Footer decoration */}
        <div className="bg-pixel-wood pixel-border p-2 flex items-center justify-center">
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary/60"
                style={{ opacity: 0.3 + (i * 0.1) }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelFrame;
