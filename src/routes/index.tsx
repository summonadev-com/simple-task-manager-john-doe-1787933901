import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-slate-500">Todo app loading…</p>
      </div>
    </div>
  );
}
