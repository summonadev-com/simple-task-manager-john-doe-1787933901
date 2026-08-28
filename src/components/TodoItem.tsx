import type { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="group flex items-center gap-3 px-4 py-3 transition hover:bg-slate-50">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        className="h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
      />
      <span
        className={
          todo.completed
            ? 'min-w-0 flex-1 break-words text-sm text-slate-400 line-through'
            : 'min-w-0 flex-1 break-words text-sm text-slate-800'
        }
      >
        {todo.text}
      </span>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
        className="shrink-0 rounded-md px-2 py-0.5 text-lg leading-none text-slate-300 transition hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
      >
        ×
      </button>
    </li>
  );
}
