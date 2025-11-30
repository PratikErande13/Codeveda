import { useState } from "react";
import { Send, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@lumiere.design",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient-sunset">Connect</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about this project or want to collaborate? 
            Reach out and let's create something beautiful together.
          </p>
        </div>

        {/* Contact Layout - Flexbox */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-2/5 flex flex-col gap-5">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-500 opacity-0 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 flex items-center justify-center gradient-warm rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-card">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 mt-2">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={20} className="text-accent" />
                <span className="font-body text-sm font-semibold text-foreground">Quick Response</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:flex-1 opacity-0 animate-slide-in-right"
            style={{ animationDelay: "200ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 bg-card rounded-3xl border border-border shadow-card"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm font-semibold text-foreground mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm font-semibold text-foreground mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-semibold text-foreground mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 gradient-warm text-primary-foreground font-body text-base font-semibold rounded-xl hover:opacity-90 transition-all shadow-card hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
