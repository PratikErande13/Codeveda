import { Grid3X3, Maximize2, Smartphone, Monitor, Tablet, Zap } from "lucide-react";

const features = [
  {
    icon: Grid3X3,
    title: "CSS Grid",
    description: "Two-dimensional layouts with precise control over rows and columns.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Maximize2,
    title: "Flexbox",
    description: "One-dimensional alignment and distribution of space among items.",
    color: "from-accent to-accent/70",
  },
  {
    icon: Monitor,
    title: "Desktop",
    description: "Optimized layouts for large screens with multiple columns.",
    color: "from-primary to-accent",
  },
  {
    icon: Tablet,
    title: "Tablet",
    description: "Adaptive designs that adjust to medium-sized viewports.",
    color: "from-accent to-primary",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Mobile-first approach ensuring great UX on small screens.",
    color: "from-primary/80 to-accent/80",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightweight CSS that renders fast without JavaScript.",
    color: "from-accent/80 to-primary/80",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      
      <div className="container mx-auto px-6 relative">
        {/* Two-column Flexbox layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div
            className="lg:flex-1 lg:sticky lg:top-32 lg:self-start opacity-0 animate-slide-in-left"
            style={{ animationDelay: "100ms" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-medium mb-6">
              About This Project
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Mastering
              <br />
              <span className="text-gradient">Modern CSS</span>
              <br />
              Layouts
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
              This project demonstrates the power of CSS Flexbox and Grid for creating 
              beautiful, responsive web layouts. Built as part of the{" "}
              <span className="text-foreground font-medium">Codveda Web Development</span>{" "}
              internship program, it showcases best practices in modern CSS architecture.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Flexbox", "CSS Grid", "Media Queries", "Responsive Design", "Modern CSS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 gradient-warm text-primary-foreground font-body text-base font-semibold rounded-full shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              Get in Touch
              <span className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                →
              </span>
            </a>
          </div>

          {/* Right Column - Feature Grid */}
          <div
            className="lg:w-[520px] opacity-0 animate-slide-in-right"
            style={{ animationDelay: "200ms" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-card`}
                  >
                    <feature.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
