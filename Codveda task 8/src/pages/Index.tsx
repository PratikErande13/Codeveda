import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, LogIn } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useAuth } from '@/contexts/AuthContext';
import { Todo } from '@/types/todo';
import { TodoItem } from '@/components/TodoItem';
import { AddTodoForm } from '@/components/AddTodoForm';
import { TodoStats } from '@/components/TodoStats';
import { EmptyState } from '@/components/EmptyState';
import { FilterTabs, FilterType } from '@/components/FilterTabs';
import { UserMenu } from '@/components/UserMenu';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex justify-end p-4 sm:p-6">
        {user ? (
          <UserMenu />
        ) : (
          <Link to="/auth">
            <Button variant="outline" className="gap-2">
              <LogIn className="w-4 h-4" />
              Sign In
            </Button>
          </Link>
        )}
      </div>

      <main className="relative max-w-2xl mx-auto px-4 pb-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Task Manager</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-3">
            Get Things Done
          </h1>
          <p className="text-muted-foreground text-lg">
            Organize your day, one task at a time
          </p>
        </motion.header>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <TodoStats todos={todos} />
        </motion.section>

        {/* Add Todo Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <AddTodoForm onAdd={addTodo} />
        </motion.section>

        {/* Filter Tabs */}
        {todos.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mb-6"
          >
            <FilterTabs filter={filter} onFilterChange={setFilter} />
          </motion.section>
        )}

        {/* Todo List */}
        <section className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredTodos.length === 0 && todos.length === 0 ? (
              <EmptyState />
            ) : filteredTodos.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 text-muted-foreground"
              >
                No {filter} tasks found
              </motion.p>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </AnimatePresence>
        </section>

        {/* Footer */}
        {todos.length > 0 && (
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p>
              {todos.filter((t) => t.completed).length} of {todos.length} tasks
              completed
            </p>
          </motion.footer>
        )}
      </main>
    </div>
  );
};

export default Index;
