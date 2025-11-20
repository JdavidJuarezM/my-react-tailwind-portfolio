import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log("Mensaje enviado con éxito!", result.text);
        toast({
          title: "Message sent successfully! 🚀",
          description: "Thanks for reaching out. I'll get back to you as soon as possible.",
          variant: "default", // O usa un color personalizado si tienes configurado
        });
        setIsSubmitting(false);
        e.target.reset();
      },
      (error) => {
        console.error("Error al enviar el mensaje:", error.text);
        toast({
          title: "Oops! Something went wrong.",
          description: "Could not send your message. Please try again later or email me directly.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am currently open to new opportunities as a <strong>Java Backend Developer</strong>.
          Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors border border-transparent hover:border-primary/20">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    href="mailto:josedavidmagana@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    josedavidmagana@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors border border-transparent hover:border-primary/20">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Location</h4>
                  <p className="text-muted-foreground">
                    Jalisco, Mexico
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/david-juarez-maga%C3%B1a-7b0bb02b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background border border-input hover:border-primary hover:text-primary transition-all hover:-translate-y-1 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a
                  href="https://github.com/JdavidJuarezM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background border border-input hover:border-primary hover:text-primary transition-all hover:-translate-y-1 shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Hi David, I'd like to discuss a job opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-lg mt-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
