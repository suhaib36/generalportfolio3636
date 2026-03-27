import PixelFrame from "@/components/PixelFrame";
import PixelCard from "@/components/PixelCard";
import { Sparkles, Zap, Shield, Palette, Database, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "FRONTEND",
    icon: Palette,
    color: "text-primary",
    skills: [
      { name: "React", level: 50 },
      { name: "JavaScript", level: 60 },
      { name: "CSS", level: 70 },
      { name: "html", level: 70 },
    ],
  },
  {
    title: "BACKEND",
    icon: Database,
    color: "text-accent",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "expressjs", level: 70 },
    ],
  },
  {
    title: "TOOLS",
    icon: Zap,
    color: "text-pixel-warm-light",
    skills: [
      { name: "Git", level: 70 },
      { name: "VS Code", level: 80 },
      { name: "Postman", level: 70 },
    ],
  },
  {
    title: "SOFT SKILLS",
    icon: Shield,
    color: "text-green-400",
    skills: [
      { name: "Team Leadership", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Mentoring", level: 80 },
      { name: "Time Management", level: 85 },
    ],
  },
];

const techStack = [
  "React", "JavaScript", "Node.js", "Python", "PostgreSQL", 
  "Threejs", "render", "vercel", "Tailwind", "html5",
  "css", "Git", "C++"
];

const Skills = () => {
  return (
    <PixelFrame title="SKILLS" icon={<Sparkles size={20} />}>
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="font-retro text-2xl md:text-3xl text-muted-foreground">
            My inventory of abilities and power-ups.
          </p>
        </div>

        {/* Tech Stack Banner */}
        <div className="animate-fade-in-up animation-delay-100">
          <PixelCard hover={false} className="overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-primary" size={20} />
              <h2 className="font-pixel text-xs text-primary">TECH STACK</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-muted text-foreground font-retro text-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </PixelCard>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(catIndex + 2) * 100}ms`, animationFillMode: "forwards" }}
            >
              <PixelCard hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className={category.color} size={20} />
                  <h2 className="font-pixel text-xs text-primary">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-retro text-lg text-foreground">{skill.name}</span>
                        <span className="font-pixel text-[10px] text-muted-foreground">
                          LVL {Math.floor(skill.level / 10)}
                        </span>
                      </div>
                      
                      {/* XP Bar */}
                      <div className="h-4 bg-muted pixel-border overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(catIndex * 5 + skillIndex) * 100}ms`,
                          }}
                        />
                        {/* Pixel segments */}
                        <div className="absolute inset-0 flex">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 border-r border-background/20 last:border-r-0"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </PixelCard>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="animate-fade-in-up animation-delay-500">
          <PixelCard hover={false}>
            <h2 className="font-pixel text-xs text-primary mb-6 text-center">CHARACTER STATS</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Level", value: "Fresher", icon: "⭐" },
                { label: "Projects", value: "6+", icon: "📁" },
                { label: "Coffee/Day", value: "∞", icon: "☕" },
                { label: "Bugs Fixed", value: "999+", icon: "🐛" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-muted/50">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="font-pixel text-lg text-primary">{stat.value}</div>
                  <div className="font-retro text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>
      </div>
    </PixelFrame>
  );
};

export default Skills;
