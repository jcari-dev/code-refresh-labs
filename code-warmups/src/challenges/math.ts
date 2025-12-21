import type { Challenge } from "../types";

export const mathChallenges: Challenge[] = [
  {
    id: "sum-multiples",
    title: "Sum of Multiples",
    category: "math",
    description:
      "Return the sum of all numbers from 1 to n (inclusive) that are divisible by 3 or 5.",
    paramNames: ["n"],
    languages: [
      {
        id: "python",
        requiredFunction: "sum_multiples",
        starterCode: `def sum_multiples(n: int) -> int:
    if n < 1:
        return 0
    # TODO: implement
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "sumMultiples",
        starterCode: `function sumMultiples(n) {
  if (n < 1) return 0;
  // TODO: implement
  return 0;
}
`,
      },
    ],
    tests: [
      { input: [1], expected: 0 },
      { input: [5], expected: 8 }, // 3 + 5
      { input: [10], expected: 33 }, // 3 + 5 + 6 + 9 + 10
      { input: [15], expected: 60 }, // add 12 + 15
      { input: [0], expected: 0 },
    ],
  },
  {
    id: "return-square-root",
    title: "Return Square Root",
    category: "math",
    description:
      "Return the square root of n rounded to 2 decimals. If n is negative, return -1.",
    paramNames: ["n"],
    languages: [
      {
        id: "python",
        requiredFunction: "return_square_root",
        starterCode: `def return_square_root(n: int) -> float:
    # TODO: implement
    return -1
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnSquareRoot",
        starterCode: `function returnSquareRoot(n) {
  // TODO: implement
  return -1;
}
`,
      },
    ],
    tests: [
      { input: [7], expected: 2.65 },
      { input: [200], expected: 14.14 },
      { input: [-1], expected: -1 },
      { input: [340], expected: 18.44 },
      { input: [273], expected: 16.52 },
    ],
  },
  {
    id: "return-absolute-value-of-list-sum",
    title: "Return Absolute Value of List Sum",
    category: "math",
    description:
      "Return the absolute value of the sum of all numbers in the list.",
    paramNames: ["nums"],
    languages: [
      {
        id: "python",
        requiredFunction: "absolute_value_of_list_sum",
        starterCode: `def absolute_value_of_list_sum(nums: list[int]) -> int:
    # TODO: implement
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "absoluteValueOfListSum",
        starterCode: `function absoluteValueOfListSum(nums) {
  // TODO: implement
  return 0;
}
`,
      },
    ],
    tests: [
      { input: [[1, -2, 3]], expected: 2 },
      { input: [[-5, -5]], expected: 10 },
      { input: [[10, -3, -4]], expected: 3 },
      { input: [[0, 0, 0]], expected: 0 },
      { input: [[7]], expected: 7 },
    ],
  },
  {
    id: "return-list-of-divisors",
    title: "Return List of Divisors",
    category: "math",
    description: "Return a list of all divisors of n (excluding n itself) and in ascending order (small to large).",
    paramNames: ["n"],
    languages: [
      {
        id: "python",
        requiredFunction: "return_list_of_divisors",
        starterCode: `def return_list_of_divisors(n: int) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnListOfDivisors",
        starterCode: `function returnListOfDivisors(n) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      { input: [1], expected: [] },
      { input: [2], expected: [1] },
      { input: [13], expected: [1] },
      { input: [16], expected: [1, 2, 4, 8] },
      { input: [28], expected: [1, 2, 4, 7, 14] },
    ],
  },
    {
    id: "return-string-sum",
    title: "Return String Sum",
    category: "math",
    description: "Return the sum of two numbers represented as strings. The result should also be returned as an integer.",
    paramNames: ["str1", "str2"],
    languages: [
      {
        id: "python",
        requiredFunction: "return_string_sum",
        starterCode: `def return_string_sum(str1: str, str2: str) -> int:
    # TODO: implement
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnStringSum",
        starterCode: `function returnStringSum(str1, str2) {
  // TODO: implement
  return 0;
}
`,
      },
    ],
    tests: [
      { input: ["1", "2"], expected: 3 },
      { input: ["10", "20"], expected: 30 },
      { input: ["-100", "200"], expected: 100 },
      { input: ["0", "7"], expected: 7 },
      { input: ["0", "0"], expected: 0 },
    ],
  },
];
