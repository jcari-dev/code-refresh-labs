import MonacoEditor from "@monaco-editor/react";
import confetti from "canvas-confetti";
import { Challenge, LanguageConfig, LanguageId } from "../types";
import { runPythonChallenge } from "../pyRunner";
import { runJsChallenge } from "../jsRunner";
import { useState, useMemo } from "react";

interface Props {
  challenge: Challenge;
}



export default function ChallengeEditor({ challenge }: Props) {
  // ---- Safe languages array with fallback ----
  const languages: LanguageConfig[] = useMemo(() => {
    if (Array.isArray((challenge as any).languages) && (challenge as any).languages.length > 0) {
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

  // If somehow still empty, show a friendly error.
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
    () => languages.find(l => l.id === activeLangId) ?? languages[0],
    [languages, activeLangId]
  );

  const [code, setCode] = useState(activeLang.starterCode);
  const [output, setOutput] = useState("Run the tests!");
  const [isRunning, setIsRunning] = useState(false);

  function handleLangChange(id: LanguageId) {
    setActiveLangId(id);
    const lang = languages.find(l => l.id === id);
    if (lang) {
      setCode(lang.starterCode);
      setOutput("Run the tests!");
    }
  }

  function handleResetCode() {
    
    if(!confirm("This will replace all code in the code editor, to the default provided code. Confirm??")){
    setCode(activeLang.starterCode);
    setOutput("Run the tests!")
    }

  }

  async function handleRun() {
    setIsRunning(true);
    setOutput("Running tests...");

    try {
      let result: string;

      if (activeLang.id === "python") {
        result = await runPythonChallenge(challenge, activeLang, code);
      } else {
        result = await runJsChallenge(challenge, activeLang, code);
      }

      setOutput(result);

      const match = /Passed\s+(\d+)\/(\d+)\s+tests/.exec(result);
      if (match) {
        const passed = Number(match[1]);
        const total = Number(match[2]);
        if (passed === total && total > 0) {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }

      

    } catch (err) {
      setOutput("Runtime error:\n" + String(err));
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
          {languages.map(lang => (
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
              {/* {lang.id === "python" ? "Python" : "JavaScript"} */}
            </button>
        </div>
      )}

      <div className="border border-slate-800 rounded-lg overflow-hidden">
        <MonacoEditor
          height="280px"
          language={monacoLanguage}
          theme="vs-dark"
          value={code}
          onChange={v => setCode(v ?? "")}
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
          Runtime: {activeLang.id === "python" ? "Pyodide (Python 3.11.3)" : "Browser JS"}
        </div>
      </div>

      <pre className="bg-slate-900 border border-slate-700 text-slate-200 p-3 rounded min-h-[120px] whitespace-pre-wrap text-sm overflow-auto">
        {output}
      </pre>
    </div>
  );
}
