import PixelFrame from "@/components/PixelFrame";
import PixelCard from "@/components/PixelCard";
import { FolderOpen, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Simon game",
    description: "A classic memory challenge where one wrong click ends your streak 😈",
    tags: ["html", "css", "JavaScript"],
    image: "🎮",
    github: "https://github.com/suhaib36/SIMON--GAME",
    demo: "#",
  },
  {
    id: 2,
    title: "Cozy Weather App",
    description: "Search any city to get real-time weather updates including temperature, humidity, and conditions ",
    tags: ["html", "API", "Axios", "CSS"],
    image: "🌤️",
    github: "https://github.com/suhaib36/weather-app",
    demo: "#",
  },
  {
    id: 3,
    title: "Waste2Wealth",
    description: "A platform that connects waste producers with recyclers to promote sustainable waste management.",
    tags: ["React", "node.js", "JWT", "postgreSQL"],
    image: "♻️",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "speed Breaker Detection",
    description: "A system that detects speed breakers in real time to enhance driver safety and awareness",
    tags: ["Python", "PyTorch", "YOLOv8","OpenCV", "SQlite"],
    image: "🚗",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Chatter-Box",
    description: "A chat application where users can communicate only after approval, ensuring controlled and secure interactions",
    tags: ["JavaScript", "Node.JS", "Express.JS", "html5", "css"],
    image: "🔐",
    github: "https://github.com/suhaib36/chatterbox-frontend3636",
    demo: "#",
  },
  {
    id: 6,
    title: "3D City",
    description: "An interactive 3D portfolio where users explore a virtual city to navigate through projects and sections",
    tags: ["Three.js", "html", "gltf"],
    image: "🏙️",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <PixelFrame title="PROJECTS" icon={<FolderOpen size={20} />}>
      <div className="space-y-8">
        {/* Introduction */}
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="font-retro text-2xl md:text-3xl text-muted-foreground">
            Welcome to my workshop! Here are some things I've built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <PixelCard className="h-full flex flex-col">
                {/* Project Icon */}
                <div className="text-5xl mb-4 animate-float">{project.image}</div>

                {/* Title */}
                <h3 className="font-pixel text-xs md:text-sm text-primary mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-retro text-lg text-foreground/80 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground font-retro text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-retro text-lg"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-retro text-lg"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </PixelFrame>
  );
};

export default Projects;
