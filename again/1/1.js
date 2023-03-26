/**
 * 1. Two Sum
 * Given an array of integers "nums"
 * and an integer "target", return indices
 * of the two numbers such that they add up
 * to "target".
 *
 * You may assume that each input would have
 * "exactly one solution", and you may not
 * use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1
 * ---------0 1 2  3
 * + nums: [2,7,11,15]
 * + target: 9
 * + output: [0,1]
 *   + nums[0] + nums[1]
 *   + 2 + 7
 *   + 9
 *
 * Example 2
 * ---------0 1 2
 * + nums: [3,2,4]
 * + target: 6
 * + output: [1,2]
 *
 * Constraints
 * + 2 <= nums.length <= 10^4
 * + -10^9 <= nums[i] <= 10^9
 * + -10^9 <= target <= 10^9
 * + Only one valid answer exist
 *
 * Follow Up: Can you come up with an algorithm
 * that is less than O(n^2) time complexity?
 *
 *
 * Understand The Problem
 * ---------0 1 2 3 4
 * + nums: [1,2,3,4,5]
 * + target: 9
 * + ret: [3,4]
 *
 * + i: 0 -> 4
 *   + j: i + 1
 *     + if nums[i] + nums[j] = target
 *       return [i,j]
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

function test1() {
  /**
   * ---------0 1 2 3 4
   * + nums: [1,2,3,4,5]
   * + target: 9
   * + result: [3,4]
   *
   */
  const nums = [1, 2, 3, 4, 5];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // [3,4]
}

{
  test1();
}
