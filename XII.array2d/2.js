/**
 * 2. Array 2d duplicate element
 * - Given an array 2d of array 1d number.
 * Remove duplicate element
 *
 * - Example 1
 * + a = [[-1,2,-1],[-1,1,0],[1,0,-1]]
 * + result = [[-1,2,-1],[-1,1,0]]
 *
 */

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

function test1() {
  let a = [
    [-1, 2, -1],
    [-1, 1, 0],
    [1, 0, -1],
  ];
  const result = onboardRemoveDuplicateElementArray2d(a);
  console.log(result);
}

{
  test1();
}
