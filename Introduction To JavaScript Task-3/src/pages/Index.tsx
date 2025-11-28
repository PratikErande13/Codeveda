import { useState } from "react";
import { Code2, Sparkles, Zap, MessageSquare, Info, Calculator, Layout, ToggleLeft, MousePointer } from "lucide-react";
import { InteractiveDropdown } from "@/components/InteractiveDropdown";
import { InteractiveModal, useModal } from "@/components/InteractiveModal";
import { ValidatedForm } from "@/components/ValidatedForm";
import { InteractiveCounter } from "@/components/InteractiveCounter";
import { InteractiveTabs } from "@/components/InteractiveTabs";
import { InteractiveToggle } from "@/components/InteractiveToggle";
import { InteractiveTooltip } from "@/components/InteractiveTooltip";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const modal = useModal();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const programmingLanguages = [
    { label: "JavaScript", value: "javascript", icon: "🟨" },
    { label: "TypeScript", value: "typescript", icon: "🔷" },
    { label: "Python", value: "python", icon: "🐍" },
    { label: "React", value: "react", icon: "⚛️" },
    { label: "Vue.js", value: "vue", icon: "💚" },
    { label: "Angular", value: "angular", icon: "🔴" },
  ];

  const handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
    const lang = programmingLanguages.find(l => l.value === value);
    toast({
      title: "Language Selected!",
      description: `You selected ${lang?.label} ${lang?.icon}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-soft">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-display text-foreground">
                JavaScript Playground
              </h1>
              <p className="text-xs text-muted-foreground">Interactive Demo</p>
            </div>
          </div>
          <Button 
            onClick={modal.open}
            className="gradient-primary shadow-soft hover:shadow-medium transition-smooth"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Open Modal
          </Button>
        </div>
      </header>

      
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight animate-in fade-in slide-in-from-top-5 duration-500 delay-100">
            Master JavaScript
            <br />
            <span className="text-primary">Interactive Components</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-top-6 duration-500 delay-200">
            Explore interactive dropdowns, modals, form validation, counters, tabs, and more with clean JavaScript code and professional design.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {[
            { icon: Zap, title: "Event Listeners", desc: "Dynamic interactions", color: "bg-amber-500" },
            { icon: Code2, title: "JS Functions", desc: "Reusable code", color: "bg-blue-500" },
            { icon: Sparkles, title: "Form Validation", desc: "Real-time checking", color: "bg-green-500" },
            { icon: Layout, title: "State Management", desc: "Data handling", color: "bg-purple-500" },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-smooth hover:border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 shadow-soft`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold mb-1 font-display">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center shadow-soft">
                  <span className="text-xl">📋</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Interactive Dropdown</h3>
                  <p className="text-xs text-muted-foreground">Event listeners & state</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Select your favorite programming language. This demonstrates event handling and dynamic content updates.
              </p>
              <InteractiveDropdown 
                options={programmingLanguages}
                placeholder="Choose a language..."
                onSelect={handleLanguageSelect}
              />
              {selectedLanguage && (
                <div className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/20 animate-in fade-in slide-in-from-top-2">
                  <p className="text-sm font-medium text-accent">
                    ✨ Selected: <strong>{programmingLanguages.find(l => l.value === selectedLanguage)?.label}</strong>
                  </p>
                </div>
              )}
            </div>
            <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center shadow-soft">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Interactive Counter</h3>
                  <p className="text-xs text-muted-foreground">State management</p>
                </div>
              </div>
              <InteractiveCounter />
            </div>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center shadow-soft">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Tabbed Interface</h3>
                <p className="text-xs text-muted-foreground">Navigation & content switching</p>
              </div>
            </div>
            <InteractiveTabs />
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center shadow-soft">
                  <ToggleLeft className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Toggle Switch</h3>
                  <p className="text-xs text-muted-foreground">Binary state control</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Toggle between options with visual feedback and state changes.
              </p>
              <InteractiveToggle />
            </div>
            <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center shadow-soft">
                  <MousePointer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Tooltips</h3>
                  <p className="text-xs text-muted-foreground">Hover interactions</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Hover over buttons to see helpful tooltip messages with positioning.
              </p>
              <InteractiveTooltip />
            </div>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center shadow-soft">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Modal Dialog</h3>
                <p className="text-xs text-muted-foreground">Overlay & focus management</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Click to open an interactive modal. Features backdrop blur, keyboard shortcuts (ESC to close), and smooth animations.
            </p>
            <Button 
              onClick={modal.open}
              size="lg"
              className="gradient-primary shadow-soft hover:shadow-medium transition-smooth"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Launch Modal Demo
            </Button>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shadow-soft">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Form Validation</h3>
                <p className="text-xs text-muted-foreground">Real-time input validation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Real-time form validation with instant feedback. Watch validation states change as you type!
            </p>
            <ValidatedForm />
          </div>
        </div>
      </section>
      <footer className="border-t border-border mt-20 bg-card/50">
        <div className="container mx-auto px-4 py-8">
        </div>
      </footer>
      <InteractiveModal isOpen={modal.isOpen} onClose={modal.close} title="🎉 Modal Demo">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This interactive modal showcases several JavaScript concepts:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">1</span>
              </div>
              <div>
                <p className="font-medium text-sm">Event Handling</p>
                <p className="text-xs text-muted-foreground">Click outside or press ESC to close</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">2</span>
              </div>
              <div>
                <p className="font-medium text-sm">DOM Manipulation</p>
                <p className="text-xs text-muted-foreground">Dynamic content rendering and removal</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">3</span>
              </div>
              <div>
                <p className="font-medium text-sm">State Management</p>
                <p className="text-xs text-muted-foreground">Track and update modal open/close state</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">4</span>
              </div>
              <div>
                <p className="font-medium text-sm">CSS Animations</p>
                <p className="text-xs text-muted-foreground">Smooth fade and scale transitions</p>
              </div>
            </li>
          </ul>
          <Button 
            onClick={modal.close} 
            className="w-full mt-4 gradient-primary shadow-soft"
            size="lg"
          >
            Close Modal
          </Button>
        </div>
      </InteractiveModal>
    </div>
  );
};

export default Index;
