import MonacoEditor from "@monaco-editor/react";
import confetti from "canvas-confetti";
import type { Challenge, LanguageConfig, LanguageId } from "../types";
import { runPythonChallenge } from "../pyRunner";
import { runJsChallenge } from "../jsRunner";
import { useState, useMemo, useEffect } from "react";

interface Props {
  challenge: Challenge;
  isCodeReading?: boolean;
}

/** ---------- Submissions storage helpers ---------- */
type Submission = {
  ts: number; // Date.now()
  lang: LanguageId;
  passed: number | null;
  total: number | null;
  ok: boolean | null; // true if all passed, false if not, null if unknown
  output: string; // full test output (optionally capped)
  console: string; // captured print()/console.log() (optionally capped)
  code: string; // code used at submission time (optionally capped)
};

function summarizeOnly(raw: string) {
  const match = /Passed\s+(\d+)\/(\d+)\s+tests/.exec(raw);
  const passed = match ? Number(match[1]) : null;
  const total = match ? Number(match[2]) : null;
  const ok = match ? passed === total && (total ?? 0) > 0 : null;


  const safe =
    passed == null || total == null
      ? "Ran tests.\n"
      : ok
        ? `Passed ${passed}/${total} tests\n`
        : `Passed ${passed}/${total} tests\n\nNot quite — try again.\n`;

  return { safe, passed, total, ok };
}

// Defensive: if any spoiler-style lines appear, drop them
function stripSpoilerLines(text: string) {
  return text
    .split("\n")
    .filter((line) => {
      const l = line.toLowerCase();
      return !(
        l.includes("expected:") ||
        l.includes("expected ") ||
        l.includes(" got:") ||
        l.includes(" got ") ||
        l.includes("args:")
      );
    })
    .join("\n")
    .trim();
}



function submissionsKey(challengeId: string) {
  return `${challengeId}:submissions`;
}

