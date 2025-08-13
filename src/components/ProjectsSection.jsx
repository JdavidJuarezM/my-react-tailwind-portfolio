import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";

const Projects = [
  {
    id: 1, // Or the next available number
    title: "Digital Education Lab",
    description:
      "An interactive web platform designed to teach to elementary students through Game modules like the 'Virtual Orchard'.",
    image: "/projects/proyecto1.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Vercel"],
    demoUrl: "https://laboratorio-digital-frond.vercel.app",
    githubUrl: "https://github.com/JdavidJuarezM/laboratorio-digital",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adi",
    image: "/projects/project1.png",
    tags: ["React", "CSS", "HTML"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adi",
    image: "/projects/project1.png",
    tags: ["React", "CSS", "HTML"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Check out some of my recent projects that showcase my skills and
          creativity. Each project is a piece to my dedication to building web
          applications!
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
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
            href="https://github.com/JdavidJuarezM"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
