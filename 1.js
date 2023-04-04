/**
 * 1. Two sum
 * - Given an array of integers "nums"
 * and an integer "target", return indices
 * of the two numbers such that they add up
 * to target.
 * - You may assume that each input would
 * have exactly one solution, and you may not
 * use the same element twice.
 * - You can return the answer in any order
 *
 * - Example 1
 * + nums = [2,7,11,15]
 * + target = 9
 * + output = [0,1]
 * + explanation: because nums[0] + nums[1] = target
 * so we return [0,1]
 *
 * - Example 2
 * + nums = [3,2,4]
 * + target = 6
 * + output = [1,2]
 * + explanation: because nums[1] + nums[2] = target
 * so we return [1,2]
 *
 * - Example 3
 * + nums = [3,3]
 * + target = 6
 * + output = [0,1]
 * + explanation: because nums[0] + nums[1] = target
 * so we return [0,1]
 *
 * - Constraints
 * + 2 <= nums.length <= 10^4
 * + -10^9 <= nums[i] <= 10^9
 * + -10^9 <= target <= 10^9
 * + Only one valid answer exist
 *
 * - Follow up: can you come up with an
 * algorithm that is less than O(n^2) time
 * complexity?
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * ----------0 1 2 3 4
   * + nums = [1,2,3,4,5]
   * + target = 4
   * + output = [0,2]
   *
   * + i: 0 -> 4
   *   + x = target - nums[i]
   *   + if map.has(x)
   *     + return [map.get(x),i]
   *   + map.set(nums[i],i)
   *
   */
  const map = new Map();

  for (let i = 0; i <= nums.length - 1; ++i) {
    const x = target - nums[i];

    if (map.has(x)) {
      return [map.get(x), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

function test1() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result);
}

function test2() {
  const nums = [3, 2, 4];
  const target = 6;
  const result = twoSum(nums, target);
  console.log(result);
}

function test3() {
  const nums = [3, 3];
  const target = 6;
  const result = twoSum(nums, target);
  console.log(result);
}

{
  test1();
  test2();
  test3();
}
