import type { Challenge } from "../types";

export const listsChallenges: Challenge[] = [
  {
    id: "return-list-reversed",
    title: "Return List Reversed",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return list reversed. If the list is empty, return an empty list.",
    languages: [
      {
        id: "python",
        requiredFunction: "return_list_reversed",
        starterCode: `def return_list_reversed(nums: list[int]) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnListReversed",
        starterCode: `function returnListReversed(nums) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      { input: [[3, 2, 1]], expected: [1, 2, 3] },
      { input: [[3, 2, 2]], expected: [2, 2, 3] },
      { input: [[-1, -3, 2]], expected: [2, -3, -1] },
      { input: [[1, 2, 3]], expected: [3, 2, 1] },
      { input: [[]], expected: [] },
    ],
  },
  {
    id: "sort-list-ascending",
    title: "Sort List",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return list sorted in ascending order. If the list is empty, return an empty list.",
    languages: [
      {
        id: "python",
        requiredFunction: "sort_list_ascending",
        starterCode: `def sort_list_ascending(nums: list[int]) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "sortListAscending",
        starterCode: `function sortListAscending(nums) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      { input: [[3, 2, 1]], expected: [1, 2, 3] },
      { input: [[3, 2, 2]], expected: [2, 2, 3] },
      { input: [[-1, -3, 2]], expected: [-3, -1, 2] },
      { input: [[1, 2, 3]], expected: [1, 2, 3] },
      { input: [[]], expected: [] },
    ],
  },
  {
    id: "find-minimum-and-maximum-value-in-list",
    title: "Find Minimum and Maximum Value in List",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return the minimum and maximum values in the list in an array / list. If the list is empty, return [].",
    languages: [
      {
        id: "python",
        requiredFunction: "find_min_max_value_in_list",
        starterCode: `def find_min_max_value_in_list(nums: list[int]) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "findMinMaxValueInList",
        starterCode: `function findMinMaxValueInList(nums) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      { input: [[2, 7, 11, 15]], expected: [2, 15] },
      { input: [[3, 2, 4]], expected: [2, 4] },
      { input: [[3, 3]], expected: [3, 3] },
      { input: [[1, 2, 3]], expected: [1, 3] },
      { input: [[]], expected: [] },
    ],
  },
  {
    id: "two-sum-indices",
    title: "Two Sum Indices",
    category: "lists",
    paramNames: ["nums", "target"],
    description:
      "Return the indices of the first pair (left to right) of numbers that add up to target. If none, return [-1, -1].",
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
  },
  {
    id: "return-last-element",
    title: "Return Last Element",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return the last element of a list in an array / list. If the list is empty, return [].",
    languages: [
      {
        id: "python",
        requiredFunction: "return_last_element",
        starterCode: `def return_last_element(nums: list[int]) -> list[int]:
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
      { input: [[2, 7, 11, 15]], expected: [15] },
      { input: [[3, 2, 4]], expected: [4] },
      { input: [[3, 0]], expected: [0] },
      { input: [[1]], expected: [1] },
      { input: [[]], expected: [] },
    ],
  },
  {
    id: "return-most-frequent-element",
    title: "Return Most Frequent Element",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return the most frequent element. If the list is empty return []. In case of a tie, return the element that appears first in the list.",
    languages: [
      {
        id: "python",
        requiredFunction: "return_most_frequent_element",
        starterCode: `def return_most_frequent_element(nums: list[int]) -> int:
    # TODO: implement
    return [] 
`,
      },
      {
        id: "javascript",
        requiredFunction: "returnMostFrequentElement",
        starterCode: `function returnMostFrequentElement(nums) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      { input: [[1, 1, 2, 2, 2, 3]], expected: 2 },
      { input: [[1, 1, 1]], expected: 1 },
      { input: [[3, 0]], expected: 3 },
      { input: [[1]], expected: 1 },
      { input: [[]], expected: [] },
    ],
  },
  {
    id: "merge-two-lists",
    title: "Merge Two Lists",
    category: "lists",
    paramNames: ["nums1", "nums2"],
    description:
      "Return a new list that is the merging of the two input lists.",
    languages: [
      {
        id: "python",
        requiredFunction: "merge_two_lists",
        starterCode: `def merge_two_lists(nums1: list[int], nums2: list[int]) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "mergeTwoLists",
        starterCode: `function mergeTwoLists(nums1, nums2) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      {
        input: [
          [2, 7, 11, 15],
          [1, 2, 3],
        ],
        expected: [2, 7, 11, 15, 1, 2, 3],
      },
      {
        input: [
          [3, 2, 4],
          [5, 6],
        ],
        expected: [3, 2, 4, 5, 6],
      },
      { input: [[3, 0], []], expected: [3, 0] },
      { input: [[1], [2]], expected: [1, 2] },
      { input: [[], []], expected: [] },
    ],
  },
  {
    id: "merge-two-lists-ii",
    title: "Merge Two Lists II (Sorted)",
    category: "lists",
    paramNames: ["nums1", "nums2"],
    description:
      "Return a new sorted list formed by merging two sorted input lists.",
    languages: [
      {
        id: "python",
        requiredFunction: "merge_two_lists",
        starterCode: `def merge_two_lists(nums1: list[int], nums2: list[int]) -> list[int]:
    # TODO: merge and return a sorted list
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "mergeTwoLists",
        starterCode: `function mergeTwoLists(nums1, nums2) {
  // TODO: merge and return a sorted list
  return [];
}
`,
      },
    ],
    tests: [
      {
        input: [
          [2, 7, 11, 15],
          [1, 2, 3],
        ],
        expected: [1, 2, 2, 3, 7, 11, 15],
      },
      {
        input: [
          [2, 3, 4],
          [5, 6],
        ],
        expected: [2, 3, 4, 5, 6],
      },
      {
        input: [[0, 3], []],
        expected: [0, 3],
      },
      {
        input: [[1], [2]],
        expected: [1, 2],
      },
      {
        input: [[], []],
        expected: [],
      },
    ],
  },

  {
    id: "remove-index-value-from-list",
    title: "Remove Index Value From List",
    category: "lists",
    paramNames: ["nums", "index"],
    description:
      "Return a new list with the element at the specified index removed. If index is -1 remove the last element. If index is out of bounds, return the original list. If theres no index to remove, return the original list.",
    languages: [
      {
        id: "python",
        requiredFunction: "remove_index_value_from_list",
        starterCode: `def remove_index_value_from_list(nums: list[int], index: int) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "removeIndexValueFromList",
        starterCode: `function removeIndexValueFromList(nums, index) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      {
        input: [[2, 7, 11, 15], 1],
        expected: [2, 11, 15],
      },
      {
        input: [[3, 2, 4], 4],
        expected: [3, 2, 4],
      },
      { input: [[3, 0], 1], expected: [3] },
      { input: [[1], 0], expected: [] },
      { input: [[1, 2, 3], -1], expected: [1, 2] },
    ],
  },
  {
    id: "split-list-in-half-i",
    title: "Split List in Half I",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return the list split into two halves. If the length is odd, the second half contains the extra element.",
    languages: [
      {
        id: "python",
        requiredFunction: "split_list_in_half",
        starterCode: `def split_list_in_half(nums: list[int]) -> tuple[list[int], list[int]]:
    # TODO: implement
    return [], []
`,
      },
      {
        id: "javascript",
        requiredFunction: "splitListInHalf",
        starterCode: `function splitListInHalf(nums) {
  // TODO: implement
  return [[], []];
}
`,
      },
    ],
    tests: [
      {
        input: [[1, 2, 3, 4]],
        expected: [
          [1, 2],
          [3, 4],
        ],
      },
      { input: [[1, 2, 3]], expected: [[1], [2, 3]] },
      { input: [[1]], expected: [[], [1]] },
      { input: [[]], expected: [[], []] },
      {
        input: [[9, 8, 7, 6, 5]],
        expected: [
          [9, 8],
          [7, 6, 5],
        ],
      },
    ],
  },
  {
    id: "split-list-in-half-ii",
    title: "Split List in Half II",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return two halves of the list. If the length is odd, split the middle value in half and place one half at the end of the first list and the other at the start of the second list.",
    languages: [
      {
        id: "python",
        requiredFunction: "split_list_in_half_interpolated",
        starterCode: `def split_list_in_half_interpolated(nums: list[int]) -> tuple[list[float], list[float]]:
    # TODO: implement
    return [], []
`,
      },
      {
        id: "javascript",
        requiredFunction: "splitListInHalfInterpolated",
        starterCode: `function splitListInHalfInterpolated(nums) {
  // TODO: implement
  return [[], []];
}
`,
      },
    ],
    tests: [
      {
        input: [[1, 3, 2]],
        expected: [
          [1, 1.5],
          [1.5, 2],
        ],
      },
      { input: [[5]], expected: [[2.5], [2.5]] },
      {
        input: [[1, 2, 3, 4]],
        expected: [
          [1, 2],
          [3, 4],
        ],
      },
      { input: [[]], expected: [[], []] },
      {
        input: [[-1, 3, -1]],
        expected: [
          [-1, 1.5],
          [1.5, -1],
        ],
      },
    ],
  },
  {
    id: "sum-two-lists",
    title: "Sum Two Lists",
    category: "lists",
    paramNames: ["a", "b"],
    description:
      "Return a single list where each element is the sum of the elements at the same index in both lists.",
    languages: [
      {
        id: "python",
        requiredFunction: "sum_two_lists",
        starterCode: `def sum_two_lists(a: list[int], b: list[int]) -> list[int]:
    # TODO: implement
    return []
`,
      },
      {
        id: "javascript",
        requiredFunction: "sumTwoLists",
        starterCode: `function sumTwoLists(a, b) {
  // TODO: implement
  return [];
}
`,
      },
    ],
    tests: [
      {
        input: [
          [1, 2],
          [3, 4],
        ],
        expected: [4, 6],
      },
      {
        input: [
          [0, 0],
          [0, 0],
        ],
        expected: [0, 0],
      },
      {
        input: [
          [-1, 2],
          [1, -2],
        ],
        expected: [0, 0],
      },
      { input: [[5], [7]], expected: [12] },
      { input: [[], []], expected: [] },
    ],
  },
  {
    id: "check-if-list-is-sorted",
    title: "Check If List Is Sorted",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return 1 if the list is sorted (in ascending order), if not return 0. An empty list is considered sorted.",
    languages: [
      {
        id: "python",
        requiredFunction: "check_if_list_is_sorted",
        starterCode: `def check_if_list_is_sorted(nums: list[int]) -> int:
    # TODO: implement
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "checkIfListIsSorted",
        starterCode: `function checkIfListIsSorted(nums) {
  // TODO: implement
  return 0;
}
`,
      },
    ],
    tests: [
      { input: [[]], expected: 1 },
      { input: [[5]], expected: 1 },
      { input: [[1, 1, 1, 1, 1]], expected: 1 },
      { input: [[-5, -2, 0, 0, 3]], expected: 1 },
      { input: [[1, 3, 2, 4]], expected: 0 },
    ],
  },
  {
    id: "check-if-list-is-sorted-II",
    title: "Check If List Is Sorted II",
    category: "lists",
    paramNames: ["nums"],
    description:
      "Return 1 if the list is sorted in ascending order, -1 if it is sorted in descending order, and 0 if it is not sorted. An empty list is considered sorted.",
    languages: [
      {
        id: "python",
        requiredFunction: "check_if_list_is_sorted",
        starterCode: `def check_if_list_is_sorted(nums: list[int]) -> int:
    # TODO: implement
    return 0
`,
      },
      {
        id: "javascript",
        requiredFunction: "checkIfListIsSorted",
        starterCode: `function checkIfListIsSorted(nums) {
  // TODO: implement
  return 0;
}
`,
      },
    ],
    tests: [
      { input: [[]], expected: 1 },
      { input: [[5]], expected: 1 },
      { input: [[1, 1, 1, 1]], expected: 1 },
      { input: [[-5, -2, 0, 0, 3]], expected: 1 },
      { input: [[9, 7, 7, 2, -1]], expected: -1 },
      { input: [[3, 2, 4, 1]], expected: 0 },
    ],
  },
];
