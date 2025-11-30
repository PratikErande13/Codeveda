import { ArrowDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sunset over ocean"
          className="w-full h-full object-cover scale-110"
          style={{ transform: "scale(1.1)" }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-16 w-48 h-48 rounded-full bg-accent/15 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
      

        {/* Main Heading */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in-up leading-[0.9]"
          style={{ animationDelay: "400ms" }}
        >
          <br/>
          <span className="block">Responsive</span>
          <span className="block text-gradient-sunset">Web Design</span>
        </h1>

        {/* Subheading */}
        <p
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          Experience the art of modern CSS layouts. Seamlessly crafted for 
          <span className="text-primary-foreground font-medium"> desktop</span>,
          <span className="text-primary-foreground font-medium"> tablet</span>, and
          <span className="text-primary-foreground font-medium"> mobile</span> devices.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "900ms" }}
        >
          <a
            href="#gallery"
            className="group inline-flex items-center gap-3 px-8 py-4 gradient-warm text-primary-foreground font-body text-base font-semibold rounded-full shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
          >
            Explore Gallery
            <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
              <Play size={14} className="ml-0.5" />
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 glass text-primary-foreground border border-primary-foreground/30 font-body text-base font-medium rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-primary-foreground/10 opacity-0 animate-fade-in"
          style={{ animationDelay: "1100ms" }}
        >
          {[
            { value: "100%", label: "Responsive" },
            { value: "6+", label: "Sections" },
            { value: "2", label: "Layout Types" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-body text-sm text-primary-foreground/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1400ms" }}
      >
        <a
          href="#gallery"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-10 h-14 border-2 border-current rounded-full flex justify-center pt-3">
            <ArrowDown size={16} className="animate-bounce-subtle" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
