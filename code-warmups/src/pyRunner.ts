import type { Challenge, LanguageConfig } from "./types";

declare global {
  interface Window {
    loadPyodide?: () => Promise<any>;
  }
}

let pyodidePromise: Promise<any> | null = null;

export function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = (window as any).loadPyodide();
  }
  return pyodidePromise;
}

// Build the python code that DEFINES __run_tests (does not call it yet)
export function buildPythonHarness(
  challenge: Challenge,
  lang: LanguageConfig,
  userCode: string
): string {
  const testsPy = JSON.stringify(challenge.tests.map((t) => [t.input, t.expected]));

  return `
${userCode}

def __run_tests():
    tests = ${testsPy}

    try:
        func = ${lang.requiredFunction}
    except NameError:
        return "ERROR: function '${lang.requiredFunction}' is not defined"

    results = []
    passed = 0

    for args, expected in tests:
        try:
            got = func(*args)
        except Exception as e:
            results.append(f"[ERROR] {args!r} -> {e}")
            continue

        if got == expected:
            passed += 1
            results.append(f"[OK]   {args!r} -> {got!r}")
        else:
            results.append(
                f"[FAIL] {args!r}: expected {expected!r}, got {got!r}"
            )

    summary = f"Passed {passed}/{len(tests)} tests"
    return "\\n".join(results + ["", summary])
`;
}

export async function runPythonChallenge(
  challenge: Challenge,
  lang: LanguageConfig,
  userCode: string
): Promise<{ result: string; console: string }> {
  const pyodide = await getPyodide();
  const harness = buildPythonHarness(challenge, lang, userCode);

  const wrapped = `
import io
from contextlib import redirect_stdout, redirect_stderr

_stdout = io.StringIO()
_stderr = io.StringIO()

_result = ""
with redirect_stdout(_stdout), redirect_stderr(_stderr):
    try:
${harness.split("\n").map((l) => "        " + l).join("\n")}
        _result = __run_tests()
    except Exception as e:
        _result = "Runtime error:\\n" + str(e)

_console = _stdout.getvalue()
_err = _stderr.getvalue()
if _err:
    _console = (_console + ("\\n" if _console else "") + _err)

(_result, _console)
`;

  const out = (await pyodide.runPythonAsync(wrapped)) as any;
  // Pyodide returns a Python tuple as an array-like JS object.
  const result = String(out[0] ?? "");
  const consoleText = String(out[1] ?? "");

  return { result, console: consoleText };
}
