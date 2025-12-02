import { cn } from "@/lib/utils";

interface CalculatorButtonProps {
  value: string;
  onClick: (value: string) => void;
  variant?: "default" | "operator" | "equal" | "clear" | "scientific";
  span?: number;
}

const CalculatorButton = ({ 
  value, 
  onClick, 
  variant = "default",
  span = 1 
}: CalculatorButtonProps) => {
  const isSmallText = ["sin", "cos", "tan"].includes(value);
  
  const baseClasses = cn(
    "calc-button aspect-square rounded-2xl font-mono font-semibold flex items-center justify-center cursor-pointer select-none active:scale-95 transition-transform",
    isSmallText ? "text-sm" : "text-xl"
  );
  
  const variantClasses = {
    default: "text-foreground",
    operator: "calc-button-operator text-primary-foreground",
    equal: "calc-button-equal text-primary-foreground",
    clear: "calc-button-clear text-destructive-foreground",
    scientific: "calc-button-scientific text-accent-foreground"
  };

  const spanClasses = {
    1: "col-span-1",
    2: "col-span-2 !aspect-auto h-full"
  };

  return (
    <button
      onClick={() => onClick(value)}
      className={cn(
        baseClasses,
        variantClasses[variant],
        spanClasses[span as keyof typeof spanClasses]
      )}
    >
      {value}
    </button>
  );
};

export default CalculatorButton;
