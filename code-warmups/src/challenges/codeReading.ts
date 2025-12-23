import type { Challenge } from "../types";

export const codeReadingChallenges: Challenge[] = [
  {
    id: "cr-list-mutation",
    title: "Code Reading Warmup: 1",
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
  },
  {
    id: "cr-bool-to-int",
    title: "Code Reading Warmup: 2",
    category: "code-reading",
    description: "What is the value of x?",
    paramNames: [""],
    codeSnippet: {
      python: `x = [int(True), int(False)]`,
      javascript: `const x = [Number(true), Number(false)];`,
    },
    languages: [
      {
        id: "python",
        requiredFunction: "solution",
        starterCode: `def solution():
    # TODO: return the value of x
    return None
`,
      },
      {
        id: "javascript",
        requiredFunction: "solution",
        starterCode: `function solution() {
  // TODO: return the value of x
  return null;
}
`,
      },
    ],
    tests: [{ input: [], expected: [1, 0] }],
  },
  {
    id: "cr-regex-remove-digits",
    title: "Code Reading Warmup: 3",
    category: "code-reading",
    description: "What is the final value of `text`?",
    paramNames: [""],
    codeSnippet: {
      python: `text = "a1b2c3"
text = re.sub(r"\\d", "", text)
return text`,
      javascript: `let text = "a1b2c3";
text = text.replace(/\\d/g, "");
return text;`,
    },
    languages: [
      {
        id: "python",
        requiredFunction: "solution",
        starterCode: `def solution():
    # TODO: return the final value of text
    return None
`,
      },
      {
        id: "javascript",
        requiredFunction: "solution",
        starterCode: `function solution() {
  // TODO: return the final value of text
  return null;
}
`,
      },
    ],
    tests: [{ input: [], expected: "abc" }],
  },
];
