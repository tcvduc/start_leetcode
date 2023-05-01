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

  let flag = true;

  for (let i = 0; i <= a1.length - 1; ++i) {
    let flag1 = false;
    const e1 = a1[i];

    for (let j = 0; j <= a2.length - 1; ++j) {
      const e2 = a2[j];

      if (e1 === e2) {
        flag1 = true;
        break;
      }
    }

    if (!flag1) {
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
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + pos = 2
   * ------------0 1 2 3
   * + result = [1,2,4,5]
   *
   *
   */
  const result = new Array(a.length - 1);
  for (let i = 0; i <= pos - 1; i++) {
    result[i] = a[i];
  }
  for (let j = pos; j <= result.length - 1; ++j) {
    result[j] = a[j + 1];
  }
  return result;
}

/**
 *
 * @param {Array[]} a
 */
function onboardRemoveDuplicateElementArray2d(a) {
  const factor = [4, 1, -5];

  for (let i = 0; i <= a.length - 1 - 1; i++) {
    const ai = a[i];

    for (let j = i + 1; j <= a.length - 1; j++) {
      const aj = a[j];
      const flag = isTwoArray1dTheSame(ai, aj);
      const flag2 = isTwoArray1dTheSame(factor, ai);

      if (flag) {
        // here
        const pos = j;

        if (flag2) {
          console.log("i default ", i);
          console.log("ai ", ai);
          console.log("aj ", aj);
          console.log("pos ", pos);
        }

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

function test2() {
  let a = [
    [0, 0, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [4, 1, -5],
    [4, 1, -5],
    [1, 4, -5],
    [1, 4, -5],
    [-4, 3, 1],
    [-4, 3, 1],
    [-4, 3, 1],
    [1, -2, 1],
    [-5, 4, 1],
    [1, -2, 1],
    [-5, 4, 1],
    [-2, 1, 1],
    [1, -4, 3],
    [1, -4, 3],
    [-4, 1, 3],
    [-2, 4, -2],
    [-2, 4, -2],
    [4, -2, -2],
    [-2, 4, -2],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 0, 4],
    [-4, 0, 4],
    [-4, 0, 4],
    [-2, -2, 4],
    [1, -5, 4],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-2, 4, -2],
    [1, -5, 4],
  ];
  const result = onboardRemoveDuplicateElementArray2d(a);
  console.log(result);
}

function test3() {
  let a = [
    [-4, 1, 3],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 0, 4],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 3, 1],
    [-2, 1, 1],
    [-2, 4, -2],
    [-2, 4, -2],
    [-2, -2, 4],
    [-2, 4, -2],
    [1, -5, 4],
    [1, -5, 4],
    [1, -4, 3],
    [1, -4, 3],
    [1, 4, -5],
    [1, -2, 1],
    [1, 4, -5],
    [1, -2, 1],
    [-5, 4, 1],
    [-5, 4, 1],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 0, 4],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 3, 1],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 0, 4],
    [-4, 4, 0],
    [-4, 4, 0],
    [-4, 3, 1],
    [4, -2, -2],
    [4, 1, -5],
    [-2, 4, -2],
    [0, 0, 0],
    [4, 1, -5],
  ];
  const result = onboardRemoveDuplicateElementArray2d(a);
  console.log(result);
}

{
  // test1();
  test2();
  // test3();
}
