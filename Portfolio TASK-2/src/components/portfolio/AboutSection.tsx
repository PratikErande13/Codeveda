import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "I believe great design and functionality go hand in hand.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Always exploring new technologies and best practices.",
      gradient: "from-pink-500 to-purple-500"
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Passionate developer with a keen eye for detail and a love for creating
            exceptional digital experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a dedicated web developer specializing in building modern, responsive
                web applications. With a strong foundation in both frontend and backend
                technologies, I bring ideas to life through code.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                My journey in web development started with curiosity and has evolved into
                a passion for creating seamless user experiences. I thrive on challenges
                and continuously seek to expand my skill set.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 card-hover bg-card border-border/50 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${highlight.gradient} text-white shadow-lg`}>
                      <highlight.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
