import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Smartphone, Zap, Search, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Clean Code"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Deployment"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience with expert optimization.",
      features: ["Code Splitting", "Lazy Loading", "Image Optimization", "Caching Strategies"],
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Services",
      description: "Improve your search engine rankings and drive organic traffic to your site.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates and support.",
      features: ["Security Updates", "Bug Fixes", "Content Updates", "24/7 Support"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Us Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
