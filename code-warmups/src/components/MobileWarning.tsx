export default function MobileWarning({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-semibold">Heads up 👋</h1>

        <p className="text-slate-300">
          Code Refresh Labs is still being optimized for mobile.
        </p>

        <p className="text-slate-400 text-sm">
          Feel free to continue, we’re actively smoothing things out ✨
        </p>

        <button
          onClick={onContinue}
          className="mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
        >
          Sounds good!
        </button>
      </div>
    </div>
  );
}
