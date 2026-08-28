import { TodoItem } from '@/components/TodoItem';
import type { Todo } from '@/types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-sm font-medium text-slate-500">All clear!</p>
        <p className="mt-1 text-sm text-slate-400">Add your first todo above to get started.</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-100">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
