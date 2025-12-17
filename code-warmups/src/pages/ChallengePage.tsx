import { useParams, Link } from "react-router-dom";
import { challenges } from "../challenges";
import ChallengeEditor from "../components/ChallengeEditor";
import { useEffect, useMemo } from "react";

const labelMap: Record<string, string> = {
  strings: "Strings",
  lists: "Lists",
  math: "Math",
  "code-reading": "Code Reading",
};

function formatInput(input: any, paramNames: string[]) {
  // Always treat input as args
  const args = Array.isArray(input) ? input : [input];

  return args
    .map((v, i) => {
      const name = paramNames[i] ?? `arg${i + 1}`;
      return `${name}=${JSON.stringify(v)}`;
    })
    .join(", ");
}

export default function ChallengePage() {
  const { challengeId } = useParams();
  const challenge = challenges.find((c) => c.id === challengeId);
  const base = import.meta.env.BASE_URL;

  function hardGo(toId: string) {
    window.location.hash = `#/challenge/${toId}`;
    window.location.reload(); // WE DON'T LIKE THIS, BUT IT WORKS. #TODO: FIX LATER.
  }

  if (!challenge) return <div>Challenge not found.</div>;

  useEffect(() => {
    if (challenge) {
      document.title = `${challenge.title} - Code Refresh`;
    }
  }, [challenge]);

  const nav = useMemo(() => {
    const sameCategory = challenges.filter(
      (c) => c.category === challenge.category
    );
    const index = sameCategory.findIndex((c) => c.id === challenge.id);
    return {
      prev: sameCategory[index - 1],
      next: sameCategory[index + 1],
    };
  }, [challenge.id, challenge.category]);

  const categoryLabel = labelMap[challenge.category] ?? challenge.category;
  const isCodeReading = challenge.category === "code-reading";

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-emerald-300">
          Home
        </Link>
        <span>/</span>
        <Link
          to={`/category/${challenge.category}`}
          className="hover:text-emerald-300"
        >
          {categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-slate-200">{challenge.title}</span>
      </div>

      <div className="flex items-center mb-2 text-xs">
        {nav.prev && (
          <button
            onClick={() => hardGo(nav.prev!.id)}
            className="rounded px-2 py-1 border border-slate-700 hover:border-emerald-400"
          >
            ← Prev
          </button>
        )}

        <div className="flex-1" />

        {nav.next && (
          <button
            onClick={() => hardGo(nav.next!.id)}
            className="rounded px-2 py-1 border border-slate-700 hover:border-emerald-400"
          >
            Next →
          </button>
        )}
      </div>

      {/* Two-column layout */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]">
        {/* Problem panel */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
          <h1 className="text-xl font-bold text-slate-50">{challenge.title}</h1>

          <p className="text-sm text-slate-300 whitespace-pre-wrap">
            {challenge.description}
          </p>

          {/* Code snippet (code-reading only). Shows both languages to avoid needing shared state. */}
          {isCodeReading && (challenge as any).codeSnippet && (
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                  Python
                </div>
                <pre className="font-mono text-xs bg-slate-900/80 border border-slate-800 rounded px-3 py-2 overflow-x-auto">
                  <code>{(challenge as any).codeSnippet.python}</code>
                </pre>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                  JavaScript
                </div>
                <pre className="font-mono text-xs bg-slate-900/80 border border-slate-800 rounded px-3 py-2 overflow-x-auto">
                  <code>{(challenge as any).codeSnippet.javascript}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Examples: hide for code-reading to avoid spoilers */}
          {!isCodeReading && (
            <div className="mt-3">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                Examples &amp; Test Cases
              </h2>
              <ul className="space-y-1 text-sm text-slate-200">
                {challenge.tests.slice(0, 5).map((t, i) => (
                  <li
                    key={i}
                    className="font-mono text-xs bg-slate-900/80 border border-slate-800 rounded px-2 py-1"
                  >
                    <span className="text-slate-400">input:</span>{" "}
                    {formatInput(t.input, challenge.paramNames)}{" "}
                    <span className="text-slate-400">→</span>{" "}
                    {JSON.stringify(t.expected)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Editor panel */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-3">
          <ChallengeEditor
            challenge={challenge}
            isCodeReading={isCodeReading}
          />
        </section>
      </div>
    </div>
  );
}
