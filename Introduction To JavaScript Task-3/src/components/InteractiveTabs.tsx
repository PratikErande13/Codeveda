import { useState } from "react";
import { Code2, Palette, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: string;
}

const tabs: Tab[] = [
  {
    id: "javascript",
    label: "JavaScript",
    icon: <Code2 className="w-4 h-4" />,
    content: "JavaScript is the programming language of the web. It enables interactive web pages and is an essential part of web applications. With JS, you can create dynamic content, control multimedia, animate images, and much more!"
  },
  {
    id: "design",
    label: "Design",
    icon: <Palette className="w-4 h-4" />,
    content: "Modern web design focuses on user experience, accessibility, and visual appeal. Using CSS and design systems, we create beautiful, responsive interfaces that work seamlessly across all devices and screen sizes."
  },
  {
    id: "features",
    label: "Features",
    icon: <Zap className="w-4 h-4" />,
    content: "Interactive features enhance user engagement. From dropdown menus to modals, form validation to animations - these elements create a smooth, intuitive experience that keeps users coming back."
  }
];

export const InteractiveTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 font-medium transition-smooth relative",
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-in slide-in-from-left duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <p className="text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
          {activeContent}
        </p>
      </div>
    </div>
  );
};
