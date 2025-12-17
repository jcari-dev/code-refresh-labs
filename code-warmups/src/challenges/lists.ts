import type { Challenge } from "../types";

export const listsChallenges: Challenge[] = [
  {
    id: "two-sum-indices",
    title: "Two Sum Indices",
    category: "lists",
    paramNames: ["nums", "target"],
    description:
      "Return the indices of the first pair of numbers that add up to target. If none, return [-1, -1].",
    languages: [
      {
        id: "python",
        requiredFunction: "two_sum_indices",
        starterCode: `def two_sum_indices(nums: list[int], target: int) -> list[int]:
    # TODO: implement
    return [-1, -1]
`,
      },
      {
        id: "javascript",
        requiredFunction: "twoSumIndices",
        starterCode: `function twoSumIndices(nums, target) {
  // TODO: implement
  return [-1, -1];
}
`,
      },
    ],
    tests: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[3, 3], 6], expected: [0, 1] },
      { input: [[1, 2, 3], 7], expected: [-1, -1] },
      { input: [[], 0], expected: [-1, -1] },
    ],
    timeLimitSeconds: 300,
  },
];
