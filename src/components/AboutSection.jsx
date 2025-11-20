import { Briefcase, Code, Cpu } from "lucide-react";
const cometAnimationStyle = `
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .comet-button {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding: 0.5rem 1.5rem; 
  }

  .comet-button::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-image: conic-gradient(
      transparent,
      hsl(var(--primary)), 
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }

  .comet-button::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: hsl(var(--background)); 
    border-radius: 9999px;
  }
`;

export const AboutSection = () => {
  return (
    <section id="About" className="py-24 px-4 relative">
      <style>{cometAnimationStyle}</style>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Java Backend Developer & Full-Stack Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Systems Engineer with expertise in <strong>Full Stack Java development</strong>.
              Experienced in migrating legacy systems to modern architectures using <strong>Spring Boot 3</strong> and React.
            </p>
            <p className="text-muted-foreground">
              Proficient in cloud-native practices (Docker), secure API design (JWT, OAuth2), and integrating cutting-edge technologies
              like OpenAI models into enterprise applications. Committed to delivering secure, efficient, and user-centric software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#Contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              {/* Asegúrate de subir tu nuevo CV con este nombre a la carpeta public */}
              <a
                href="/David_Juarez_Java_Backend_portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="comet-button text-primary hover:text-white transition-colors duration-300 text-center rounded-full"
              >
                View My Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend & ApiRest
                  </h4>
                  <p className="text-muted-foreground">
                    I specialize in building secure, high-performance microservices using <strong>Spring Boot 3</strong>.
                    Skilled in designing RESTful APIs and managing relational databases with MySQL and JPA/Hibernate.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack & AI Integration
                  </h4>
                  <p className="text-muted-foreground">
                    I integrate robust Java backends with modern frontends using <strong>React 19</strong> and Tailwind CSS.
                    Experienced in implementing Generative AI solutions using <strong>Spring AI</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    DevOps & Cloud
                  </h4>
                  <p className="text-muted-foreground">
                    Adept at orchestrating development workflows with <strong>Docker</strong> and Docker Compose.
                    Experience with Git version control, CI/CD pipelines (Github Actions), and cloud deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};