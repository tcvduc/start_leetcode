/**
 * 15. Three Sum
 * - Given an array integer nums, return all triplet
 * [nums[i],nums[j],nums[k]] such that i!=j, i!=k, j!=k
 * and nums[i] + nums[j] + nums[k] == 0
 * - Notice that the solution set must not contains duplicate
 * triplets
 *
 *
 */

/**
 *
 * @param {Array} a1d
 * @param {Number} pos
 *
 */
function array1dRemoveElementAtPos(a1d, pos) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + pos = 2
   * ------------0 1 2 3
   * + result = [1,2,4,5]
   *
   */
  const result = new Array(a1d.length - 1);

  for (let i = pos - 1; i >= 0; --i) {
    result[i] = a1d[i];
  }

  for (let j = pos; j <= result.length - 1; j++) {
    result[j] = a1d[j + 1];
  }

  return result;
}

/**
 *
 * @param {Array} a1
 * @param {Array} a2
 *
 */
function isArrayTheSame(a1, a2) {
  if (a1.length !== a2.length) return false;

  let flag = true;

  for (let i = a1.length - 1; i >= 0; --i) {
    if (a1[i] !== a2[i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Number[]} nums
 */
function threeSum(nums) {
  let result = [];

  for (let i = 0; i <= nums.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= nums.length - 1 - 1; ++j) {
      for (let k = j + 1; k <= nums.length - 1; ++k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const ijk = [nums[i], nums[j], nums[k]];
          ijk.sort((a, b) => a - b);
          result.push(ijk);
        }
      }
    }
  }

  for (let i = 0; i <= result.length - 1 - 1; ++i) {
    const ai = result[i];

    for (let j = i + 1; j <= result.length - 1; ++j) {
      const aj = result[j];
      const flag = isArrayTheSame(ai, aj);

      if (flag) {
        const pos = j;
        result = array1dRemoveElementAtPos(result, pos);
      }
    }
  }

  return result;
}

function test1() {
  const nums = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(nums);
  console.log(result);
}

{
  test1();
}
