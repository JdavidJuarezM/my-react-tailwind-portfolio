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
              AI Engineer & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Systems Engineer with a strong specialization in
              Applied Artificial Intelligence. My experience and hands-on
              projects have given me a practical understanding of the entire
              software development lifecycle.
            </p>
            <p className="text-muted-foreground">
              Proficient in microservices principles, secure API design, and
              deploying to AWS. Committed to delivering high-quality, performant
              software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#Contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="/DavidJuarez_DotNet_Developer.pdf"
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
                    SQL Server and MongoDB databases.
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
                    logic. Proficient in .NET (ASP.NET Core, EF Core), and
                    database management with SQL Server, MongoDB, and MySQL.
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
