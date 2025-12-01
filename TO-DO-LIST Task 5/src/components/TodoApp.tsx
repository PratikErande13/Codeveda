import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import { toast } from "sonner";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0 || localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (!inputValue.trim()) {
      toast.error("Please enter a task");
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
    toast.success("Task added");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Task deleted");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            My Tasks
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay organized and productive
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-8 border border-border animate-in fade-in slide-in-from-top duration-700 delay-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Tasks</p>
              <p className="text-3xl font-bold text-foreground">{totalCount}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {completedCount}
              </p>
            </div>
          </div>
          {totalCount > 0 && (
            <div className="mt-4 bg-secondary rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-primary transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-8 border border-border animate-in fade-in slide-in-from-top duration-700 delay-200">
          <div className="flex gap-3">
            <Input
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 h-12 text-base bg-secondary/50 border-border focus-visible:ring-primary"
            />
            <Button
              onClick={addTodo}
              className="h-12 px-6 bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add
            </Button>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-16 animate-in fade-in duration-700 delay-300">
              <Circle className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg">No tasks yet</p>
              <p className="text-muted-foreground/60 text-sm mt-2">
                Add your first task to get started
              </p>
            </div>
          ) : (
            todos.map((todo, index) => (
              <div
                key={todo.id}
                className="bg-card rounded-xl shadow-card p-5 border border-border hover:shadow-elevated transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="w-6 h-6 rounded-full data-[state=checked]:bg-gradient-primary data-[state=checked]:border-primary"
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-base transition-all duration-300 ${
                        todo.completed
                          ? "line-through text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {todo.text}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTodo(todo.id)}
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-300 shrink-0"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="text-center mt-12 text-sm text-muted-foreground animate-in fade-in duration-700 delay-500">
            <p>
              {completedCount === totalCount
                ? "🎉 All tasks completed! Great job!"
                : `${totalCount - completedCount} task${
                    totalCount - completedCount === 1 ? "" : "s"
                  } remaining`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
