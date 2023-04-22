/**
 * 9. Palindrome Number
 * - Given an integer x, return true if x
 * is a palindrome number and false otherwise
 *
 * - Example 1
 * + x = 121
 * + result = true
 * + Explanation: 121 reads 121 from left to right
 * and 121 from right to left
 *
 * - Example 2
 * + x = -121
 * + result = false
 * + Explanation: -121 reads -121 from the left
 * to right and 12-1 from the right to left
 * , its read different way so false.
 *
 * - Example 3
 * + x = 10
 * + result = false
 * + Explanation: 10 reads 10 from left to right
 * and 01 from right to left, it's read different
 * way so false.
 *
 * - Constraint
 * + -2^31 <= x <= 2^31 - 1
 *
 * - Follow up: could you solve it without
 * converting the integer to string
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function getNumberLength(n) {
  /**
   * + n = 12345
   * + result = 5
   *
   * + i = 1
   *   + 12345 % 10 = 5
   *   + 12345 - 5  = 12340
   *   + 12340 / 10 = 1234
   * + i = 2
   *   + 1234 % 10 = 4
   *   + 1234 - 4  = 1230
   *   + 1230 / 10 = 123
   * + i = 3
   *   + 123 % 10 = 3
   *   + 123 - 3  = 120
   *   + 120 / 10 = 12
   * + i = 4
   *   + 12 % 10 = 2
   *   + 12 - 2  = 10
   *   + 10 / 10 = 1
   * + i = 5
   *   + 1 % 10 = 1
   *   + 1 - 1  = 0
   *   + 0 / 10 = 0
   *
   */

  let length = 0;
  let temporary = n;

  while (temporary !== 0) {
    const v1 = temporary % 10;
    const v2 = temporary - v1;
    const v3 = v2 / 10;
    temporary = v3;

    length++;
  }

  return length;
}

/**
 *
 * @param {Number} n
 */
function getTenExponent(n) {
  /**
   * + n = 4
   * + result = 10000
   *
   * + i = 1
   *   + result = 100
   * + i = 2
   *   + result = 1000
   * + i = 3
   *   + result = 10000
   * + i = 3
   *
   *
   */
  let result = 1;
  for (let i = n; i >= 1; --i) {
    result = result * 10;
  }
  return result;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isPalindrome = function (n) {
  /**
   * ------123
   * + n = 12321
   * + length = 5
   *
   *
   */
  if (n < 0) return false;

  const length = getNumberLength(n);
  const isLengthOdd = length % 2 !== 0;
  const delta = getTenExponent(length - 1);

  console.log(`Information\nNumber: ${n}\nLength: ${length}`);

  if (!isLengthOdd) {
    let temporaryNumberBackwardly = n;
    let temporaryNumberForwardly = n;

    const breakLoop = (length + 1) / 2;

    for (let i = breakLoop; i >= 1; i--) {
      const v1 = temporaryNumberBackwardly % 10;
      const v2 = temporaryNumberBackwardly - v1;
      const v3 = v2 / 10;
      temporaryNumberBackwardly = v3;

      /**
       * 12345
       * 12321
       * + c1 = 12321 % 10000 = 2321
       * + c2 = 12321 - 2321  = 10000
       * + c3 = 10000 / 10000 = 1
       *
       *
       */
      console.log(v3);
    }
  }

  if (isLengthOdd) {
  }
};

function test1() {
  const x = 12345;
  const result = isPalindrome(x);
  console.log(result);
}

function test2() {
  const x = -121;
  const result = isPalindrome(x);
  console.log(result);
}

function test3() {
  const x = 10;
  const result = isPalindrome(x);
  console.log(result);
}

function test4() {
  const x = 12321;
  const result = isPalindrome(x);
  console.log(result);
}

function test5() {
  const x = 1221;
  const result = isPalindrome(x);
  console.log(result);
}

{
  test1();
  // test2();
  // test3();
  // test4();
  // test5();
}
