import type { Challenge } from "../types";

export const codeReadingChallenges: Challenge[] = [
  {
    id: "cr-list-mutation",
    title: "What Does This Code Do?",
    category: "code-reading",
    description: "What is the final value of `items`?",
    paramNames: [""],
    codeSnippet: {
      python: `items = [1, 2, 3]
items.append(items.pop(0))
return items`,
      javascript: `const items = [1, 2, 3];
items.push(items.shift());
return items;`,
    },
    languages: [
      {
        id: "python",
        requiredFunction: "solution",
        starterCode: `def solution():
    # TODO: return the final value of items
    return None
`,
      },
      {
        id: "javascript",
        requiredFunction: "solution",
        starterCode: `function solution() {
  // TODO: return the final value of items
  return null;
}
`,
      },
    ],
    tests: [{ input: [], expected: [2, 3, 1] }],
    timeLimitSeconds: 300,
  },
];
