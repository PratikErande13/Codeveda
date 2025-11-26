import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Well-structured and maintainable code following best practices.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful Design",
      description: "Modern, responsive designs that look great on all devices.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency to deliver the best experience.",
    },
  ];

  return (

    
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      
     
      <section
  className="pt-32 pb-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?semt=ais_hybrid&w=740&q=80')",
  }}
>
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="container mx-auto text-center space-y-8 relative z-10">
    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
      <span className="text-sm font-medium text-primary">Welcome to My Website</span>
    </div>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
      Building the Web,
      <br />
      <span className="gradient-text">One Page at a Time</span>
    </h1>

    <p className="text-lg text-white/90 max-w-2xl mx-auto">
      A simple, elegant website showcasing modern web development with HTML, CSS, and responsive design.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link to="/about">
        <Button size="lg" className="bg-white text-black hover:bg-white/80 shadow-lg">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>

      <Link to="/contact">
        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
          Get in Touch
        </Button>
      </Link>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on delivering exceptional quality in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's work together to create something amazing. Reach out today!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Contact Us Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default Home;
