import { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const InteractiveCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className={cn(
          "text-6xl font-bold font-display transition-all duration-300",
          count > 0 && "text-accent",
          count < 0 && "text-destructive",
          count === 0 && "text-primary"
        )}>
          {count}
        </div>
        <div className={cn(
          "absolute -inset-4 rounded-full blur-xl opacity-50 transition-all duration-300",
          count > 0 && "bg-accent",
          count < 0 && "bg-destructive",
          count === 0 && "bg-primary"
        )} />
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={decrement}
          size="lg"
          variant="outline"
          className="w-14 h-14 rounded-full hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-smooth"
        >
          <Minus className="w-5 h-5" />
        </Button>

        <Button
          onClick={reset}
          size="lg"
          variant="outline"
          className="w-14 h-14 rounded-full hover:bg-muted transition-smooth"
        >
          <RotateCcw className="w-5 h-5" />
        </Button>

        <Button
          onClick={increment}
          size="lg"
          variant="outline"
          className="w-14 h-14 rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth"
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Click buttons to change the counter value
      </p>
    </div>
  );
};
