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
 */
function array1dRemoveElementAtPos(a, pos) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + pos = 2
   *
   * ------------0 1 2 3
   * + result = [1,2,4,5]
   *
   */
  if (pos < 0 || pos > a.length - 1) return a;

  const result = new Array(a.length - 1);
  for (let i = 0; i <= pos - 1; ++i) {
    result[i] = a[i];
  }
  for (let j = pos; j <= result.length - 1; ++j) {
    result[j] = a[j + 1];
  }
  return result;
}

/**
 *
 * @param {Array} a
 */
function advanceLogArray1d(a) {
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
    indexBar += i + " ";
    arrayBar += a[i] + ",";
  }
  console.log(indexBar);
  console.log(arrayBar);
}

function test1() {
  const a = [1, 2, 3, 4, 5, 6];
  const pos = 2;
  const result = array1dRemoveElementAtPos(a, pos);
  console.log(result);
}

function test2() {
  const a = [1, 2, 3, 4, 5, 6];
  const pos = -1;
  const result = array1dRemoveElementAtPos(a, pos);
  console.log(result);
}

function test3() {
  const a = [1, 2, 3, 4, 5, 6];
  const pos = 7;
  const result = array1dRemoveElementAtPos(a, pos);
  console.log(result);
}

function test4() {
  console.log("Test 4, auto large test cases\n");
  const a = [1, 2, 3, 4, 5];
  advanceLogArray1d(a);
  for (let pos = 0; pos <= a.length - 1; ++pos) {
    const result = array1dRemoveElementAtPos(a, pos);
    console.log("pos: ", pos, " ", result);
  }
}

{
  test1();
  test2();
  test3();
  test4();
}
