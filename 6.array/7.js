/**
 * 7. Is two array the same
 * - Given two array 1d of number elements,
 * compare them if they are the same.
 *
 * - Example 1
 * + a1 = [1,0,-1]
 * + a2 = [-1,0,1]
 * + result = true
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

function test1() {
  const a1 = [1, 0, -1];
  const a2 = [-1, 0, 1];
  const result = isTwoArray1dTheSame(a1, a2);
  console.log(result); // true
}

{
  test1();
}
