/**
 * 15. Three Sum
 * - Given an array integer nums, return all triplet
 * [nums[i],nums[j],nums[k]] such that i!=j, i!=k, j!=k
 * and nums[i] + nums[j] + nums[k] == 0
 * - Notice that the solution set must not contains duplicate
 * triplets
 *
 * - Example 1
 * + nums = [-1,0,1,2,-1,-4]
 * + result = [[-1,-1,2],[-1,0,1]]
 * + explain
 *   -----------0 1 2 3  4  5
 *   + nums = [-1,0,1,2,-1,-4]
 *     + nums[0] + nums[1] + nums[2] = 0
 *       + result = [[nums[0],nums[1],nums[2]]]
 *     + nums[1] + nums[2] + nums[4] = 0
 *       + result = [
 *                   [nums[0],nums[1],nums[2]],
 *                   [nums[1],nums[2],nums[4]]
 *                  ]
 *     + nums[0] + nums[3] + nums[4] = 0
 *       + result = [
 *                   [nums[0],nums[1],nums[2]],
 *                   [nums[1],nums[2],nums[4]],
 *                   [nums[0],nums[3],nums[4]],
 *                  ]
 *      + result = [[-1,0,1],[0,1,-1],[-1,2,-1]]
 *      + result = [[-1,0,1],[-1,0,1],[-1,2,-1]]
 *      + result = [[-1,0,1],[-1,2,-1]]
 *
 * - example 2
 * + nums = [0,1,1]
 * + result = []
 *
 * - example 3
 * + nums = [0,0,0]
 * + result = [[0,0,0]]
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function getNumberLength(n) {
  /**
   * + n = 1234
   * + result = 4
   *
   * + i = 0
   *   + 1234 % 10 = 4
   *   + 1234 - 4 = 1230
   *   + 1230 / 10 = 123
   *   + length = 1
   * + i = 1
   *   + 123 % 10 = 3
   *   + 123 - 3 = 120
   *   + 120 / 10 = 12
   *   + length = 2
   * + i = 2
   *   + 12 % 10 = 2
   *   + 12 - 2 = 10
   *   + 10 / 10 = 1
   *   + length = 3
   * + i = 3
   *   + 1 % 10 = 1
   *   + 1 - 1 = 0
   *   + 0 / 10 = 0
   *   + length = 4
   *
   */
  if (n >= 0) {
    if (n >= 0 && n <= 9) return 1;

    let temporary = n;
    let length = 0;

    while (temporary !== 0) {
      const v1 = temporary % 10;
      const v2 = temporary - v1;
      const v3 = v2 / 10;
      temporary = v3;
      length++;
    }

    return length;
  }

  if (n < 0) {
    let absN = Math.abs(n);

    if (n >= 1 && n <= 9) return 2;

    let temporary = absN;
    let length = 1;

    while (temporary !== 0) {
      const v1 = temporary % 10;
      const v2 = temporary - v1;
      const v3 = v2 / 10;
      temporary = v3;
      length++;
    }

    return length;
  }
}

/**
 *
 * @param {Array} a
 */
function logArrayWithIndex(a) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + result
   * -----0 1 2 3 4
   * a = [1,2,3,4,5]
   *
   */
  let indexBar = "-----";
  let arrayBar = "a = [";

  for (let i = 0; i <= a.length - 1; ++i) {
    if (i === a.length - 1) {
      indexBar += i;
      arrayBar += a[i] + "]";
      break;
    }
    indexBar += i + " ";
    arrayBar += a[i] + ",";
  }

  console.log(indexBar);
  console.log(arrayBar);
}

logArrayWithIndex([1, 2, 3, 4, 5, 123, 321, 12, 23, 34]);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ijk = [];
  console.log(nums);
  for (let i = 0; i <= nums.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= nums.length - 1 - 1; ++j) {
      for (let k = j + 1; k <= nums.length - 1; ++k) {
        ijk.push([i, j, k]);
      }
    }
  }

  //   console.log(ijk);
};

function test1() {
  const nums = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(nums);
  console.log(result);
}

{
  test1();
}
