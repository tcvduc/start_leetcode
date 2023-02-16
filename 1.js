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
 * -- ------------------------------
 * -- Solving - O(n^2)
 * -- ------------------------------
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
 *
 *
 * -- ------------------------------
 * -- Solving - O(n)
 * -- ------------------------------
 * + Input
 *   ---------0 1 2 3 4
 *   + nums: [1,2,3,4,5]
 *   + target: 5
 * + Output
 *   + ret: [1,2]
 *
 * + nums.length: 5
 * + i: 0 -> 4
 *   + i: 0
 *     + 1: i + 1: ip1
 *     + 2: i + 2: ip2
 *     + 3: i + 3: ip3
 *     + 4: i + 4: ip4
 *       + if(nums[i] + ip1 === target){
 *         return [i, i + 1]
 *       }
 *
 *       + if(nums[i] + ip2 === target){
 *         return [i, i + 2]
 *       }
 *
 *       + if(nums[i] + ip3 === target){
 *         return [i, i + 3]
 *       }
 *
 *       + if(nums[i] + ip4 === target){
 *         return [i, i + 4]
 *       }
 *
 *   + nl = nums.length: 5
 *   + i: 1
 *     + 2: i + 1: ip1
 *     + 3: i + 2: ip2
 *     + 4: i + 3: ip3
 *     + 5: i + 4: ip4
 *
 *   + i: 1
 *     + 2: i + 1: ip1
 *       + 1: 5 - 4
 *       + 1: nums.length - (nums.length - i)
 *     + 3: i + 2: ip2
 *       + nums.length - (nums.length - i)
 *         + 5 - (5 - 1)
 *         + 5 - 4
 *         + 1
 *       + nums.length - i = 5 - 1 = 4
 *       + 2: 5 - 3
 *       + 2: nums.length - i - 2
 *     + 4: i + 3: ip3
 *     + 5: i + 4: ip4 = nums.length // error
 *       + nums.length = 5
 *       + exist nums[nums.length - 1]
 *       + don't exist nums[nums.length]
 *
 *       + if(nums[i] + ip1 === target){
 *         return [i, i + 1]
 *       }
 *
 *       + if(nums[i] + ip2 === target){
 *         return [i, i + 2]
 *       }
 *
 *       + if(nums[i] + ip3 === target){
 *         return [i, i + 3]
 *       }
 *
 *       + if(nums[i] + ip4 === target){
 *         return [i, i + 4]
 *       }
 *
 *
 *
 *
 *   + i: 2
 *     + 3: i + 1: ip1
 *     + 4: i + 2: ip2
 *     + 5: i + 3: ip3
 *     + 6: i + 4: ip4
 *
 *       + if(nums[i] + ip1 === target){
 *         return [i, i + 1]
 *       }
 *
 *       + if(nums[i] + ip2 === target){
 *         return [i, i + 2]
 *       }
 *
 *       + if(nums[i] + ip3 === target){
 *         return [i, i + 3]
 *       }
 *
 *       + if(nums[i] + ip4 === target){
 *         return [i, i + 4]
 *       }
 *
 */

function on2() {
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
}

function on1() {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length - 1; ++i) {
      const ip1 = i + 1;
      const ip2 = i + 2;
      const ip3 = i + 3;
      const ip4 = i + 4;

      if (nums[i] + nums[ip1] === target) {
        return [i, i + 1];
      }

      if (nums[i] + nums[ip2] === target) {
        return [i, i + 2];
      }

      if (nums[i] + nums[ip3] === target) {
        return [i, i + 3];
      }

      if (nums[i] + nums[ip4] === target) {
        return [i, i + 4];
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
}

{
  //   on2();
  on1();
}
