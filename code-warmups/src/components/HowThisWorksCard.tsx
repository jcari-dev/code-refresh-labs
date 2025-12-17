export default function HowThisWorksCard() {
  return (
    <section className="rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-lg">
      <h3 className="text-sm font-semibold text-slate-100">How this works</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        <li>• Pick a category or start a random warmup.</li>
        <li>• Solve in Python or JavaScript.</li>
        <li>• Your progress is saved locally in your browser.</li>
        <li>• No accounts, no setup, no pressure.</li>
      </ul>
    </section>
  );
}
