import { cn } from "@/lib/utils";
import { Clock, Trash2 } from "lucide-react";

interface HistoryItem {
  expression: string;
  result: string;
  id: number;
}

interface CalculatorHistoryProps {
  history: HistoryItem[];
  onItemClick: (item: HistoryItem) => void;
  onClear: () => void;
}

const CalculatorHistory = ({ history, onItemClick, onClear }: CalculatorHistoryProps) => {
  if (history.length === 0) {
    return (
      <div className="glass rounded-2xl p-4 h-[280px] flex flex-col items-center justify-center text-muted-foreground">
        <Clock className="w-8 h-8 mb-2 opacity-40" />
        <p className="text-sm font-medium">No history yet</p>
        <p className="text-xs opacity-60 mt-1">Calculations appear here</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wider">History</span>
        </div>
        <button
          onClick={onClear}
          className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-destructive"
          title="Clear history"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
        {history.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item)}
            className={cn(
              "w-full text-left p-3 rounded-xl transition-all duration-150",
              "bg-secondary/50 hover:bg-secondary",
              "border border-transparent hover:border-primary/30",
              "group cursor-pointer"
            )}
          >
            <div className="font-mono text-[11px] text-muted-foreground truncate">
              {item.expression}
            </div>
            <div className="font-mono text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              = {item.result}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorHistory;
