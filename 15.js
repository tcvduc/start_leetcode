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
 * @param {Number} n
 */
function generateSpaces(n) {
  let result = "";

  for (let i = n; i >= 1; --i) {
    result += " ";
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function advanceLogArray(a) {
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
    const nLength = getNumberLength(a[i]);

    if (i === a.length - 1) {
      indexBar += i;
      arrayBar += a[i] + "]";
      break;
    }

    indexBar += i + generateSpaces(nLength);
    arrayBar += a[i] + ",";
  }

  console.log(indexBar);
  console.log(arrayBar);
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function arrayMoveLeftOnePosition(a, pos) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + pos = 2
   * ------------0 1 2 3
   * + result = [1,2,4,5]
   *
   */
  const result = new Array(a.length - 1);

  for (let i = pos - 1; i >= 0; --i) {
    result[i] = a[i];
  }

  for (let j = pos; j <= result.length - 1; ++j) {
    result[j] = a[j + 1];
  }

  return result;
}

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

  for (let i = pos; i <= result.length - 1; ++i) {
    result[i] = a1d[i + 1];
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function array1DRemoveDuplicateElement(a) {
  /**
   * -------0 1 2 3 4 5
   * + a = [1,2,3,4,4,4]
   *
   * ------------0 1 2 3
   * + result = [1,2,3,4]
   *
   * ------------------------
   * -------0 1 2 3 4 5
   * + a = [1,2,3,4,4,4]
   * + i = 3, j = 4
   *   + a = [1,2,3,4,4]
   *
   *
   */
  let result = a;

  for (let i = 0; i <= result.length - 1 - 1; ++i) {
    for (let j = i + 1; j <= result.length - 1; j++) {
      if (result[i] === result[j]) {
        const pos = i;
        result = arrayMoveLeftOnePosition(result, pos);
        i--;
      }
    }
  }

  return result.sort((a, b) => a - b);
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
 * @param {Array[]} a2d
 */
function array2dRemoveDuplicateElement(a2d) {
  /**
   * + a2d:    [[1,2,3],[4,5,6],[1,2,3]]
   * + result: [[1,2,3],[4,5,6]]
   *
   */

  let temporary = a2d;

  for (let i = 0; i <= temporary.length - 1 - 1; ++i) {
    const ai = temporary[i];

    for (let j = i + 1; j <= temporary.length - 1; ++j) {
      const aj = temporary[j];
      const isArrayDuplicate = isArrayTheSame(ai, aj);

      if (isArrayDuplicate) {
        const pos = j;
        temporary = array1dRemoveElementAtPos(temporary, pos);
        i--;
        break;
      }
    }
  }

  return temporary;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  advanceLogArray(nums);

  const result = [];

  for (let i = 0; i <= nums.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= nums.length - 1 - 1; ++j) {
      for (let k = j + 1; k <= nums.length - 1; ++k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const ninjnk = [nums[i], nums[j], nums[k]];
          ninjnk.sort((a, b) => a - b);
          result.push(ninjnk);
        }
      }
    }
  }

  console.log(result);
};

function test1() {
  const nums = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(nums);
  console.log(result);
}

{
  test1();
}
