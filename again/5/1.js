/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i <= nums.length - 1; ++i) {
    const x = target - nums[i];

    if (map.has(x)) {
      return [map.get(x), i];
    }

    map.set(nums[i], i);
  }

  console.log(map);
};

const nums = [1, 2, 3, 4, 5];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
