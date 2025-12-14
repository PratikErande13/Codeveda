import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '@/types/todo';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-4 p-4 bg-card rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-200"
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
          todo.completed
            ? "bg-primary border-primary"
            : "border-muted-foreground/30 hover:border-primary/50"
        )}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
          </motion.div>
        )}
      </button>

      <span
        className={cn(
          "flex-1 text-foreground transition-all duration-200",
          todo.completed && "line-through text-muted-foreground"
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
