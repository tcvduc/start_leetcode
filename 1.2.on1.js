/**
 * 1. Two Sum
 * + Input
 *   ---------0 1 2 3 4
 *   + nums: [1,2,3,4,5]
 *   + target: 5
 * + Output
 *   + ret: [1,2]
 * + Constrains Input
 *   + 2 <= nums.length <= 10^4
 *   + -10^9 <= nums[i] <= 10^9
 *   + -10^9 <= target <= 10^9
 * + Constrains Ouput
 *   + Only one valid answer exist
 * + Follow up: can you come up with an algorithm
 * that is less than O(n^2) time complexity
 *
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1 - 1; i++) {}
};

{
  // -----------0  1  2  3  4  5  6  7  8  9 10 11
  const nums = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1];
  const target = 11;
  console.log(twoSum(nums, target)); // [5,11]
}
