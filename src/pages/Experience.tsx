import PixelFrame from "@/components/PixelFrame";
import PixelCard from "@/components/PixelCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Platinum Infosolutions",
    location: "Lucknow,India",
    period: "Sep 2025 – Nov 2025",
    description: "Worked on software solution for healthcare industry",
    achievements: [
      "Built responsive web interfaces using HTML, CSS, JavaScript, and React, also improved load speed by 25%.",
      "Integrated APIs and refined UI/UX with backend and design teams, increasing user retention by 20%. ",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Research Intern",
    company: "Incisiv",
    location: "Remote",
    period: "apr2023 - jun2023",
    description: "Conducted market research by analyzing restaurant websites and evaluating digital features for data insights",
    achievements: [
      "Automated website analysis using Python web scraping script (BeautifulSoup), reducing evaluation time by  40%.",
      "Generated structured datasets for benchmarking digital capabilities for 500+ restaurants.",
      
    ],
    current: false,
  },
  
];

const Experience = () => {
  return (
    <PixelFrame title="EXPERIENCE" icon={<Briefcase size={20} />}>
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="font-retro text-2xl md:text-3xl text-muted-foreground">
            My adventure log through the tech industry.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-up opacity-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary pixel-shadow transform -translate-x-1/2 z-10">
                {exp.current && (
                  <div className="absolute inset-0 bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <PixelCard>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-pixel text-xs md:text-sm text-primary mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-retro text-xl text-foreground">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-accent/20 text-accent font-pixel text-[10px]">
                        
                      </span>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground font-retro">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-retro text-lg text-foreground/80 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-pixel text-[10px] text-muted-foreground mb-3">ACHIEVEMENTS</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground font-retro text-sm"
                        >
                          <span className="text-primary">★</span>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </PixelCard>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </PixelFrame>
  );
};

export default Experience;
