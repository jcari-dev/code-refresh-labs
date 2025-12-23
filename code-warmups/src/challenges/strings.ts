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
  {
    id: "remove-all-non-alphanumerics",
    title: "Remove All Non-Alphanumerics",
    category: "strings",
    description: "Return the string containing only letters and numbers.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "remove_all_non_alphanumerics",
        starterCode: `def remove_all_non_alphanumerics(s: str) -> str:
    if not s:
        return s
    # TODO: implement
    return ""
`,
      },
      {
        id: "javascript",
        requiredFunction: "removeAllNonAlphanumerics",
        starterCode: `function removeAllNonAlphanumerics(s) {
  if (!s) return s;
  // TODO: implement
  return "";
}
`,
      },
    ],
    tests: [
      { input: ["a-!3@"], expected: "a3" },
      { input: ["@'3/"], expected: "3" },
      { input: ["~!@#$%^&*()-_+"], expected: "" },
      { input: ["Zz1"], expected: "Zz1" },
      { input: ["!@ 3-"], expected: "3" },
    ],
  },
  {
    id: "return-ascii-sum",
    title: "Return ASCII Sum",
    category: "strings",
    description:
      "Return the sum of the ASCII values of all characters in the string. Whitespace and control characters (like newline) count as characters.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "return_ascii_sum",
        starterCode: `def return_ascii_sum(s: str) -> int:
    if not s:
        return 0
    # TODO: iterate over each character (do not split)
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnAsciiSum",
        starterCode: `function returnAsciiSum(s) {
  if (!s) return 0;
  // TODO: iterate over each character (do not split)
  return 0;
}
`,
      },
    ],
    tests: [
      { input: ["a b"], expected: 227 }, // includes space (32)
      { input: ["123"], expected: 150 }, // '1','2','3' → 49,50,51
      { input: ["AaZ"], expected: 252 }, // mixed case
      { input: ["!@#"], expected: 132 },
      { input: ["A\n"], expected: 75 }, // newline counts (10)
    ],
  },
  {
    id: "return-string-uppercase",
    title: "Return String Uppercase",
    category: "strings",
    description: "Return the string entire in uppercase.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "return_string_uppercase",
        starterCode: `def return_string_uppercase(s: str) -> str:
    if not s:
        return s
    # TODO: return the string in uppercase
    return s
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnStringUppercase",
        starterCode: `function returnStringUppercase(s) {
  if (!s) return s;
  // TODO: return the string in uppercase
  return s;
}
`,
      },
    ],
    tests: [
      { input: ["a b"], expected: "A B" },
      { input: ["123"], expected: "123" },
      { input: ["AazZ"], expected: "AAZZ" },
      { input: ["!@#"], expected: "!@#" },
      { input: [""], expected: "" },
    ],
  },
  {
    id: "find-occurrences-of-x",
    title: "Find Occurrences of X",
    category: "strings",
    description: "Return the number of occurrences of x in the string.",
    paramNames: ["string", "x"],
    languages: [
      {
        id: "python",
        requiredFunction: "find_occurrences_of_x",
        starterCode: `def find_occurrences_of_x(string: str, x: str) -> int:
    # TODO: count occurrences of x in s
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "findOccurrencesOfX",
        starterCode: `function findOccurrencesOfX(str, x) {
  // TODO: count occurrences of x in s
  return 0;
}
`,
      },
    ],
    tests: [
      { input: ["aaa", "a"], expected: 3 },
      { input: ["1111111", "banana"], expected: 0 },
      { input: ["901 \n82u738 d912n", " "], expected: 2 },
      { input: ["!!!@#", "!"], expected: 3 },
      { input: ["", "a"], expected: 0 },
    ],
  },
  {
    id: "sort-characters-by-their-ascii-values",
    title: "Sort Characters by Their ASCII Values",
    category: "strings",
    description:
      "Sort the characters in the string by their ASCII values in ascending order and return the resulting string.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "sort_characters_by_their_ascii_values",
        starterCode: `def sort_characters_by_their_ascii_values(s: str) -> str:
    # TODO: sort characters by ASCII values
    return ""
`,
      },
      {
        id: "javascript",
        requiredFunction: "sortCharactersByTheirAsciiValues",
        starterCode: `function sortCharactersByTheirAsciiValues(s) {
  // TODO: sort characters by ASCII values
  return "";
}
`,
      },
    ],
    tests: [
      { input: [""], expected: "" }, // empty string
      { input: ["c b a"], expected: "  abc" }, // two spaces before letters
      { input: ["aaAa"], expected: "Aaaa" }, // uppercase before lowercase
      { input: ["a1!z"], expected: "!1az" }, // punctuation < digits < letters
      { input: [" \n"], expected: "\n " }, // newline (10) before space (32)
    ],
  },
  {
    id: "replace-x-with-y",
    title: "Replace X with Y",
    category: "strings",
    description:
      "Replace all occurrences of character x with character y in the string and return the resulting string.",
    paramNames: ["string", "x", "y"],
    languages: [
      {
        id: "python",
        requiredFunction: "replace_x_with_y",
        starterCode: `def replace_x_with_y(s: str, x: str, y: str) -> str:
    # TODO: replace all occurrences of x with y
    return ""
`,
      },
      {
        id: "javascript",
        requiredFunction: "replaceXWithY",
        starterCode: `function replaceXWithY(s, x, y) {
  // TODO: replace all occurrences of x with y
  return "";
}
`,
      },
    ],
    tests: [
      { input: ["aaa", "a", "b"], expected: "bbb" },
      { input: ["c b a", " ", "_"], expected: "c_b_a" },
      { input: ["aaAa", "A", "a"], expected: "aaaa" },
      { input: ["a1!z", "1", ""], expected: "a!z" },
      { input: [" \n", " ", "\t"], expected: "\t\n" },
    ],
  },
  {
    id: "return-ascii-string-value",
    title: "Return ASCII String Value",
    category: "strings",
    description:
      "Return the ASCII string representation of the input string. For example, 'a' becomes '97'.",
    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "return_ascii_string_value",
        starterCode: `def return_ascii_string_value(s: str) -> str:
    # TODO: return ASCII string representation of the input string
    return ""
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnAsciiStringValue",
        starterCode: `function returnAsciiStringValue(s) {
  // TODO: return ASCII string representation of the input string
  return "";
}
`,
      },
    ],
    tests: [
      { input: ["aaa"], expected: "979797" },
      { input: ["c b a"], expected: "9932983297" },
      { input: ["aaAa"], expected: "97976597" },
      { input: [""], expected: "" },
      { input: [" \n"], expected: "3210" },
    ],
  },
  {
    id: "replace-diacritics",
    title: "Remove Diacritics from String",
    category: "strings",

  description:
    "Remove all diacritic marks from the input string and return the cleaned string.",
  helpLink: { text: "diacritic", href: "https://en.wikipedia.org/wiki/Diacritic" },


    paramNames: ["string"],
    languages: [
      {
        id: "python",
        requiredFunction: "remove_diacritics",
        starterCode: `def remove_diacritics(s: str) -> str:
    # TODO: remove diacritic marks from the string
    return ""
`,
      },
      {
        id: "javascript",
        requiredFunction: "removeDiacritics",
        starterCode: `function removeDiacritics(s) {
  // TODO: remove diacritic marks from the string
  return "";
}
`,
      },
    ],
    tests: [
      { input: [""], expected: "" },
      { input: ["basic text"], expected: "basic text" },
      { input: ["happý smilé fríend"], expected: "happy smile friend" },
      { input: ["lôve jóy fäir pläy"], expected: "love joy fair play" },
      {
        input: ["áàâäãå ēéèêë īíìîï ōóòôö ūúùûü çñÿ"],
        expected: "aaaaaa eeeee iiiii ooooo uuuuu cny",
      },
    ],
  },
];
