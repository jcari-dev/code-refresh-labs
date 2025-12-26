import { useMemo } from "react";
import { MICRO_TIPS } from "../data/microTips";

function pickRandomIndex(n: number) {
  return Math.floor(Math.random() * n);
}

const MICRO_TIP_ISSUE_URL =
  "https://github.com/jcari-dev/code-refresh-labs/issues/new?template=micro-tip.yml";

export default function MicroTipCard() {
  function renderInlineCode(text: string) {
    return text.split(/(`[^`]+`)/g).map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-emerald-300"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  }

  const tip = useMemo(() => {
    const idx = pickRandomIndex(MICRO_TIPS.length);
    return MICRO_TIPS[idx];
  }, []);

  return (
    <section className="rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-lg flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-slate-100">Micro Tip</h3>
        {tip.tag && (
          <span className="text-[11px] rounded-full border border-slate-700 bg-slate-800/60 px-2 py-1 text-slate-300">
            {tip.tag}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {renderInlineCode(tip.text)}
      </p>

      <div className="mt-auto flex items-end justify-between">
        <p className="text-xs text-slate-400">Refresh to roll a new one.</p>

        <a
          href={MICRO_TIP_ISSUE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-emerald-300 hover:text-emerald-200 underline-offset-4"
          title="Open a GitHub issue to submit a micro tip"
        >
          Got a micro tip? Drop it here.
        </a>
      </div>
    </section>
  );
}
