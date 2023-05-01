/**
 * 15. Three Sum
 * - Given an integer array nums, returns
 * all triplets [nums[i],nums[j],nums[k]]
 * such that i!=j, i!=k, j!=k and
 * nums[i] + nums[j] + nums[k] = 0
 * - Notice that the solution set must not
 * contains duplicate triplet
 *
 * - Example 1
 * -------------0 1 2 3 4  5
 * + nums   = [-1,0,1,2,-1,-4]
 * + result = [[-1,0,1],[-1,2,-1]]
 *
 */

/**
 *
 * @param {Array} a
 * @param {Number} element
 *
 */
function push(a, element) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + element = 6
   * + result = [1,2,3,4,5,6]
   *
   */
  const result = new Array(a.length + 1);
  for (let i = result.length - 1 - 1; i >= 0; --i) result[i] = a[i];
  result[result.length - 1] = element;
  return result;
}

/**
 *
 * @param {Array} a
 */
function advanceLogArray(a) {
  /**
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

    arrayBar += a[i] + ",";

    if (a[i] >= 0) {
      indexBar += i + " ";
    } else {
      indexBar += i + "  ";
    }
  }
  console.log(indexBar);
  console.log(arrayBar);
}

/**
 *
 * @param {Array} a1
 * @param {Array} a2
 *
 */
function isTwoArray1dTheSame(a1, a2) {
  /**
   * O(n^2) + O(n)
   *
   */
  if (a1.length !== a2.length) return false;
  const map = new Map();
  let flag = true;

  for (let i = 0; i <= a2.length - 1; ++i) {
    map.set(a2[i], i);
  }

  for (let j = 0; j <= a1.length - 1; ++j) {
    if (!map.has(a1[j])) {
      flag = false;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 *
 */
function array1dRemoveElementAtPos(a, pos) {
  const result = new Array(a.length - 1);
  for (let i = pos - 1; i >= 0; i--) result[i] = a[i];
  for (let j = result.length - 1; j >= pos; j--) result[j] = a[j + 1];
  return result;
}

/**
 *
 * @param {Array[]} a
 */
function onboardRemoveDuplicateElementArray2d(a) {
  for (let i = 0; i <= a.length - 1 - 1; i++) {
    const ai = a[i];
    for (let j = i + 1; j <= a.length - 1; j++) {
      const aj = a[j];
      const flag = isTwoArray1dTheSame(ai, aj);

      if (flag) {
        // here
        const pos = j;
        a = array1dRemoveElementAtPos(a, pos);
        i--;
        break;
      }
    }
  }

  return a;
}

/**
 *
 * @param {Array} a
 */
function threeSum(a) {
  let result = [];

  // for (let i = a.length - 1; i >= 2; i--) {
  //   for (let j = i - 1; j >= 1; --j) {
  //     for (let k = j - 1; k >= 0; --k) {
  //       if (a[i] + a[j] + a[k] === 0) {
  //         result = push(result, [a[i], a[j], a[k]]);
  //       }
  //     }
  //   }
  // }

  for (let i = 0; i <= a.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1 - 1; j++) {
      for (let k = j + 1; k <= a.length - 1; ++k) {
        if (a[i] + a[j] + a[k] === 0) {
          result = push(result, [a[i], a[j], a[k]]);
        }
      }
    }
  }

  result = onboardRemoveDuplicateElementArray2d(result);

  return result;
}

function test1() {
  const a = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(a);
  console.log(result); // [[-1,0,1],[-1,-1,2]]
}

function test2() {
  const a = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
  const result = threeSum(a);
  console.log(result);
  // [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]
}

{
  // test1();
  test2();
}
