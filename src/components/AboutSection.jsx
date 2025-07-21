import { Briefcase, Code, Cpu } from "lucide-react";

// Estilos para la animación del botón de cometa.
// --> MODIFICACIÓN: Se ha actualizado para usar las variables CSS de tu tema.
// Ahora la animación usará tus colores --primary y --background dinámicamente.
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

  /* El gradiente giratorio que forma el "cometa" */
  .comet-button::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    /* Usa el color primario de tu tema */
    background-image: conic-gradient(
      transparent,
      hsl(var(--primary)), 
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }

  /* La capa que oculta el gradiente y crea el efecto de borde */
  .comet-button::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    /* Usa el color de fondo de tu tema */
    background: hsl(var(--background)); 
    border-radius: 9999px;
  }
`;

export const AboutSection = () => {
  return (
    <section id="About" className="py-24 px-4 relative">
      {/* Se inyectan los estilos de la animación en el componente */}
      <style>{cometAnimationStyle}</style>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* --- COLUMNA IZQUIERDA: TU HISTORIA --- */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              AI Engineer & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Systems Engineering student with a strong
              specialization in Applied Artificial Intelligence. My experience
              and hands-on projects have given me a practical understanding of
              the entire software development lifecycle.
            </p>
            <p className="text-muted-foreground">
              Driven by a passion for creative problem-solving, I enjoy building
              innovative and efficient solutions. I am proficient in backend
              technologies like Python, Java, and Node.js, and I thrive in
              collaborative, agile environments where I can continuously learn
              and adapt to new challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#Contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="/My_Resume_David.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="comet-button text-primary hover:text-white transition-colors duration-300 text-center rounded-full"
              >
                View My Resume
              </a>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: TUS ESPECIALIDADES --- */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI & Machine Learning
                  </h4>
                  <p className="text-muted-foreground">
                    I develop intelligent, real-time detection systems and
                    scalable AI solutions using Python, TensorFlow, and OpenCV.
                    My focus is on creating high-accuracy models for complex
                    gesture classification and data pipelines.
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
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    I lead the end-to-end development of dynamic web platforms.
                    I engineer interactive front-ends with React.js and build
                    robust backends using Node.js and Express.js connected to
                    MySQL databases.
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
                    Backend & API Design
                  </h4>
                  <p className="text-muted-foreground">
                    I specialize in designing and implementing RESTful APIs to
                    efficiently manage user data, sessions, and application
                    logic. Proficient in Python frameworks like Django and
                    Flask, and database management with SQL.
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
