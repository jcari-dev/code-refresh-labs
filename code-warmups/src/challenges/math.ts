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
];
