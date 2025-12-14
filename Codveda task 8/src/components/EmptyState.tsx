import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

export const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="w-20 h-20 mb-6 rounded-2xl bg-muted flex items-center justify-center">
        <ClipboardList className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-serif text-foreground mb-2">No tasks yet</h3>
      <p className="text-muted-foreground max-w-xs">
        Start adding tasks to organize your day and boost your productivity.
      </p>
    </motion.div>
  );
};
