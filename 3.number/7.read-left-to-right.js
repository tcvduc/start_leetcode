/**
 * Problem: Read number from left to right
 *
 * - Example 1
 * + x = 1234
 * + result = 1234
 * + Explanation: 1234 reads 1234 from left to right
 *
 * - Example 2
 * + x = 4321
 * + result = 4321
 * + Explanation: 4321 reads 4321 from left to right
 *
 * - Example 3
 * + x = null
 * + result = null
 * + Explanation: null reads null from left to right
 *
 *
 * -- ---------------
 * + x = 4321
 * + length = 4
 * + delta = 10^(4 - 1)
 *   + delta = 10^(3)
 *   + delta = 1000
 * + result = 0
 * + temporary = 4321
 *   + v1 = 4321 % 1000 = 321
 *   + v2 = 4321 - 321 = 4000
 *   + v3 = 4000 / 1000 = 4
 *   + result = 4
 *     + result = result * 10 + v3
 *
 *
 * -- -----------
 * -- algorithm
 * -- ----------
 * const delta = 10^(length - 1);
 *
 * const v1 = temporary % delta;
 * const v2 = temporary - v1;
 * const v3 = v2 / delta;
 * temporary = v1;
 * delta = delta / 10;
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
  const delta = 10;

  while (temporary !== 0) {
    const v1 = temporary % 10;
    const v2 = temporary - v1;
    const v3 = v2 / delta;
    temporary = v3;
    length++;
  }

  return length;
}

/**
 *
 * @param {Number} n
 */
function fx(n) {
  let result = 0;
  let temporary = n;
  const length = getNumberLength(n);
  console.log("n = ", n);
  console.log("n.length = ", length);
  let delta = Math.pow(10, length - 1);
  let i = 0;

  while (i < length) {
    i++;

    const v1 = temporary % delta;
    const v2 = temporary - v1;
    const v3 = v2 / delta;
    result = result * 10 + v3;
    temporary = v1;
    delta = delta / 10;
  }
  console.log(result);
  //   return result;
}

function test1() {
  const n1 = 1234;
  const n2 = 4321;
  const n3 = null;
  const n4 = 321;
  const n5 = 12;

  const result1 = fx(n1);
  const result2 = fx(n2);
  const result3 = fx(n3);
  const result4 = fx(n4);
  const result5 = fx(n5);

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);
}

{
  test1();
}
