import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="gradient-dark text-primary-foreground py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="font-display text-4xl font-bold mb-4">Lumière</h3>
            <p className="font-body text-primary-foreground/60 leading-relaxed mb-6">
              A responsive web design project showcasing CSS Flexbox and Grid layouts. 
              Built with care and attention to detail.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-base text-primary-foreground/60 hover:text-primary-foreground transition-colors link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-primary-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <span className="font-body text-sm text-primary-foreground/70 group-hover:text-primary-foreground">
              Back to Top
            </span>
            <ArrowUp
              size={16}
              className="text-primary-foreground/70 group-hover:text-primary-foreground group-hover:-translate-y-1 transition-all"
            />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-body text-sm text-primary-foreground/50">
            © {currentYear} Lumière. All rights reserved.
          </p>
          <p className="font-body text-sm text-primary-foreground/50 flex items-center gap-2">
            Made with{" "}
            <Heart size={14} className="text-primary fill-primary animate-pulse" />{" "}
            for Codveda Internship
          </p>
          <p className="font-body text-sm text-primary-foreground/50">
            <span className="px-3 py-1 rounded-full bg-primary-foreground/10">
              Task 4: Flexbox & Grid
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
