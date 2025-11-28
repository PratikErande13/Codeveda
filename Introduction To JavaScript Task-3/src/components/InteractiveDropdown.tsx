import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownOption {
  label: string;
  value: string;
  icon?: string;
}

interface InteractiveDropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

export const InteractiveDropdown = ({ 
  options, 
  placeholder = "Select an option",
  onSelect 
}: InteractiveDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string, label: string) => {
    setSelected(label);
    setIsOpen(false);
    onSelect?.(value);
  };

  return (
    <div className="relative w-full max-w-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-card border-2 border-border",
          "flex items-center justify-between",
          "transition-smooth hover:border-primary hover:shadow-glow",
          "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
          isOpen && "border-primary shadow-glow"
        )}
      >
        <span className={cn(
          "text-sm font-medium",
          selected ? "text-foreground" : "text-muted-foreground"
        )}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          className={cn(
            "w-5 h-5 transition-transform duration-300 text-primary",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 py-2 bg-card border-2 border-primary rounded-xl shadow-glow animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value, option.label)}
              className={cn(
                "w-full px-4 py-3 text-left text-sm font-medium",
                "hover:bg-primary/10 transition-colors duration-200",
                "flex items-center gap-3",
                index === 0 && "rounded-t-lg",
                index === options.length - 1 && "rounded-b-lg"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {option.icon && <span className="text-xl">{option.icon}</span>}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
