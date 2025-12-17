import { Link } from "react-router-dom";
import { challenges } from "../challenges";
import { useMemo, useState, useEffect } from "react";
import MicroTipCard from "../components/MicroTipCard";
import HowThisWorksCard from "../components/HowThisWorksCard";

function getCompletion(chId: string) {
  const python = localStorage.getItem(`${chId}:python:completed`) === "true";
  const javascript = localStorage.getItem(`${chId}:js:completed`) === "true";
  return { python, javascript };
}

export default function Home() {
  const [randomId] = useState(() => {
    const idx = Math.floor(Math.random() * challenges.length);
    return challenges[idx]?.id ?? "capitalize-string";
  });

  useEffect(() => {
    document.title = "Code Refresh - Home";
  }, []);

  const stats = useMemo(() => {
    let any = 0;
    let both = 0;
    let python = 0;
    let javascript = 0;
    let lastSolved: string | null = null;

    for (const ch of challenges) {
      const c = getCompletion(ch.id);

      if (c.python || c.javascript) any += 1;
      if (c.python && c.javascript) both += 1;
      if (c.python) python += 1;
      if (c.javascript) javascript += 1;

      if (c.python || c.javascript) lastSolved = ch.title ?? ch.id;
    }

    return {
      total: challenges.length,
      any,
      both,
      python,
      javascript,
      lastSolved,
    };
  }, []);

  return (
    <div className="grid gap-6">
      {/* Top row */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
        {/* Quick start */}
        <section className="rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Ready to warm up?</h2>

          <Link
            to={`/challenge/${randomId}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
          >
            Start a random warmup
          </Link>

          {/* Progress snapshot */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
              <div className="text-xs text-slate-400">
                Completed (any language)
              </div>
              <div className="mt-1 text-lg font-semibold text-slate-100">
                {stats.any} / {stats.total}
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
              <div className="text-xs text-slate-400">
                Completed (both languages)
              </div>
              <div className="mt-1 text-lg font-semibold text-slate-100">
                {stats.both} / {stats.total}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
            <div>
              Python: <span className="text-slate-200">{stats.python}</span>
            </div>
            <div>
              JavaScript:{" "}
              <span className="text-slate-200">{stats.javascript}</span>
            </div>
            {stats.lastSolved && (
              <div>
                Last solved:{" "}
                <span className="text-slate-300">{stats.lastSolved}</span>
              </div>
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="rounded-2xl bg-slate-900 border border-slate-700 p-5">
          <h3 className="text-sm font-semibold mb-3">Categories</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link
              to="/category/strings"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Strings</div>
              <div className="text-slate-400">Text, slicing, parsing</div>
            </Link>

            <Link
              to="/category/lists"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Lists</div>
              <div className="text-slate-400">Loops, filters, indices</div>
            </Link>

            <Link
              to="/category/math"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Math</div>
              <div className="text-slate-400">Counts, ranges</div>
            </Link>

            <Link
              to="/category/code-reading"
              className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 hover:border-emerald-400"
            >
              <div className="font-semibold">Code reading</div>
              <div className="text-slate-400">“What does this do?”</div>
            </Link>
          </div>
        </section>
      </div>

      {/* Bottom row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <MicroTipCard />
        <HowThisWorksCard />
      </div>
    </div>
  );
}
