import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type FilterType = 'all' | 'active' | 'completed';

interface FilterTabsProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export const FilterTabs = ({ filter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex gap-1 p-1 bg-muted rounded-lg">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
            filter === value
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {filter === value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-card rounded-md shadow-soft"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
};
