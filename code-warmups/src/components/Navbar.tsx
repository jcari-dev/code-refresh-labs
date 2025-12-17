import { useEffect, useMemo, useState } from "react";
import { QUOTES } from "../data/quotes";

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

const SHOW_QUOTES_KEY = "ui:showQuotes";

export default function Navbar() {
  // Pick quote once per mount
  const quote = useMemo(() => getRandomQuote(), []);

  // Persisted toggle
  const [showQuotes, setShowQuotes] = useState<boolean>(() => {
    const v = localStorage.getItem(SHOW_QUOTES_KEY);
    return v === null ? true : v === "true"; // default ON
  });

  useEffect(() => {
    localStorage.setItem(SHOW_QUOTES_KEY, String(showQuotes));
  }, [showQuotes]);

  return (
    <nav className="h-12 flex items-center justify-between bg-slate-900 border-b border-slate-800 px-6">
      <div className="text-sm font-semibold tracking-tight">Code Refresh</div>

      <div className="flex items-center gap-3">
        {/* Quote */}
        {showQuotes && (
          <div className="text-xs text-slate-400 italic text-right hidden sm:block max-w-md truncate">
            “{quote.text}”
          </div>
        )}

        {/* Eye toggle */}
        <button
          type="button"
          onClick={() => setShowQuotes((v) => !v)}
          className={[
            "inline-flex items-center rounded-md border px-2.5 py-1 text-xs",
            showQuotes
              ? "border-slate-700 text-slate-300 hover:border-slate-600"
              : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
          ].join(" ")}
          title={showQuotes ? "Hide quote" : "Show quote"}
          aria-pressed={showQuotes}
        >
          <span className="text-xs font-medium tracking-wide">
            {showQuotes ? "Quotes: On" : "Quotes: 🙈"}
          </span>
        </button>
      </div>
    </nav>
  );
}
