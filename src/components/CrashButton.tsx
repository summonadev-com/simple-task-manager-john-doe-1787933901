import { useState } from 'react';

/**
 * DELIBERATE TEST-ONLY CONTROL.
 * Throws an uncaught error during render so the app visibly crashes.
 * Not wrapped in try/catch or an error boundary on purpose. Safe to delete
 * this file and its usage in src/routes/index.tsx at any time.
 */
export function CrashButton() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error('Deliberate test error: something went wrong in the todo app');
  }

  return (
    <button
      type="button"
      onClick={() => setCrash(true)}
      className="mx-auto mt-6 block rounded-md border border-dashed border-red-300 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:border-red-400 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
    >
      Trigger runtime error
    </button>
  );
}
