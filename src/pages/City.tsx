import { Link } from "react-router-dom";
import { FolderOpen, Mail, Briefcase, FileText, Sparkles, GraduationCap } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import DayNightToggle from "@/components/DayNightToggle";

const buildings = [
  { 
    name: "Projects", 
    path: "/projects", 
    icon: FolderOpen, 
    color: "from-amber-500 to-orange-600",
    description: "My Workshop"
  },
  { 
    name: "Contact", 
    path: "/contact", 
    icon: Mail, 
    color: "from-blue-400 to-cyan-500",
    description: "Ring the Bell"
  },
  { 
    name: "Experience", 
    path: "/experience", 
    icon: Briefcase, 
    color: "from-emerald-500 to-teal-600",
    description: "Adventure Log"
  },
  { 
    name: "Resume", 
    path: "/resume", 
    icon: FileText, 
    color: "from-purple-500 to-pink-600",
    description: "My Scroll"
  },
  { 
    name: "Skills", 
    path: "/skills", 
    icon: Sparkles, 
    color: "from-yellow-400 to-amber-500",
    description: "Power-Ups"
  },
  { 
    name: "Education", 
    path: "/education", 
    icon: GraduationCap, 
    color: "from-red-400 to-rose-600",
    description: "Knowledge Hall"
  },
];

const City = () => {
  const { theme } = useTheme();
  const isDay = theme === "day";

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-700 ${
      isDay
        ? "bg-gradient-to-b from-[hsl(200,75%,70%)] via-[hsl(200,60%,80%)] to-[hsl(45,40%,85%)]"
        : "bg-background cozy-gradient"
    }`}>
      {/* Day/Night Toggle */}
      <DayNightToggle />

      {/* Sky elements */}
      {!isDay && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[hsl(45,80%,90%)] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
            />
          ))}
        </div>
      )}
      {isDay && (
        <div className="fixed top-8 right-24 w-16 h-16 bg-gradient-to-br from-[hsl(45,100%,70%)] to-[hsl(45,100%,55%)] rounded-full shadow-[0_0_50px_15px_hsl(45,100%,60%/0.4)] pointer-events-none" />
      )}

      {/* Title */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-pixel text-lg md:text-2xl text-primary mb-4">
          WELCOME TO MY CITY
        </h1>
        <p className="font-retro text-xl md:text-2xl text-muted-foreground">
          Click a building to explore
        </p>
      </div>

      {/* Buildings Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl w-full">
        {buildings.map((building, index) => (
          <Link
            key={building.path}
            to={building.path}
            className="group animate-fade-in-up opacity-0"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <div className="flex flex-col items-center">
              {/* Building */}
              <div className="relative w-full aspect-square max-w-[180px]">
                {/* Building body */}
                <div className={`absolute inset-0 bg-gradient-to-b ${building.color} pixel-shadow transition-transform duration-300 group-hover:-translate-y-2`}>
                  {/* Roof */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[120%] h-6 bg-pixel-wood pixel-border" />
                  
                  {/* Windows */}
                  <div className="absolute inset-4 grid grid-cols-2 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="window-shine opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>

                  {/* Door */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-pixel-wood pixel-border">
                    <div className="absolute top-1/2 right-1 w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>

                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 flex items-center justify-center pixel-border">
                    <building.icon className="text-foreground" size={24} />
                  </div>
                </div>

                {/* Warm glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-pixel-warm-light/0 group-hover:bg-pixel-warm-light/30 blur-xl transition-all duration-300 rounded-full" />
              </div>

              {/* Label */}
              <div className="mt-6 text-center">
                <p className="font-pixel text-[10px] md:text-xs text-primary group-hover:text-foreground transition-colors">
                  {building.name.toUpperCase()}
                </p>
                <p className="font-retro text-sm text-muted-foreground">
                  {building.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer hint */}
      <div className="mt-16 animate-fade-in-up animation-delay-500">
        <p className="font-retro text-muted-foreground text-center">
           Hover over a building and click to enter 
        </p>
      </div>
    </div>
  );
};

export default City;
