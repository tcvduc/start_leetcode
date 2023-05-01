/**
 * 4. Array 2d find different element
 * - Given two array 2d number elements,
 * find different elements
 *
 * - Example 1
 * + a1 = [[1,2],[3,4]]
 * + a2 = [[1,2],[3,4]]
 * + result = []
 *
 * - Example 2
 * + a1 = [[1,2],[2,4]]
 * + a2 = [[1,2],[3,4]]
 * + result = [[3,4]]
 *
 * - Example 3
 * + a1 = [[1,2],[4,3]]
 * + a2 = [[1,2],[3,4]]
 * + result = []
 *
 * - Example 4
 * + a1 = [[1,2],[3,5],[5,6]]
 * + a2 = [[1,2],[5,3],[4,6],[7,8]]
 * + result = [[4,6],[7,8]]
 *
 * - here
 *
 */

/**
 *
 * @param {Array[]} a1
 * @param {Array[]} a2
 *
 */
function findDifferentElementArray2d(a1, a2) {
  const l1 = a1.length;
  const l2 = a2.length;
  const result = [];

  if (l1 !== l2) {
    for (let i = 0; i <= a1.length - 1; ++i) {
      let flag1 = false;
      const ai = a1[i];

      for (let j = 0; j <= a2.length - 1; j++) {
        const aj = a2[j];
        const flag2 = isTwoArray1dTheSame(ai, aj);

        if (flag2) {
          flag1 = true;
          break;
        }
      }

      if (!flag1) {
        result.push(ai);
      }
    }
  }

  if (l1 === l2) {
  }
}

function test1() {
  const a1 = [
    [1, 2],
    [3, 4],
  ];
  const a2 = [
    [1, 2],
    [3, 4],
  ];
  const result = findDifferentElementArray2d(a1, a2);
  console.log(result); // []
}

function test2() {
  const a1 = [
    [1, 2],
    [2, 4],
  ];
  const a2 = [
    [1, 2],
    [3, 4],
  ];
  const result = findDifferentElementArray2d(a1, a2);
  console.log(result); // [[3,4]]
}

function test3() {
  const a1 = [
    [1, 2],
    [4, 3],
  ];
  const a2 = [
    [1, 2],
    [3, 4],
  ];
  const result = findDifferentElementArray2d(a1, a2);
  console.log(result); // []
}

function test4() {
  const a1 = [
    [1, 2],
    [3, 5],
    [5, 6],
  ];
  const a2 = [
    [1, 2],
    [5, 3],
    [4, 6],
    [7, 8],
  ];
  const result = findDifferentElementArray2d(a1, a2);
  console.log(result); // [[4,6],[7,8]]
}

function test5() {
  const a1 = [
    [0, 0, 0],
    [4, 1, -5],
    [-4, 3, 1],
    [1, -2, 1],
    [-2, 4, -2],
  ];

  const a2 = [
    [-4, 1, 3],
    [-4, 4, 0],
    [-2, 1, 1],
    [-2, 4, -2],
    [1, -5, 4],
    [0, 0, 0],
  ];

  const result = findDifferentElementArray2d(a1, a2);
  console.log(result);
}

{
  test1();
  //   test2();
  //   test3();
  //   test4();
  //   test5();
}
