import { Link } from "react-router-dom";
import { challenges } from "../challenges";
import { useMemo, useState, useEffect } from "react";
import MicroTipCard from "../components/MicroTipCard";
import HowThisWorksCard from "../components/HowThisWorksCard";

function getCompletion(chId: string) {
  const python = localStorage.getItem(`${chId}:python:completed`) === "true";
  const javascript =
    localStorage.getItem(`${chId}:javascript:completed`) === "true";
  return { python, javascript };
}

export default function Home() {
  const [randomId] = useState(() => {
    const idx = Math.floor(Math.random() * challenges.length);
    return challenges[idx]?.id ?? "capitalize-string";
  });

  useEffect(() => {
    document.title = "Code Refresh Labs - Home";
  }, []);

  const stats = useMemo(() => {
    let solved = 0;
    let solvedBoth = 0;
    let solvedPython = 0;
    let solvedJavaScript = 0;

    let lastSolvedIndex: number | null = null;

    for (let idx = 0; idx < challenges.length; idx++) {
      const ch = challenges[idx];
      const c = getCompletion(ch.id);
      const solvedAny = c.python || c.javascript;

      if (solvedAny) {
        solved += 1;
        lastSolvedIndex = idx;
      }
      if (c.python && c.javascript) solvedBoth += 1;
      if (c.python) solvedPython += 1;
      if (c.javascript) solvedJavaScript += 1;
    }

    const allDone = solvedBoth === challenges.length;

    const lastSolved =
      lastSolvedIndex !== null ? challenges[lastSolvedIndex] : null;

    let next: (typeof challenges)[number] | null = null;

    if (!allDone) {
      const start = lastSolvedIndex !== null ? lastSolvedIndex + 1 : 0;

      for (let offset = 0; offset < challenges.length; offset++) {
        const i = (start + offset) % challenges.length;
        const ch = challenges[i];
        const c = getCompletion(ch.id);
        const solvedAny = c.python || c.javascript;

        if (!solvedAny) {
          next = ch;
          break;
        }
      }
    }

    return {
      total: challenges.length,
      solved,
      solvedBoth,
      solvedPython,
      solvedJavaScript,
      lastSolved,
      next,
      allDone,
    };
  }, []);

  const percent =
    stats.total > 0 ? Math.round((stats.solved / stats.total) * 100) : 0;

  return (
    <div className="grid gap-6">
      {/* Two columns: left = main flow, right = support */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_minmax(0,0.8fr)]">
        {/* Main card: Ready + Snapshot + Continue */}
        <section className="rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Ready to warm up?</h2>
          <p className="text-sm text-slate-400 mb-4">
            Short warmups for Python and JavaScript.
          </p>

          <Link
            to={`/challenge/${randomId}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
          >
            Start a Random Warmup
          </Link>

          {/* Snapshot */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
              <div className="text-xs text-slate-400">Any language</div>
              <div className="mt-1 text-lg font-semibold text-slate-100">
                Warmups completed
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-100">
                {stats.solved}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                Collection size: {stats.total} warmups
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-3">
              <div className="text-xs text-slate-400">Both languages</div>
              <div className="mt-1 text-lg font-semibold text-slate-100">
                Completed in both
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-100">
                {stats.solvedBoth}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {stats.solvedBoth === 0
                  ? "If you ever feel like switching it up"
                  : "Great job, keep it up!"}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
            <div>
              Solved in Python:{" "}
              <span className="text-slate-200">{stats.solvedPython}</span>
            </div>
            <div>
              Solved in JavaScript:{" "}
              <span className="text-slate-200">{stats.solvedJavaScript}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-slate-800" />

          {/* Continue */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold">Continue</h3>
              <p className="text-xs text-slate-400 mt-1">
                This section updates automatically after your first completed
                warmup.
              </p>
            </div>

            <div className="text-xs text-slate-400">
              Remaining: {stats.total - stats.solved}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>
                Progress:{" "}
                <span className="text-slate-200 font-semibold">{percent}%</span>
              </span>
              <span>
                {stats.solved}/{stats.total}
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div className="mt-4">
            {stats.allDone ? (
              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <div className="text-sm font-semibold text-slate-100">
                  You’re fully caught up
                </div>
                <div className="mt-1 text-sm text-slate-400">
                  You’ve completed everything so far. More warmups will be added
                  soon.
                </div>
              </div>
            ) : stats.lastSolved ? (
              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">
                      Last completed
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {stats.lastSolved.title ?? stats.lastSolved.id}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 mb-1">Up next</div>
                    <div className="text-sm font-semibold text-slate-200">
                      {stats.next?.title ?? stats.next?.id ?? "You’re caught up"}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {stats.next ? (
                    <Link
                      to={`/challenge/${stats.next.id}`}
                      className="inline-flex items-center rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
                    >
                      Continue
                    </Link>
                  ) : (
                    <span className="inline-flex items-center rounded-lg bg-slate-800/60 px-3 py-2 text-sm font-semibold text-slate-200 border border-slate-700">
                      You’re all caught up
                    </span>
                  )}

                  <Link
                    to={`/challenge/${stats.lastSolved.id}`}
                    className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400"
                  >
                    Review last warmup
                  </Link>
                </div>

                <div className="mt-3 text-xs text-slate-400">
                  Tip: once you complete a warmup, this will keep a “next up”
                  link here so you can jump back in fast.
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-200">
                    <span className="text-lg">↩</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-100">
                      Your Continue section will appear here
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      Complete your first warmup and we’ll show your last
                      completed + the next warmup to do.
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        to={`/challenge/${randomId}`}
                        className="inline-flex items-center rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400"
                      >
                        Start Your First Warmup
                      </Link>
                    </div>

                    <div className="mt-3 text-xs text-slate-400">
                      Start anywhere. You can switch lanes anytime.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Support column */}
        <div className="grid gap-6">
          <MicroTipCard />
          <HowThisWorksCard />
        </div>
      </div>
    </div>
  );
}
