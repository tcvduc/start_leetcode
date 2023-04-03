/**
 * Problem: Read number from right to left.
 *
 * - Example 1
 * + x = 1234
 * + result = 4321
 * + Explanation: 1234 reads 4321 from right
 * to left
 *
 * - Example 2
 * + x = 1435
 * + result = 5341
 * + Explanation: 1435 reads 5341 from right
 * to left
 *
 * - Example 3
 * + x = null
 * + result = null
 * + Explanation: number is null
 *
 *
 * -- -------------
 * + result = 0
 * + 1234
 *   + 4
 *     + result = 4
 *     + result = result * 10 + 4
 *   + 3
 *     + result = 43
 *     + result = result * 10 + 3
 *   + 2
 *     + result = 432
 *     + result = result * 10 + 2
 *   + 1
 *     + result = 4321
 *     + result = result * 10 + 1
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function fx(n) {
  console.log("n = ", n);

  if (n === null) return null;

  let temporary = n;
  let result = 0;

  while (temporary !== 0) {
    const v1 = temporary % 10;
    const v2 = temporary - v1;
    const v3 = v2 / 10;
    temporary = v3;
    result = result * 10 + v1;
  }

  return result;
}

function test1() {
  const n1 = 1234;
  const n2 = 1435;
  const n3 = null;

  const result1 = fx(n1);
  const result2 = fx(n2);
  const result3 = fx(n3);

  console.log(result1);
  console.log(result2);
  console.log(result3);
}

{
  test1();
}
