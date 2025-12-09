import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TaskInputProps {
  onAdd: (text: string) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 h-12 text-base bg-card border-2 border-border focus:border-primary transition-colors"
      />
      <Button 
        type="submit" 
        disabled={!text.trim()}
        className="h-12 px-6 bg-gradient-primary hover:opacity-90 transition-opacity font-semibold"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add
      </Button>
    </form>
  );
}
