import { NavLink, Link } from "react-router-dom";
import { challenges } from "../challenges";

const labelMap: Record<string, string> = {
  strings: "Strings",
  lists: "Lists",
  math: "Math",
  "code-reading": "Code Reading",
};

export default function Sidebar() {
  const categories = [...new Set(challenges.map((c) => c.category))];

  const counts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat as string] = challenges.filter((c) => c.category === cat).length;
    return acc;
  }, {});

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col px-4 py-5">
      {/* App identity (clickable -> homepage) */}
      <Link to="/" className="mb-6 block group">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-sm font-bold group-hover:border-emerald-400/60 transition">
            CR
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight group-hover:text-slate-100 transition">
              Code Refresh
            </div>
            <div className="text-[11px] text-slate-400">
              Short problems. Sharp skills.
            </div>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <div className="text-[11px] font-semibold text-slate-400 uppercase mb-2">
        Practice lanes
      </div>

      <nav className="space-y-1 flex-1">
        {categories.map((cat) => (
          <NavLink
            key={cat as string}
            to={`/category/${cat}`}
            className={({ isActive }) =>
              [
                "flex items-center justify-between rounded-md px-3 py-2 text-sm transition",
                isActive
                  ? "bg-slate-800 text-emerald-200 border border-emerald-400/40"
                  : "text-slate-200 border border-slate-800 hover:bg-slate-900",
              ].join(" ")
            }
          >
            <span>{labelMap[cat as string] ?? cat}</span>
            <span className="text-[10px] text-slate-400">
              {counts[cat as string] ?? 0} tasks
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer (text-only, quiet) */}
      <div className="mt-6 text-center text-[11px] text-slate-500">
        <div className="mb-1">Built for light, focused coding.</div>
        <div className="space-x-2">
          <NavLink to="/why" className="hover:text-slate-300 transition">
            Why this exists
          </NavLink>
          <span>·</span>
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-300 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </aside>
  );
}
