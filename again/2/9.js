/**
 * 9. Palindrome Number
 * - Given an integer x, return true if x
 * is a palindrome number and false otherwise.
 *
 * - Example 1
 * + x = 121
 * + output = true
 * + Explanation: 121 reads 121 from left to
 * right and right to left
 *
 * - Example 2
 * + x = -121
 * + output = false
 * + Explanation: -121 reads -121 from left
 * to right, and reads 12-1 from right
 * to left, it's different so false.
 *
 * - Example 3
 * + x = 10
 * + output = false
 * + Explanation: 10 reads 10 from left
 * to right and 01 from right to left so false.
 *
 * - Constrains
 * + -2^31 <= x <= 2^31 - 1
 *
 * - Follow up: Could you solve this problem
 * without converting the integer to string
 *
 */

/**
 *
 * @param {Number} n
 */
function getNumberLength(n) {
  /**
   * + n = 1234
   * + output = 4
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
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;

  const length = getNumberLength(x);

  let temporary1 = x;
  let temporary2 = x;
  let i = 0;
  let left = 0;
  let right = 0;
  let delta = Math.pow(10, length - 1);
  let flag = true;
  const middleIndex = length % 2 === 0 ? length / 2 : (length + 1) / 2;

  while (i < middleIndex) {
    i++;

    const v1 = temporary1 % 10;
    const v2 = temporary1 - v1;
    const v3 = v2 / 10;
    temporary1 = v3;
    right = v1;

    const b1 = temporary2 % delta;
    const b2 = temporary2 - b1;
    const b3 = b2 / delta;
    delta = delta / 10;
    temporary2 = b1;
    left = b3;

    if (left !== right) {
      flag = false;
      break;
    }
  }

  return flag;
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
  test2();
  test3();
  test4();
  test5();
}
