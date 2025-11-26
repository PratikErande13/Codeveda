import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    "HTML5 & CSS3",
    "Responsive Design",
    "Modern JavaScript",
    "UI/UX Principles",
    "Performance Optimization",
    "Cross-browser Compatibility",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Creating Digital <span className="gradient-text">Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate about building beautiful, functional websites
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Story Section */}
            <Card className="border-border">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-semibold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are dedicated to crafting exceptional web experiences that combine aesthetic design
                  with practical functionality. With a focus on clean code and user-centered design,
                  we create websites that not only look great but also deliver results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach is simple: understand your needs, design with purpose, and build with
                  precision. Every project is an opportunity to push boundaries and create something
                  truly remarkable.
                </p>
              </CardContent>
            </Card>

            {/* Mission Section */}
            <Card className="border-border">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses and individuals with high-quality web solutions that make a
                  lasting impact. We believe that great design should be accessible to everyone, and
                  we're committed to making that vision a reality.
                </p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">What We Do Best</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Section */}
            <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-semibold">Our Values</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Quality First:</strong> We never compromise on the quality of our work.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Innovation:</strong> We stay ahead of trends and embrace new technologies.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Collaboration:</strong> We work closely with our clients to achieve their goals.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
