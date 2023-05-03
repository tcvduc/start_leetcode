/**
 * 5. Double remove element at pos
 * - Given an array 1d of string elements
 * and pos1, pos2. Remove element at pos1,
 * pos2 index. Pos1 and pos2 is unique
 *
 * - Example 1
 * ---------0   1   2   3
 * + a =  ["a","b","c","d"]
 * + pos1 = 1
 * + pos2 = 2
 * -------------0   3
 * + result = ["a","d"]
 *
 */

/**
 *
 * @param {String} s
 */
function stringToArray1d(s) {
  const result = [];
  for (let i = 0; i <= s.length - 1; ++i) result.push(s[i]);
  return result;
}

/**
 *
 * @param {Array} a
 */
function array1dToString(a) {
  let s = "";
  for (let i = 0; i <= a.length - 1; ++i) s += a[i];
  return s;
}

/**
 *
 * @param {Array} a
 */
function array1dRemoveElementAtPos(a, pos) {
  if (pos < 0 || pos > a.length - 1) return a;

  const result = new Array(a.length - 1);

  for (let i = 0; i <= pos - 1; ++i) result[i] = a[i];
  for (let j = pos; j <= result.length - 1; ++j) result[j] = a[j + 1];

  return result;
}

/**
 *
 * @param {String} s
 * @param {Number} pos1
 * @param {Number} pos2
 *
 */
function doubleRemoveElementAtPos(s, pos1, pos2) {
  let result = s;
  if (pos2 > pos1) {
    result = array1dRemoveElementAtPos(result, pos2);
    result = array1dRemoveElementAtPos(result, pos1);
  }

  if (pos2 < pos1) {
    result = array1dRemoveElementAtPos(result, pos1);
    result = array1dRemoveElementAtPos(result, pos2);
  }
  return array1dToString(result);
}

function test1() {
  const s = "(([]){})";
  const sArray = stringToArray1d(s);
  const pos1 = 2;
  const pos2 = 3;
  const result = doubleRemoveElementAtPos(sArray, pos1, pos2);
  console.log(result); //  ((){})
}

{
  test1();
}
