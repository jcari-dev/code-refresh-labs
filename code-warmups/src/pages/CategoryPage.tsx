import { useParams, useNavigate, Link } from "react-router-dom";
import { challenges } from "../challenges";
import { useEffect, useMemo, useState } from "react";

const labelMap: Record<string, string> = {
  strings: "Strings",
  lists: "Lists",
  math: "Math",
  "code-reading": "Code Reading",
};

type CompletedFilter = "all" | "py" | "js" | "any" | "both" | "none";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [completedFilter, setCompletedFilter] = useState<CompletedFilter>("all");

  const list = challenges.filter((c) => c.category === categoryId);

  useEffect(() => {
    document.title = `${
      labelMap[categoryId as string] ?? categoryId
    } - Code Refresh Labs`;
  }, [categoryId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return list.filter((ch) => {
      // name filter
      const matchesName =
        q.length === 0 ||
        ch.title.toLowerCase().includes(q) ||
        ch.description.toLowerCase().includes(q);

      if (!matchesName) return false;

      // completion filter
      const pyDone =
        localStorage.getItem(`${ch.id}:python:completed`) === "true";
      const jsDone = localStorage.getItem(`${ch.id}:js:completed`) === "true";

      switch (completedFilter) {
        case "all":
          return true;
        case "py":
          return pyDone;
        case "js":
          return jsDone;
        case "any":
          return pyDone || jsDone;
        case "both":
          return pyDone && jsDone;
        case "none":
          return !pyDone && !jsDone;
        default:
          return true;
      }
    });
  }, [list, query, completedFilter]);

  if (!categoryId) return <div>Missing category.</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {labelMap[categoryId] ?? categoryId}
          </h2>
          <p className="text-sm text-slate-400">
            {filtered.length} / {list.length} challenges shown.
          </p>
        </div>

        <Link to="/" className="text-xs text-slate-400 hover:text-emerald-300">
          ← Back to overview
        </Link>
      </div>

      {/* filters */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name/description..."
          className="w-full sm:w-80 rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
        />
        <select
          value={completedFilter}
          onChange={(e) => setCompletedFilter(e.target.value as CompletedFilter)}
          className="w-full sm:w-56 rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        >
          <option value="all">All</option>
          <option value="py">Completed (PY)</option>
          <option value="js">Completed (JS)</option>
          <option value="any">Completed (any)</option>
          <option value="both">Completed (both)</option>
          <option value="none">Not completed</option>
        </select>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-700 overflow-hidden shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-900/80 text-slate-300 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Challenge</th>
              <th className="px-4 py-2 text-left font-medium">Completed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filtered.map((ch) => (
              <tr
                key={ch.id}
                className="hover:bg-slate-800/70 cursor-pointer"
                onClick={() => navigate(`/challenge/${ch.id}`)}
              >
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-50">{ch.title}</div>
                  <div className="text-xs text-slate-400 line-clamp-1">
                    {ch.description}
                  </div>
                </td>
                <td className="px-4 py-3 text-xs font-medium tracking-wide">
                  <span
                    className={
                      localStorage.getItem(`${ch.id}:python:completed`) === "true"
                        ? "text-emerald-400"
                        : "text-slate-500"
                    }
                  >
                    PY
                  </span>
                  <span className="mx-1 text-slate-600">/</span>
                  <span
                    className={
                      localStorage.getItem(`${ch.id}:js:completed`) === "true"
                        ? "text-emerald-400"
                        : "text-slate-500"
                    }
                  >
                    JS
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-6 text-center text-sm text-slate-400"
                >
                  No matching challenges.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
