import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDay = theme === "day";

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 group"
      aria-label={isDay ? "Switch to night" : "Switch to day"}
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Sky circle background */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-700 ${
            isDay
              ? "bg-gradient-to-b from-[hsl(200,80%,60%)] to-[hsl(200,70%,75%)] shadow-[0_0_30px_8px_hsl(45,90%,60%/0.4)]"
              : "bg-gradient-to-b from-[hsl(240,30%,15%)] to-[hsl(250,25%,25%)] shadow-[0_0_20px_5px_hsl(45,80%,80%/0.15)]"
          }`}
        />

        {/* Sun */}
        <div
          className={`absolute transition-all duration-700 ${
            isDay
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 rotate-180"
          }`}
        >
          <Sun className="text-[hsl(45,100%,55%)] drop-shadow-[0_0_8px_hsl(45,100%,60%/0.8)]" size={28} />
        </div>

        {/* Moon */}
        <div
          className={`absolute transition-all duration-700 ${
            isDay
              ? "opacity-0 scale-50 -rotate-180"
              : "opacity-100 scale-100 rotate-0"
          }`}
        >
          <Moon className="text-[hsl(45,80%,85%)] drop-shadow-[0_0_8px_hsl(45,80%,85%/0.5)]" size={24} />
        </div>

        {/* Stars (only in night) */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-[hsl(45,80%,90%)] rounded-full transition-opacity duration-700 ${
              isDay ? "opacity-0" : "opacity-70"
            }`}
            style={{
              top: `${10 + i * 15}%`,
              left: `${15 + i * 25}%`,
            }}
          />
        ))}

        {/* Clouds (only in day) */}
        <div
          className={`absolute bottom-1 left-1 w-5 h-2 bg-white/60 rounded-full transition-opacity duration-700 ${
            isDay ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Label */}
      <p className="font-pixel text-[8px] text-muted-foreground mt-1 text-center group-hover:text-foreground transition-colors">
        {isDay ? "DAY" : "NIGHT"}
      </p>
    </button>
  );
};

export default DayNightToggle;
