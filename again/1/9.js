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
 * @param {Number} x
 */
function getNumberLength(x) {
  /**
   * + x = 1234
   * + result = 4
   *
   *
   * + temporary = 1234
   * + v1 = 1234 % 10 = 4
   * + v2 = temporary - v1 = 1234 - 4 = 1230
   * + v3 = v2 / 10 = 1230 / 10 = 123
   * + temporary = v3
   * + length++
   *
   */
  let temporary = x;
  let length = 0;

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
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  console.log(x);
  const length = getNumberLength(x);
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

{
  test1();
  // test2();
  // test3();
}
