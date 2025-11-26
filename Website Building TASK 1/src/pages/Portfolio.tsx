import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-featured online shopping platform with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      category: "web",
      description: "Modern portfolio website with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase"],
    },
    {
      title: "Task Management Tool",
      category: "web",
      description: "Collaborative task management platform for teams with real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Health and fitness app with workout plans and progress tracking.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase"],
    },
    {
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity including logo, color palette, and design system.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Figma", "Branding"],
    },
    {
      title: "Restaurant Website",
      category: "web",
      description: "Beautiful restaurant website with online ordering and reservation system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "UI/UX Case Study",
      category: "design",
      description: "Comprehensive redesign of a SaaS product improving user experience by 40%.",
      image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&h=600&fit=crop",
      tags: ["UI/UX", "Research", "Figma"],
    },
    {
      title: "Weather App",
      category: "mobile",
      description: "Clean and intuitive weather app with location-based forecasts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tags: ["React Native", "API Integration"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects we're proud to have built
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={
                  filter === category.id
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-primary/20 hover:bg-primary/5"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-3">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
            <h2 className="text-3xl font-bold">Like What You See?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's work together to bring your ideas to life and create something amazing.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Project
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
