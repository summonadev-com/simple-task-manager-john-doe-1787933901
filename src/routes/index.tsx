import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { TodoList } from '@/components/TodoList';
// Deliberate test-only control — safe to remove.
import { CrashButton } from '@/components/CrashButton';
import { useTodos } from '@/hooks/useTodos';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, remainingCount, completedCount } =
    useTodos();
  const [draft, setDraft] = useState('');

  const handleAdd = () => {
    if (!draft.trim()) return;
    addTodo(draft);
    setDraft('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-10 sm:py-16">
      <main className="mx-auto w-full max-w-md">
        <header className="mb-6 px-1">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Todos
          </h1>
          <p className="mt-1 text-sm text-slate-500">Everything you need to get done today.</p>
        </header>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5">
          <div className="flex items-center gap-2 border-b border-slate-100 p-4">
            <input
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleAdd();
                }
              }}
              placeholder="What needs doing?"
              aria-label="New todo"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="button"
              onClick={handleAdd}
              disabled={!draft.trim()}
              className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Add
            </button>
          </div>

          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

          <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-4 py-3">
            <span className="text-xs text-slate-500">
              {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
            </span>
            <button
              type="button"
              onClick={clearCompleted}
              disabled={completedCount === 0}
              className="rounded-md px-2 py-1 text-xs font-medium text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-slate-300"
            >
              Clear completed
            </button>
          </div>
        </div>

        <CrashButton />
      </main>
    </div>
  );
}
