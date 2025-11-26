import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import profileImage from "../../assets/PRATIK PHOTO 1.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 md:order-1 flex justify-center animate-in fade-in slide-in-from-left duration-1000">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg glow-accent">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="order-1 md:order-2 space-y-6 text-center md:text-left animate-in fade-in slide-in-from-right duration-1000">
              {/* <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 animate-in fade-in duration-1000 delay-300">
                👋 Welcome to my portfolio
              </div> */}
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white">
                Hi, I'm{" "}
                <span className="block mt-2 text-gradient-accent">
                  Pratik Erande
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 font-light">
                Full Stack Developer 
              </p>

              <p className="text-lg text-white/70 max-w-xl">
                I craft beautiful, functional web experiences that make a difference.
                Passionate about clean code, intuitive design, and continuous learning.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-lg"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <a
                  href="https://github.com/PratikErande13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-ramdas-erande-a59b4034a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="pratikerande73@gmail.com"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
};
