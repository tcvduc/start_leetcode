/**
 * Problem: Get number length without turn
 * number into string
 *
 * - Example 1
 * + x = 1234
 * + result = 4
 * + Explanation: 1234 counted elements is 4
 *
 * - Example 2
 * + x = 123
 * + result = 3
 * + Explanation: 123 counted elements is 3
 *
 * - Example 3
 * + x = null;
 * + result = 0
 * + Explanation: the number is null so count 0
 *
 * -- ----------------
 * + x = 1234
 * + result = 4
 * + length = 0
 *
 * + length =  1
 *   + v1 = 1234 % 10 = 4
 *   + v2 = 1234 - 4 = 1230
 *   + v3 = 1230 / 10 = 123
 * + length = 2
 *   + v1 = 123 % 10 = 3
 *   + v2 = 123 - 3 = 120
 *   + v3 = 120 / 10 = 12
 * + length = 3
 *   + v1 = 12 % 10 = 2
 *   + v2 = 12 - 2 = 10
 *   + v3 = 10 / 10 = 1
 * + length = 4
 *   + v1 = 1 % 10 = 1
 *   + v2 = 1 - 1 = 0
 *   + v3 = 0 / 10 = 0
 *
 * -- ---------------
 * -- code
 * -- ----------------
 * let length = 0;
 * let temporary = n;
 *
 * while(temporary !== 0){
 *   length++;
 *   const v1 = temporary % 10;
 *   const v2 = temporary - v1;
 *   const v3 = v2 / 10;
 *   temporary = v3;
 * }
 *
 * return length;
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function getNumberLength(n) {
  if (n === null) return 0;

  let length = 0;
  let temporary = n;

  while (temporary !== 0) {
    length++;
    const v1 = temporary % 10;
    const v2 = temporary - v1;
    const v3 = v2 / 10;
    temporary = v3;
  }

  return length;
}

function test1() {
  const n1 = 1234;
  const n2 = 123;
  const n3 = 12;
  const n4 = 1;
  const n5 = null;

  const result1 = getNumberLength(n1);
  const result2 = getNumberLength(n2);
  const result3 = getNumberLength(n3);
  const result4 = getNumberLength(n4);
  const result5 = getNumberLength(n5);

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);
}

{
  test1();
}
