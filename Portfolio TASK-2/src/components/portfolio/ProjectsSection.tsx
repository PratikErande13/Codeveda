import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tags: ["HTML","CSS", "JavaScript", "Node.js", "React", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chatbot",
      description:
        "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      tags: [ "HTML","CSS","JavaScript","TypeScript", "React", "Firebase", "Tailwind"],
      image: "https://cdn.prod.website-files.com/6567419473bd91d7666f2d50/66ed131ec42eb68c543df20f_ai_chatbot_integration.webp",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and data visualization.",
      tags: ["HTML","CSS","JavaScript","React", "API Integration", "Node.js"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing projects, skills, and contact information with smooth animations.",
      tags: ["HTML", "CSS", "JavaScript", "Animation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and approaches.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden card-hover bg-card border-border/50 group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-2xl group-hover:text-gradient transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {/* <Button variant="default" size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 hover:border-primary transition-all">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
