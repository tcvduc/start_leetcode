/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * ---------0 1 2 3 4
   * + nums: [1,2,3,4,5]
   * + target: 9
   * + ret: [3,4]
   * Equation
   * nums[i] + x = target
   * x = target - nums[i]
   */

  const map = new Map();
  for (let i = 0; i <= nums.length - 1; ++i) {
    const x = target - nums[i];

    if (map.has(x)) {
      return [map.get(x), i];
    }

    map.set(nums[i], i);
  }
};

const nums = [1, 2, 3, 4, 5];
const target = 9;
const ret = twoSum(nums, target);
console.log(ret);
