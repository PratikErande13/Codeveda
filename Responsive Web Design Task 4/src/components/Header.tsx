import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 font-display text-2xl font-semibold"
          >
            <span
              className={`transition-all duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Photo Shop
            </span>
            <Sparkles
              size={18}
              className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 font-body text-sm font-medium transition-all duration-300 rounded-full hover:bg-primary/10 ${
                    isScrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center px-5 py-2.5 font-body text-sm font-medium rounded-full transition-all duration-300 ${
              isScrolled
                ? "gradient-warm text-primary-foreground shadow-card hover:shadow-glow"
                : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20"
            }`}
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-strong rounded-2xl border border-border/50 shadow-card overflow-hidden">
            <ul className="flex flex-col py-3">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a
                    href={link.href}
                    className="block px-6 py-3 font-body text-base text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
