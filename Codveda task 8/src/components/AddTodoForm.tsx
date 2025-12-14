import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAdd(trimmedText);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-5 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 shadow-soft"
        maxLength={200}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-medium"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add Task</span>
      </motion.button>
    </form>
  );
};
