import { useState, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Task } from '@/types/task';
import { TaskInput } from '@/components/TaskInput';
import { TaskList } from '@/components/TaskList';
import { TaskStats } from '@/components/TaskStats';
import { TaskFilter, FilterType } from '@/components/TaskFilter';
import { Button } from '@/components/ui/button';
import { Trash2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('todo-tasks', []);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
    toast.success('Task added successfully!');
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.success('Task deleted');
  };

  const updateTask = (id: string, text: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text } : task
      )
    );
    toast.success('Task updated');
  };

  const clearCompleted = () => {
    const completedCount = tasks.filter((t) => t.completed).length;
    if (completedCount === 0) return;
    setTasks((prev) => prev.filter((task) => !task.completed));
    toast.success(`Cleared ${completedCount} completed task${completedCount > 1 ? 's' : ''}`);
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((t) => !t.completed);
      case 'completed':
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const hasCompletedTasks = tasks.some((t) => t.completed);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-8 px-4 md:py-16">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Stay Productive</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Task Manager
          </h1>
          <p className="text-muted-foreground text-lg">
            Organize your day, one task at a time
          </p>
        </header>

        {/* Stats */}
        <section className="mb-8">
          <TaskStats tasks={tasks} />
        </section>

        {/* Task Input */}
        <section className="mb-6">
          <TaskInput onAdd={addTask} />
        </section>

        {/* Filter and Actions */}
        <section className="flex items-center justify-between gap-4 mb-6">
          <TaskFilter filter={filter} onFilterChange={setFilter} />
          {hasCompletedTasks && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCompleted}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear completed
            </Button>
          )}
        </section>

        {/* Task List */}
        <main>
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Tasks are saved locally in your browser</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
