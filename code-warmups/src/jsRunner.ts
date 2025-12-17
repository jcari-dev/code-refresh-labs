// jsRunner.ts
import { Challenge, LanguageConfig } from "./types";

/**
 * Runs JS warmups and returns:
 * - result: the human-readable test report (Passed X/Y tests...)
 * - console: captured console.log/warn/error output during execution
 *
 * Assumptions (matches the typical structure used in your app):
 * - activeLang.requiredFunction is the function name the user must implement
 * - challenge.tests is an array of test cases
 *   Each test can be:
 *     { args: any[]; expected: any }
 *   OR:
 *     { input: any; expected: any }   // input can be a single arg or an array of args
 *
 * If your test shape differs, adjust only the `getArgsFromTest()` and `formatExpected()` parts.
 */

type RunResult = { result: string; console: string };

type AnyTest =
  | { args: any[]; expected: any }
  | { input: any; expected: any }
  | { inputs: any[]; expected: any }
  | Record<string, any>;

function safeStringify(x: any) {
  try {
    return typeof x === "string" ? x : JSON.stringify(x);
  } catch {
    return String(x);
  }
}

function deepEqual(a: any, b: any) {
  // good-enough deep equality for warmups
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;

  // arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false;
    return true;
  }

  // objects
  if (a && b && typeof a === "object" && typeof b === "object") {
    const ak = Object.keys(a);
    const bk = Object.keys(b);
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (!deepEqual(a[k], b[k])) return false;
    return true;
  }

  return false;
}

function getArgsFromTest(t: AnyTest): any[] {
  // Preferred: { args: [...] }
  if (Array.isArray((t as any).args)) return (t as any).args;

  // Common alt: { input: ... } where input can be a single arg or array
  if ("input" in (t as any)) {
    const input = (t as any).input;
    return Array.isArray(input) ? input : [input];
  }

  // Another alt: { inputs: [...] }
  if (Array.isArray((t as any).inputs)) return (t as any).inputs;

  // Fallback: no args
  return [];
}

function getExpectedFromTest(t: AnyTest): any {
  return (t as any).expected;
}

function makeConsoleCapture() {
  const logs: string[] = [];

  const origLog = console.log;
  const origWarn = console.warn;
  const origErr = console.error;

  const push = (tag: string, args: any[]) => {
    const line =
      tag +
      " " +
      args
        .map((a) => {
          if (typeof a === "string") return a;
          return safeStringify(a);
        })
        .join(" ");
    logs.push(line);
  };

  console.log = (...args) => {
    push("[log]", args);
    origLog(...args); // keep devtools output; remove if you want silence
  };
  console.warn = (...args) => {
    push("[warn]", args);
    origWarn(...args);
  };
  console.error = (...args) => {
    push("[error]", args);
    origErr(...args);
  };

  return {
    getText: () => logs.join("\n"),
    restore: () => {
      console.log = origLog;
      console.warn = origWarn;
      console.error = origErr;
    },
  };
}

export async function runJsChallenge(
  challenge: Challenge,
  activeLang: LanguageConfig,
  code: string
): Promise<RunResult> {
  const capture = makeConsoleCapture();

  try {
    const requiredFn = (activeLang as any).requiredFunction ?? "solution";

    // Evaluate user code in a function scope and return the required function.
    // The user's code can declare `function foo(){}` or `const foo = (...) => {}`
    // We try both: direct binding and exporting through `return`.
    const wrapped = `
"use strict";
${code}

try {
  return (typeof ${requiredFn} !== "undefined") ? ${requiredFn} : null;
} catch (e) {
  return null;
}
`;

    const fnFactory = new Function(wrapped) as () => any;
    const userFn = fnFactory();

    if (typeof userFn !== "function") {
      return {
        result:
          `Could not find a function named "${requiredFn}".\n` +
          `Make sure you defined it exactly (spelling + case).\n`,
        console: capture.getText(),
      };
    }

    const tests: AnyTest[] = (challenge as any).tests ?? (challenge as any).testCases ?? [];
    if (!Array.isArray(tests) || tests.length === 0) {
      return {
        result:
          "No tests configured for this challenge yet.\n" +
          "Add `tests` to the challenge definition.",
        console: capture.getText(),
      };
    }

    let passed = 0;
    const total = tests.length;
    const lines: string[] = [];

    for (let i = 0; i < tests.length; i++) {
      const t = tests[i];
      const args = getArgsFromTest(t);
      const expected = getExpectedFromTest(t);

      let actual: any;
      try {
        actual = userFn(...args);
      } catch (e) {
        lines.push(
          `Test ${i + 1}: ERROR\n` +
            `  args: ${safeStringify(args)}\n` +
            `  error: ${String(e)}`
        );
        continue;
      }

      const ok = deepEqual(actual, expected);

      if (ok) {
        passed++;
      } else {
        lines.push(
          `Test ${i + 1}: FAIL\n` +
            `  args: ${safeStringify(args)}\n` +
            `  expected: ${safeStringify(expected)}\n` +
            `  got: ${safeStringify(actual)}`
        );
      }
    }

    const header = `Passed ${passed}/${total} tests\n`;
    const body = lines.length ? "\n" + lines.join("\n\n") + "\n" : "";
    return { result: header + body, console: capture.getText() };
  } catch (e) {
    return { result: "Runtime error:\n" + String(e), console: capture.getText() };
  } finally {
    capture.restore();
  }
}
