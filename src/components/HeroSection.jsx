import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* MODIFICACIÓN 1: Se añadieron clases a este 'div' para crear el panel.
        - bg-black/50: Fondo negro con 50% de opacidad.
        - backdrop-blur-sm: Aplica un ligero desenfoque al fondo detrás del panel.
        - rounded-xl: Bordes redondeados para un look más suave.
        - p-8: Padding (relleno) para que el texto no toque los bordes del panel.
      */}
      <div>
        <div className="space-y-6">
          {/* MODIFICACIÓN 2: Se agrandó el tamaño de la fuente del título.
            - Antes: text-4xl md:text-6xl
            - Ahora: text-5xl md:text-7xl
          */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              David
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Juarez Magaña
            </span>
          </h1>

          {/* MODIFICACIÓN 3: Se agrandó el tamaño de la fuente del párrafo.
            - Antes: text-lg md:text-xl
            - Ahora: text-xl md:text-2xl
          */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 container max-w-4xl mx-auto text-center z-10 bg-black/50 backdrop-blur-sm rounded-xl p-8">
            Transforming complex problems into intelligent software solutions.
            I'm a Computer Systems Engineer specializing in Applied AI and
            full-stack development.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#Projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
