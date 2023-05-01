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
 * @param {Array[]} a
 */
function onboardRemoveDuplicateElementArray2d(a) {
  for (let i = 0; i <= a.length - 1 - 1; i++) {
    const ai = a[i];
    for (let j = i + 1; j <= a.length - 1; j++) {
      const aj = a[j];
    }
  }
}

function test1() {
  const a = [
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
