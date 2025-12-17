import type { Challenge } from "../types";

export const stringsChallenges: Challenge[] = [
  {
    id: "capitalize-string",
    title: "Capitalize String",
    category: "strings",
    description: "Return the string with only the first character capitalized.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "capitalize_string",
        starterCode: `def capitalize_string(s: str) -> str:
    if not s:
        return s
    # TODO: implement
    return s
`,
      },
      {
        id: "javascript",
        requiredFunction: "capitalizeString",
        starterCode: `function capitalizeString(s) {
  if (!s) return s;
  // TODO: implement
  return s;
}
`,
      },
    ],
    tests: [
      { input: ["aaaa"], expected: "Aaaa" },
      { input: ["hello"], expected: "Hello" },
      { input: ["x"], expected: "X" },
      { input: [""], expected: "" },
      { input: ["maccha latte"], expected: "Maccha Latte" },
    ],
    timeLimitSeconds: 300,
  },
  // other challenges...
  {
    id: "remove-all-digits",
    title: "Remove All Digits",
    category: "strings",
    description: "Return the string without any digits.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "remove_all_digits",
        starterCode: `def remove_all_digits(s: str) -> str:
    if not s:
        return s
    # TODO: implement
    return s
`,
      },
      {
        id: "javascript",
        requiredFunction: "removeAllDigits",
        starterCode: `function removeAllDigits(s) {
  if (!s) return s;
  // TODO: implement
  return s;
}
`,
      },
    ],
    tests: [
      { input: ["aaaa"], expected: "aaaa" },
      { input: ["a1b2c3"], expected: "abc" },
      { input: ["a 8"], expected: "a " },
      { input: [""], expected: "" },
      { input: ["123"], expected: "" },
    ],
    timeLimitSeconds: 300,
  },
  // other challenges...
];
