/**
 * 8. Array 1d remove element at pos
 * - Given a array 1d elements and pos
 * as a index position, remove element
 * at pos.
 *
 * - Example 1:
 * -------0 1 2 3 4 5
 * + a = [1,2,3,4,5,6]
 * + pos = 2
 * ------------0 1 2 3 4
 * + result = [1,2,4,5,6]
 *
 */

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

function test1() {
  const a = [1, 2, 3, 4, 5, 6];
  const pos = 2;
  const result = array1dRemoveElementAtPos(a, pos);
  console.log(result);
}

{
  test1();
}
