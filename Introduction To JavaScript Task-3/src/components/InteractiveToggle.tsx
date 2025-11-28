import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const options: ToggleOption[] = [
  {
    id: "light",
    label: "Light Mode",
    icon: <Sun className="w-4 h-4" />,
    color: "bg-amber-500"
  },
  {
    id: "dark",
    label: "Dark Mode",
    icon: <Moon className="w-4 h-4" />,
    color: "bg-slate-700"
  }
];

export const InteractiveToggle = () => {
  const [selected, setSelected] = useState(options[0].id);

  const selectedOption = options.find(opt => opt.id === selected);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-smooth border-2",
              selected === option.id
                ? "border-primary bg-primary text-primary-foreground shadow-medium"
                : "border-border bg-card hover:border-primary/50"
            )}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <div className={cn(
        "p-4 rounded-lg border-2 transition-all duration-300",
        selected === "light" ? "bg-amber-50 border-amber-200" : "bg-slate-900 border-slate-700"
      )}>
        <p className={cn(
          "text-sm font-medium animate-in fade-in duration-300",
          selected === "light" ? "text-amber-900" : "text-slate-100"
        )}>
          {selected === "light" ? "☀️" : "🌙"} Currently viewing in <strong>{selectedOption?.label}</strong>
        </p>
      </div>
    </div>
  );
};
