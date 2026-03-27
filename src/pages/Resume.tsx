import PixelFrame from "@/components/PixelFrame";
import PixelCard from "@/components/PixelCard";
import { FileText, Download, User, Award, BookOpen, Briefcase } from "lucide-react";

const Resume = () => {
  return (
    <PixelFrame title="RESUME" icon={<FileText size={20} />}>
      <div className="space-y-8">
        {/* Header with download */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 animate-fade-in-up">
          <p className="font-retro text-2xl md:text-3xl text-muted-foreground text-center md:text-left">
            My professional scroll of achievements.
          </p>
          <button className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-pixel text-xs hover:bg-primary/90 transition-all hover:scale-105 pixel-shadow">
           <a
  href="/Suhaibishrat_resume.pdf"
  download
  className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-pixel text-xs hover:bg-primary/90 transition-all hover:scale-105 pixel-shadow"
>
  <Download size={1} />
  DOWNLOAD PDF
</a>
          </button>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="space-y-6">
            <div className="animate-fade-in-up animation-delay-100">
              <PixelCard>
                <div className="flex items-center gap-3 mb-4">
                  <User className="text-primary" size={20} />
                  <h2 className="font-pixel text-xs text-primary">PROFILE</h2>
                </div>
                
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto bg-muted flex items-center justify-center text-4xl mb-4 pixel-border">
                    👨‍💻
                  </div>
                  <h3 className="font-pixel text-sm text-foreground">Suhaib Ishrat</h3>
                  <p className="font-retro text-lg text-muted-foreground">Full Stack Developer</p>
                </div>

                <p className="font-retro text-foreground/80">
                  Aspiring Software Engineer passionate about building impactful and scalable web applications.
                </p>
              </PixelCard>
            </div>

            {/* Contact Summary */}
            <div className="animate-fade-in-up animation-delay-200">
              <PixelCard>
                <h3 className="font-pixel text-xs text-primary mb-4">DETAILS</h3>
                <div className="space-y-3 font-retro">
                  <p className="text-foreground">📍 Greater Noida, India</p>
                  <p className="text-foreground">📧 suhaib.ishra36@gmail.com</p>
                  <p className="text-foreground">🔗 portfolio.dev</p>
                  <p className="text-foreground">💼 https://github.com/suhaib36</p>
                </div>
              </PixelCard>
            </div>

            {/* Languages */}
            <div className="animate-fade-in-up animation-delay-300">
              <PixelCard>
                <h3 className="font-pixel text-xs text-primary mb-4">LANGUAGES</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between font-retro mb-1">
                      <span>Hindi/Urdu</span>
                      <span className="text-muted-foreground">Native</span>
                    </div>
                    <div className="h-2 bg-muted overflow-hidden">
                      <div className="h-full bg-primary w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-retro mb-1">
                      <span>English</span>
                      <span className="text-muted-foreground">Fluent</span>
                    </div>
                    <div className="h-2 bg-muted overflow-hidden">
                      <div className="h-full bg-primary w-3/4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-retro mb-1">
                      <span>Arabic</span>
                      <span className="text-muted-foreground">Basic</span>
                    </div>
                    <div className="h-2 bg-muted overflow-hidden">
                      <div className="h-full bg-primary w-1/3" />
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Work Experience */}
            <div className="animate-fade-in-up animation-delay-100">
              <PixelCard hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-primary" size={20} />
                  <h2 className="font-pixel text-xs text-primary">WORK EXPERIENCE</h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      role: "Frontend Developer Intern",
                      company: "Platinum Infosolutions.",
                      period: "Sep2025 - Nov2025",
                      tasks: ["Developed frontent features", "React & js", "software solutions"],
                    },
                    {
                      role: "Research Intern",
                      company: "Incisiv",
                      period: "Apr2023 - Jun2023",
                      tasks: ["Benchmarking analysis", "Beautifulsoup", "500+ restaurants"],
                    },
                    
                  ].map((job, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-border">
                      <div className="absolute left-0 top-0 w-3 h-3 bg-primary -translate-x-[7px]" />
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <div>
                          <h4 className="font-pixel text-[11px] text-foreground">{job.role}</h4>
                          <p className="font-retro text-muted-foreground">{job.company}</p>
                        </div>
                        <span className="font-retro text-sm text-accent">{job.period}</span>
                      </div>
                      <ul className="font-retro text-foreground/80">
                        {job.tasks.map((task, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <span className="text-primary">▸</span> {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </PixelCard>
            </div>

            {/* Certifications */}
            <div className="animate-fade-in-up animation-delay-200">
              <PixelCard hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-primary" size={20} />
                  <h2 className="font-pixel text-xs text-primary">CERTIFICATIONS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "The Complete Full-Stack Web Development Bootcamp", issuer: "Angela yu", year: "2023" },
                    { name: "React Developer", issuer: "Meta", year: "2024" },
                    { name: "Python Bootcamp", issuer: "Udemy", year: "2022" },
                    { name: "UI/UX Design", issuer: "Google", year: "2020" },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-muted/50">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <p className="font-retro text-foreground">{cert.name}</p>
                        <p className="font-retro text-sm text-muted-foreground">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </PixelCard>
            </div>

            {/* Interests */}
            <div className="animate-fade-in-up animation-delay-300">
              <PixelCard hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-primary" size={20} />
                  <h2 className="font-pixel text-xs text-primary">INTERESTS</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["🎮 Gaming", "🎨 Pixel Art", "📚 History Books", "🎵 Vocals ", "☕ Coffee", "🏃 Running"].map((interest, i) => (
                    <span key={i} className="px-4 py-2 bg-secondary font-retro text-secondary-foreground">
                      {interest}
                    </span>
                  ))}
                </div>
              </PixelCard>
            </div>
          </div>
        </div>
      </div>
    </PixelFrame>
  );
};

export default Resume;
