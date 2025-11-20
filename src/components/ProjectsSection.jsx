import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Psyche-Scheduler - Virtual Psychology Clinic",
    description:
      "A full-stack telemedicine platform enabling patients to schedule consultations. Features secure JWT authentication and Role-Based Access Control (RBAC).",
    image: "/projects/proyecto3.png", // Reusa la imagen o pon una nueva
    tags: ["Java 21", "Spring Boot 3", "React", "MySQL", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/JdavidJuarezM/Psyche-Scheduler",
  },
  {
    id: 2,
    title: "Digital Creative Lab - Gamified Platform",
    description:
      "Comprehensive educational platform migrated to a robust Java architecture. Manages user progress and game states with Spring Data JPA.",
    image: "/projects/huerto.png",
    tags: ["Java 21", "Spring Boot 3", "React", "MySQL", "Framer Motion"],
    demoUrl: "https://laboratorio-digital-frond.vercel.app",
    githubUrl: "https://github.com/JdavidJuarezM/laboratorio-digital",
  },
  {
    id: 3,
    title: "SprintAI - GenAI Content Platform",
    description:
      "Generative AI platform integrating OpenAI’s GPT-3.5 and DALL-E 2 via Spring AI. Features a 'Recipe Creator' and image generation.",
    image: "/projects/proyecto1.png", // Usa una imagen apropiada
    tags: ["Java 17", "Spring Boot 3", "Spring AI", "React", "OpenAI"],
    demoUrl: "#",
    githubUrl: "https://github.com/JdavidJuarezM/SprintAIapp",
  },
  {
    id: 4,
    title: "CLI Strategy Game Engine",
    description:
      "Interactive console-based simulation of 'Snakes and Ladders'. Implements custom Binary Search Trees and QuickSort algorithms from scratch.",
    image: "/projects/project2.png", // O una imagen de código/terminal
    tags: ["Java SE", "Data Structures", "Algorithms", "Git"],
    demoUrl: "#",
    githubUrl: "https://github.com/JdavidJuarezM/serpientes-y-escaleras-java",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Check out my recent projects showcasing <strong>Java Backend Architecture</strong> and Full Stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JdavidJuarezM"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
