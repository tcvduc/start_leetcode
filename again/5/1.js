/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  for (let i = 0; i <= nums.length - 1 - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * ----------0 1 2  3
   * + nums = [2,7,11,15]
   * + target = 9
   * + map = {2->0, 7->1, 11->2, 15->3}
   *   + x = target - nums[i]
   *   + if map.has(x)
   *     return [map.get(x),i]
   *
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
