import { cn } from "@/lib/utils";

interface CalculatorDisplayProps {
  expression: string;
  result: string;
}

const CalculatorDisplay = ({ expression, result }: CalculatorDisplayProps) => {
  const displayValue = result || expression || "0";
  const showExpression = expression && result;

  return (
    <div className="w-full rounded-2xl p-5 mb-5" style={{ background: 'hsl(var(--calc-display))' }}>
      {showExpression && (
        <div className="text-right text-muted-foreground font-mono text-base mb-2 truncate opacity-70 min-h-[24px]">
          {expression}
        </div>
      )}
      {!showExpression && <div className="min-h-[24px]" />}
      <div 
        className={cn(
          "text-right font-mono font-bold tracking-tight truncate transition-all duration-200 min-h-[48px] flex items-center justify-end",
          displayValue.length > 10 ? "text-3xl" : "text-5xl",
          result ? "text-primary text-display" : "text-foreground"
        )}
      >
        {displayValue}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
