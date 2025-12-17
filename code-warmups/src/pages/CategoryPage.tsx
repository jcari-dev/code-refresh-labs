import { useParams, useNavigate, Link } from "react-router-dom";
import { challenges } from "../challenges";
import { useEffect } from "react";

const labelMap: Record<string, string> = {
  strings: "Strings",
  lists: "Lists",
  math: "Math",
  "code-reading": "Code Reading",
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const list = challenges.filter((c) => c.category === categoryId);
  
  useEffect(() => {
    document.title = `${labelMap[categoryId as string] ?? categoryId} - Code Refresh Labs`;
  }, [categoryId]);


  if (!categoryId) {
    return <div>Missing category.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {labelMap[categoryId] ?? categoryId}
          </h2>
          <p className="text-sm text-slate-400">
            {list.length} short challenges in this lane.
          </p>
        </div>

        <Link to="/" className="text-xs text-slate-400 hover:text-emerald-300">
          ← Back to overview
        </Link>
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
            {list.map((ch) => (
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
                      localStorage.getItem(`${ch.id}:python:completed`) ===
                      "true"
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
            {list.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-6 text-center text-sm text-slate-400"
                >
                  No challenges in this category yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
