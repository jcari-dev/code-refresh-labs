export type CategoryId = "strings" | "lists" | "math" | "code-reading";
export type LanguageId = "python" | "javascript";

export interface TestCase {
  input: unknown[];
  expected: unknown;
}

export interface LanguageConfig {
  id: LanguageId;           // "python" or "javascript"
  requiredFunction: string; // e.g. "capitalize_string" or "capitalizeString"
  starterCode: string;
}

export interface Challenge {
  id: string;
  title: string;
  category: CategoryId;
  description: string;
  paramNames: string[];
  helpLink?: { text: string; href: string };
  languages: LanguageConfig[]; // NEW: per-language configs
  tests: TestCase[];
  codeSnippet?: {
    python: string;
    javascript: string;
  };
}
