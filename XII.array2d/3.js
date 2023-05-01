/**
 * 3. Is two array 2d the same
 * - Given two array 2d of number elements,
 * find out if they are the same.
 *
 * - Example 1
 * + a1 = [[1,2],[3,4]]
 * + a2 = [[4,3],[2,1]]
 * + result = true
 *
 */

/**
 *
 * @param {Array} a1
 * @param {Array} a2
 *
 */
function isTwoArrayTheSame(a1, a2) {
  if (a1.length !== a2.length) return false;

  let flag = true;

  for (let i = 0; i <= a1.length - 1; ++i) {
    let flag1 = false;
    const e1 = a1[i];

    for (let j = 0; j <= a2.length - 1; j++) {
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
 * @param {Array[]} a1
 * @param {Array[]} a2
 *
 */
function isTwoArray2dTheSame(a1, a2) {
  if (a1.length !== a2.length) return false;

  let flag = true;

  for (let i = 0; i <= a1.length - 1; ++i) {
    let flag1 = false;
    const ai = a1[i];

    for (let j = 0; j <= a2.length - 1; ++j) {
      const aj = a2[j];
      const flag2 = isTwoArrayTheSame(ai, aj);
      if (flag2) {
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

function test1() {
  const a1 = [
    [1, 2],
    [3, 4],
  ];
  const a2 = [
    [4, 3],
    [2, 1],
  ];
  const result = isTwoArray2dTheSame(a1, a2);
  console.log(result); // true
}

function test2() {
  const a1 = [
    [1, 2],
    [3, 4],
  ];
  const a2 = [
    [4, 3],
    [2, 2],
  ];
  const result = isTwoArray2dTheSame(a1, a2);
  console.log(result); // false
}

function test3() {
  const a1 = [
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
  const a2 = [
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
  const result = isTwoArray2dTheSame(a1, a2);
  console.log(result); // true
}

{
  //   test1();
  //   test2();
  test3();
}
