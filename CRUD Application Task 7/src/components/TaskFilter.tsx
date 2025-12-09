import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type FilterType = 'all' | 'active' | 'completed';

interface TaskFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function TaskFilter({ filter, onFilterChange }: TaskFilterProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex gap-2 p-1 bg-secondary rounded-lg">
      {filters.map((f) => (
        <Button
          key={f.value}
          variant="ghost"
          size="sm"
          onClick={() => onFilterChange(f.value)}
          className={cn(
            "flex-1 transition-all duration-200",
            filter === f.value 
              ? "bg-card shadow-sm text-foreground" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
}
