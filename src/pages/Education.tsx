import PixelFrame from "@/components/PixelFrame";
import PixelCard from "@/components/PixelCard";
import { GraduationCap, BookOpen, Trophy, Star } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in computer Scienece Artificial Intelligence",
    school: "Abdul Kalam Technological University",
    period: "2022 - 2026",
    gpa: "6.5/10.0",
    description: "Foundation in programming, algorithms, and software development practices.",
  },
  {
    degree: "Intermediate",
    school: "P.M.S Public School",
    period: "2020 - 2021",
    gpa: "8.5/10.0",
  },

  {
    degree: "High School",
    school: "P.M.S Public School",
    period: "2018 - 2019",
    gpa: "9.4/10.0",
  },
];

const courses = [
  { name: "Python bootcamp", platform: "udemy", year: "2023" },
  { name: "System Design Interview", platform: "Educative", year: "2023" },
  { name: "Complete web develpment", platform: "Udemy", year: "2023" },
  { name: "Three.js Journey", platform: "Three.js Journey", year: "2025" },
];

const awards = [
  { title: "Hackathon Finalist", org: "SIH", year: "2025", icon: "🥇" },
  { title: "Open Source Contributor", org: "React Community", year: "2024", icon: "⭐" },
];

const Education = () => {
  return (
    <PixelFrame title="EDUCATION" icon={<GraduationCap size={20} />}>
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="font-retro text-2xl md:text-3xl text-muted-foreground">
            Knowledge gained on my quest to become a master developer.
          </p>
        </div>

        {/* Formal Education */}
        <div className="animate-fade-in-up animation-delay-100">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={24} />
            <h2 className="font-pixel text-sm text-primary">ACADEMIC JOURNEY</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <PixelCard key={index}>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-pixel text-xs md:text-sm text-primary mb-1">
                      {edu.degree}
                    </h3>
                    <p className="font-retro text-xl text-foreground">{edu.school}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-muted font-retro text-muted-foreground">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 bg-accent/20 text-accent font-pixel text-[10px]">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>

                <p className="font-retro text-lg text-foreground/80 mb-4">
                  {edu.description}
                </p>

                
              </PixelCard>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Online Courses */}
          <div className="animate-fade-in-up animation-delay-200">
            <PixelCard hover={false}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" size={20} />
                <h2 className="font-pixel text-xs text-primary">CONTINUOUS LEARNING</h2>
              </div>

              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-retro text-foreground">{course.name}</p>
                      <p className="font-retro text-sm text-muted-foreground">{course.platform}</p>
                    </div>
                    <span className="font-pixel text-[10px] text-accent">{course.year}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="font-retro text-muted-foreground">
                  
                </p>
              </div>
            </PixelCard>
          </div>

          {/* Awards & Recognition */}
          <div className="animate-fade-in-up animation-delay-300">
            <PixelCard hover={false}>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-primary" size={20} />
                <h2 className="font-pixel text-xs text-primary">AWARDS & RECOGNITION</h2>
              </div>

              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-3xl">{award.icon}</span>
                    <div className="flex-1">
                      <p className="font-retro text-lg text-foreground">{award.title}</p>
                      <p className="font-retro text-sm text-muted-foreground">
                        {award.org} • {award.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PixelCard>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="animate-fade-in-up animation-delay-400">
          <PixelCard className="text-center">
            <div className="text-4xl mb-4 animate-float">📖</div>
            <h3 className="font-pixel text-xs text-primary mb-4">MY LEARNING PHILOSOPHY</h3>
            <p className="font-retro text-xl text-foreground/80 max-w-2xl mx-auto">
              "Every day is a chance to learn something new. I treat every bug as a puzzle, 
              every project as an adventure, and every failure as a stepping stone to mastery."
            </p>
          </PixelCard>
        </div>
      </div>
    </PixelFrame>
  );
};

export default Education;
