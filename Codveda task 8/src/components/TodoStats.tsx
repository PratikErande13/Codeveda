import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ListTodo } from 'lucide-react';
import { Todo } from '@/types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats = ({ todos }: TodoStatsProps) => {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;
  const progress = total > 0 ? (completed / total) * 100 : 0;

  const stats = [
    { label: 'Total', value: total, icon: ListTodo, color: 'text-foreground' },
    { label: 'Completed', value: completed, icon: CheckCircle2, color: 'text-success' },
    { label: 'Pending', value: pending, icon: Circle, color: 'text-primary' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center p-4 bg-card rounded-lg border border-border shadow-soft"
          >
            <Icon className={`w-5 h-5 mb-2 ${color}`} />
            <span className="text-2xl font-semibold text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </motion.div>
        ))}
      </div>

      {total > 0 && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
