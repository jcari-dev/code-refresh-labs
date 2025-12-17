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
    {
    id: "return-last-element",
    title: "Return Last Element",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return the last element of a list. If the list is empty, return [].",
    languages: [
      {
        id: "python",
        requiredFunction: "return_last_element",
        starterCode: `def return_last_element(nums: list[int]) -> int | []:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnLastElement",
        starterCode: `function returnLastElement(nums) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      { input: [[2, 7, 11, 15]], expected: 15 },
      { input: [[3, 2, 4]], expected: 4 },
      { input: [[3, 0]], expected: 0 },
      { input: [[1]], expected: 1 },
      { input: [[]], expected: [] },
    ],
    timeLimitSeconds: 300,
  },
];
