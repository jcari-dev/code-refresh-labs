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
  },
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
  },
  {
    id: "remove-all-whitespace",
    title: "Remove All Whitespace",
    category: "strings",
    description: "Return the string without any whitespace characters.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "remove_all_whitespace",
        starterCode: `def remove_all_whitespace(s: str) -> str:
    if not s:
        return s
    # TODO: implement
    return s
`,
      },
      {
        id: "javascript",
        requiredFunction: "removeAllWhitespace",
        starterCode: `function removeAllWhitespace(s) {
  if (!s) return s;
  // TODO: implement
  return s;
}
`,
      },
    ],
    tests: [
      { input: ["aaaa "], expected: "aaaa" },
      { input: [" abc"], expected: "abc" },
      { input: ["a 8"], expected: "a8" },
      { input: [""], expected: "" },
      { input: [" 1 2 3 "], expected: "123" },
    ],
  },
  {
    id: "join-two-strings",
    title: "Join Two Strings",
    category: "strings",
    description: "Return the concatenation of two input strings.",
    paramNames: ["string1", "string2"],
    languages: [
      {
        id: "python",
        requiredFunction: "join_two_strings",
        starterCode: `def join_two_strings(s1: str, s2: str) -> str:
    if not s1:
        return s2
    if not s2:
        return s1
    # TODO: implement
    return
`,
      },
      {
        id: "javascript",
        requiredFunction: "joinTwoStrings",
        starterCode: `function joinTwoStrings(s1, s2) {
  if (!s1) return s2;
  if (!s2) return s1;
  // TODO: implement
  return
}
`,
      },
    ],
    tests: [
      { input: ["aaaa", "bbbb"], expected: "aaaabbbb" },
      { input: [" abc", "def"], expected: " abcdef" },
      { input: ["a 8", "9"], expected: "a 89" },
      { input: ["", "xyz"], expected: "xyz" },
      { input: ["12 3", "4 56"], expected: "12 34 56" },
    ],
  },
  {
    id: "remove-all-alphanumerics",
    title: "Remove All Alphanumerics",
    category: "strings",
    description: "Return the string without any letters or numbers.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "remove_all_alphanumerics",
        starterCode: `def remove_all_alphanumerics(s: str) -> str:
    if not s:
        return s
    # TODO: implement
    return ""
`,
      },
      {
        id: "javascript",
        requiredFunction: "removeAllAlphanumerics",
        starterCode: `function removeAllAlphanumerics(s) {
  if (!s) return s;
  // TODO: implement
  return "";
}
`,
      },
    ],
    tests: [
      { input: ["a-!3@"], expected: "-!@" },
      { input: ["@'3/"], expected: "@'/" },
      { input: ["~!@#$%^&*()-_+"], expected: "~!@#$%^&*()-_+" },
      { input: ["Zz1"], expected: "" },
      { input: ["!@ 3-"], expected: "!@ -" },
    ],
  },
];
