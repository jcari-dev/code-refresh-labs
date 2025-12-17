export default function MobileWarning() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-semibold">Heads up 👋</h1>
        <p className="text-slate-300">
          Code Refresh Labs isn’t quite ready for mobile yet.
        </p>
        <p className="text-slate-400 text-sm">
          For the best experience, please visit on a tablet or desktop.
        </p>
      </div>
    </div>
  );
}