function readSubmissions(challengeId: string): Submission[] {
  try {
    const raw = localStorage.getItem(submissionsKey(challengeId));
    const arr = raw ? (JSON.parse(raw) as Submission[]) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function writeSubmissions(challengeId: string, subs: Submission[]) {
  localStorage.setItem(submissionsKey(challengeId), JSON.stringify(subs));
}

function appendSubmission(challengeId: string, entry: Submission, cap = 20) {
  const prev = readSubmissions(challengeId);
  const next = [entry, ...prev].slice(0, cap);
  writeSubmissions(challengeId, next);
  return next;
}
/** ----------------------------------------------- */

export default function ChallengeEditor({ challenge, isCodeReading = false }: Props) {
  // ---- Safe languages array with fallback ----
  const languages: LanguageConfig[] = useMemo(() => {
    if (
      Array.isArray((challenge as any).languages) &&
      (challenge as any).languages.length > 0
    ) {
      return (challenge as any).languages;
    }

    // Fallback for older challenges that only had requiredFunction/starterCode
    const legacyRequired = (challenge as any).requiredFunction ?? "solution";
    const legacyStarter =
      (challenge as any).starterCode ??
      `def ${legacyRequired}(*args):\n    # TODO: implement\n    return None\n`;

    return [
      {
        id: "python",
        requiredFunction: legacyRequired,
        starterCode: legacyStarter,
      },
    ];
  }, [challenge]);

  if (!languages.length) {
    return (
      <div className="text-sm text-red-300 bg-slate-900 border border-red-500/50 rounded p-3">
        This challenge has no languages configured yet.
      </div>
    );
  }

  const [activeLangId, setActiveLangId] = useState<LanguageId>(
    (languages[0].id as LanguageId) ?? "python"
  );

  const activeLang: LanguageConfig = useMemo(
    () => languages.find((l) => l.id === activeLangId) ?? languages[0],
    [languages, activeLangId]
  );

  const [code, setCode] = useState(activeLang.starterCode);
  const [output, setOutput] = useState("Run the tests!");
  const [consoleOut, setConsoleOut] = useState(""); // NEW
  const [isRunning, setIsRunning] = useState(false);

  // Submissions for this challenge
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  useEffect(() => {
    setSubmissions(readSubmissions(challenge.id));
    setExpandedIdx(0);
  }, [challenge.id]);

  useEffect(() => {
    const lingeringCode = localStorage.getItem(challenge.id + ":" + activeLangId);
    if (lingeringCode) setCode(lingeringCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (code === activeLang.starterCode) return;
    localStorage.setItem(challenge.id + ":" + activeLangId, code);
  }, [code, challenge.id, activeLangId, activeLang.starterCode]);

  function handleLangChange(id: LanguageId) {
    setActiveLangId(id);
    const lang = languages.find((l) => l.id === id);
    if (lang) {
      const lingeringCode = localStorage.getItem(challenge.id + ":" + id);
      setCode(lingeringCode ? lingeringCode : lang.starterCode);
      setOutput("Run the tests!");
      setConsoleOut("");
    }
  }

  function handleResetCode() {
    if (
      confirm(
        "This will replace all code in the code editor, to the default provided code. Are you sure?"
      )
    ) {
      localStorage.removeItem(challenge.id + ":" + activeLangId);
      setCode(activeLang.starterCode);
      setOutput("Run the tests!");
      setConsoleOut("");
    }
  }

async function handleRun() {
  setIsRunning(true);
  setOutput("Running tests...");
  setConsoleOut("");

  try {
    const run =
      activeLang.id === "python"
        ? await runPythonChallenge(challenge, activeLang, code)
        : await runJsChallenge(challenge, activeLang, code);

    // default values
    let shownOutput = run.result;
    let shownConsole = run.console || "";

    let passed: number | null = null;
    let total: number | null = null;
    let ok: boolean | null = null;

    if (isCodeReading) {
      // Only show summary to avoid spoilers (expected/got)
      const s = summarizeOnly(run.result);
      shownOutput = s.safe;
      passed = s.passed;
      total = s.total;
      ok = s.ok;

      // Defensive: if anything spoiler-ish leaks into console, remove it
      shownConsole = stripSpoilerLines(shownConsole);
    } else {
      const match = /Passed\s+(\d+)\/(\d+)\s+tests/.exec(run.result);
      passed = match ? Number(match[1]) : null;
      total = match ? Number(match[2]) : null;
      ok = match ? passed === total && (total ?? 0) > 0 : null;

    }

    setOutput(shownOutput);
    setConsoleOut(shownConsole);

    if (ok) {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      localStorage.setItem(challenge.id + ":" + activeLangId + ":completed", "true");
    }

    const entry: Submission = {
      ts: Date.now(),
      lang: activeLangId,
      passed,
      total,
      ok,
      output: shownOutput.slice(0, 8000),
      console: shownConsole.slice(0, 8000),
      code: code.slice(0, 8000),
    };

    setSubmissions(appendSubmission(challenge.id, entry));
    setExpandedIdx(0);
  } catch (err) {
    const msg = "Runtime error:\n" + String(err);
    setOutput(msg);
    setConsoleOut("");

    const entry: Submission = {
      ts: Date.now(),
      lang: activeLangId,
      passed: null,
      total: null,
      ok: false,
      output: msg.slice(0, 8000),
      console: "",
      code: code.slice(0, 8000),
    };

    setSubmissions(appendSubmission(challenge.id, entry));
    setExpandedIdx(0);
  } finally {
    setIsRunning(false);
  }
}

  const monacoLanguage =
    activeLang.id === "javascript" ? "javascript" : "python";

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Language toggle */}
      {languages.length > 1 && (
        <div className="flex gap-2 text-xs mb-1">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleLangChange(lang.id as LanguageId)}
              className={[
                "px-2.5 py-1 rounded-full border",
                activeLangId === lang.id
                  ? "bg-emerald-500 text-slate-900 border-emerald-400"
                  : "bg-slate-900 text-slate-200 border-slate-700 hover:border-emerald-400",
              ].join(" ")}
            >
              {lang.id === "python" ? "Python" : "JavaScript"}
            </button>
          ))}

          <button
            key={"default-code"}
            onClick={handleResetCode}
            className="ml-auto px-2.5 py-1 rounded-full border bg-emerald-500 text-slate-900 border-emerald-400"
          >
            Reset to starter code
          </button>
        </div>
      )}

      <div className="border border-slate-800 rounded-lg overflow-hidden">
        <MonacoEditor
        
          height="280px"
          language={monacoLanguage}
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v ?? "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 bg-emerald-500 text-slate-900 text-sm font-semibold rounded-md shadow hover:bg-emerald-400 disabled:bg-slate-500"
          onClick={handleRun}
          disabled={isRunning}
        >
          {isRunning ? "Running..." : "Run Tests"}
        </button>

        <div className="text-[11px] text-slate-400">
          Runtime:{" "}
          {activeLang.id === "python" ? "Pyodide (Python 3.11.3)" : "Browser JS"}
        </div>
      </div>

      {/* Tests output */}
      <div className="text-[11px] text-slate-400">Output</div>
      <pre className="bg-slate-900 border border-slate-700 text-slate-200 p-3 rounded min-h-[120px] whitespace-pre-wrap text-sm overflow-auto">
        {output}
      </pre>

      {/* Console output */}
      <div className="text-[11px] text-slate-400">Console</div>
      <pre className="bg-slate-950/50 border border-slate-800 text-slate-200 p-3 rounded min-h-[80px] whitespace-pre-wrap text-sm overflow-auto">
        {consoleOut ? consoleOut : "Console output will show here."}
      </pre>

      {/* Submissions (expandable) */}
      {submissions.length > 0 && (
        <div className="border border-slate-800 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900/60 border-b border-slate-800">
            <div className="text-xs font-semibold text-slate-200">
              Submissions
            </div>
            <button
              className="text-[11px] text-slate-400 hover:text-slate-200"
              onClick={() => {
                localStorage.removeItem(submissionsKey(challenge.id));
                setSubmissions([]);
                setExpandedIdx(null);
              }}
            >
              Clear
            </button>
          </div>

          <div className="max-h-[320px] overflow-auto divide-y divide-slate-800">
            {submissions.map((s, i) => {
              const isOpen = expandedIdx === i;
              const score =
                s.passed != null && s.total != null
                  ? `${s.passed}/${s.total}`
                  : "—";
              const langLabel = s.lang === "python" ? "PY" : "JS";

              return (
                <div key={s.ts + ":" + i} className="text-xs">
                  <button
                    className="w-full text-left px-3 py-2 hover:bg-slate-900/40"
                    onClick={() => setExpandedIdx(isOpen ? null : i)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-slate-500">
                          {new Date(s.ts).toLocaleString()}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="uppercase">{langLabel}</span>
                        <span className="text-slate-700">•</span>
                        <span
                          className={
                            s.ok ? "text-emerald-400" : "text-slate-300"
                          }
                        >
                          {score}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={s.ok ? "text-emerald-400" : "text-slate-500"}
                        >
                          {s.ok ? "PASS" : "—"}
                        </span>
                        <span className="text-slate-500">
                          {isOpen ? "▾" : "▸"}
                        </span>
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3">
                      <div className="grid grid-cols-1 gap-2">
                        {/* Output */}
                        <div className="flex items-center justify-between">
                          <div className="text-[11px] text-slate-500">
                            Output
                          </div>
                          <button
                            className="text-[11px] text-slate-400 hover:text-slate-200"
                            onClick={() =>
                              navigator.clipboard.writeText(s.output)
                            }
                          >
                            Copy output
                          </button>
                        </div>
                        <pre className="bg-slate-950/50 border border-slate-800 rounded p-2 max-h-[140px] overflow-auto whitespace-pre-wrap text-slate-200">
                          {s.output}
                        </pre>

                        {/* Console */}
                        <div className="flex items-center justify-between">
                          <div className="text-[11px] text-slate-500">
                            Console
                          </div>
                          <button
                            className="text-[11px] text-slate-400 hover:text-slate-200"
                            onClick={() =>
                              navigator.clipboard.writeText(s.console || "")
                            }
                          >
                            Copy console
                          </button>
                        </div>
                        <pre className="bg-slate-950/50 border border-slate-800 rounded p-2 max-h-[140px] overflow-auto whitespace-pre-wrap text-slate-200">
                          {s.console ? s.console : "(no console output)"}
                        </pre>

                        {/* Code */}
                        <div className="flex items-center justify-between">
                          <div className="text-[11px] text-slate-500">Code</div>
                          <button
                            className="text-[11px] text-slate-400 hover:text-slate-200"
                            onClick={() => navigator.clipboard.writeText(s.code)}
                          >
                            Copy code
                          </button>
                        </div>
                        <pre className="bg-slate-950/50 border border-slate-800 rounded p-2 max-h-[220px] overflow-auto whitespace-pre text-slate-200">
                          {s.code}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
