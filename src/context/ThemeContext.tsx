import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "night" | "day";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "night", toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("city-theme") as Theme) || "night";
  });

  useEffect(() => {
    localStorage.setItem("city-theme", theme);
    document.documentElement.classList.toggle("day", theme === "day");
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "night" ? "day" : "night");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
