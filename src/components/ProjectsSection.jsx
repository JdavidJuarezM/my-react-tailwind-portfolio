import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Psyche-Scheduler - Full-Stack Therapy Management Platform",
    description:
      "A comprehensive, full-stack scheduling application for mental health professionals, featuring distinct role-based interfaces for psychologists and patients.",
    image: "/projects/project1.png", // Asignando una imagen genérica
    tags: [".NET Core", "React", "SQL Server", "Docker", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com/JdavidJuarezM/Psyche-Scheduler",
  },
  {
    id: 2,
    title: "Digital Creative Lab - MERN Stack E-Learning Platform",
    description:
      "A full-stack e-learning platform featuring interactive courses and user progress tracking.",
    image: "/projects/proyecto1.png", // Usando la imagen específica del proyecto
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoUrl: "https://laboratorio-digital-frond.vercel.app",
    githubUrl: "https://github.com/JdavidJuarezM/laboratorio-digital",
  },
  {
    id: 3,
    title: "AI-Powered Signs Detection",
    description:
      "A real-time signs detection system from live webcam video streams.",
    image: "/projects/project2.png", // Asignando una imagen genérica
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Node.js", "React"],
    demoUrl: "#",
    githubUrl: "#", // URL de GitHub no disponible
  },
  {
    id: 4,
    title: "Finance Tracker App",
    description:
      "A web application for personal expense tracking using ASP.NET Core MVC and a code-first database approach.",
    image: "/projects/project3.png", // Asignando una imagen genérica
    tags: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
    demoUrl: "#",
    githubUrl: "#", // URL de GitHub no disponible
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
          Check out some of my recent projects that showcase my skills and
          creativity. Each project is a piece to my dedication to building web
          applications!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform duration-500 group-hover:scale-110"
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
