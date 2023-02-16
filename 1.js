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
 * -- ---------------
 * -- Solving
 * -- ---------------
 * + Input
 *   ---------0 1 2 3 4
 *   + nums: [1,2,3,4,5]
 *   + target: 5
 * + Output
 *   + ret: [1,2]
 *
 * + nums.length: 4
 * + i: 0 -> 3
 * + j: i -> 4
 *   + if nums[i] + nums[j] === target
 *     + return [i,j]
 *
 * + O(n^2)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1 - 1; ++i) {
    for (let j = i + 1; j <= nums.length - 1; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

{
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSum(nums, target)); // [0,1]
}

{
  const nums = [3, 2, 4];
  const target = 6;
  console.log(twoSum(nums, target)); // [1,2]
}

{
  const nums = [3, 3];
  const target = 6;
  console.log(twoSum(nums, target)); // [0,1]
}
