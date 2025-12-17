import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Why() {


  useEffect(() => {
    document.title = "Why this exists - Code Refresh";
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10">
      <div className="mb-6">
        <Link to="/" className="text-sm text-slate-400 hover:text-slate-200">
          ← Back
        </Link>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight text-slate-100">
        Why this exists
      </h1>
      <p className="mt-3 text-slate-300 leading-relaxed">
        Some days you want to code without turning it into a grind. You just
        want to sit down, write something small, and move on with your day. Code
        Refresh is for those days.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            What this is for
          </h2>
          <p className="mt-2 text-slate-300 leading-relaxed">
            This site is built around warmups. Small coding problems that help
            you stay consistent without asking for too much time or energy.
          </p>
          <p className="mt-2 text-slate-300 leading-relaxed">
            It works if you are just starting out, and it works if you already
            know how to code but want a lighter way to keep the habit going.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100">
            What you’ll find
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
            <li>Short problems you can finish in one sitting</li>
            <li>Simple problems focused on fundamentals and built-ins</li>
            <li>A bit of momentum, without the pressure</li>
            <li>A lot of easter eggs hidden through the site :)</li>
          </ul>
        </section>

        {/* Credits */}
        <section className="pt-6 border-t border-slate-800">
          <h2 className="text-lg font-semibold text-slate-100">Credits</h2>
          <p className="mt-2 text-slate-300 leading-relaxed">
            This project is made possible by a few excellent tools and
            libraries.
          </p>

          <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-2">
            <li>
              <a
                href="https://microsoft.github.io/monaco-editor/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 underline-offset-2 hover:underline"
              >
                Monaco Editor
              </a>{" "}
              — the same editor that powers VS Code.
            </li>
            <li>
              <a
                href="https://pyodide.org/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 underline-offset-2 hover:underline"
              >
                Pyodide
              </a>{" "}
              — Python running directly in the browser via WebAssembly.
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 underline-offset-2 hover:underline"
              >
                React
              </a>{" "}
              and{" "}
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 underline-offset-2 hover:underline"
              >
                React Router
              </a>
            </li>
            <li>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 underline-offset-2 hover:underline"
              >
                Vite
              </a>
              , TypeScript, and Tailwind CSS
            </li>
          </ul>
        </section>

        <section className="rounded-xl bg-slate-900 border border-slate-700 p-4">
          <p className="text-slate-300">
            You don’t need to do everything today. Just a little code is still
            code.
          </p>
        </section>
      </div>
    </div>
  );
}
