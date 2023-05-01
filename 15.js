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
 * @param {Array} a
 */
function threeSum(a) {
  let result = [];

  for (let i = a.length - 1; i >= 2; i--) {
    for (let j = i - 1; j >= 1; --j) {
      for (let k = j - 1; k >= 0; --k) {
        if (a[i] + a[j] + a[k] === 0) {
          result = push(result, [a[i], a[j], a[k]]);
        }
      }
    }
  }

  return result;
}

function test1() {
  const a = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(a);
  console.log(result); // [[-1,0,1],[-1,-1,2]]
}

{
  test1();
}
