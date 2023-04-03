/**
 * 9. Palindrome Number
 * - Given an integer "x", return true
 * if x a palindrome number and false
 * otherwise.
 *
 * - Example 1
 * + x = 121
 * + result = true
 * + Explanation: 121 reads as 121 from left
 * to right and from right to left.
 *
 * - Example 2
 * + x = -121
 * + result = false
 * + Explanation: From left to right it reads
 * -121, from right to left it becomes 121-.
 * Therefore it is not a palindrome.
 *
 * - Example 3
 * + x = 10
 * + result = false
 * + Explanation: Read 01 from right to left.
 * Therefore it is not a palindrome
 *
 * - Constraints
 * + -2^31 <= x <= 2^31 - 1
 *
 * - Follow up: Could you solve it without
 * converting the integer to string?
 *
 *
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function (x) {
  const xString = x.toString();
  const index = xString.length - 1;

  if (index % 2 === 0) {
    const delta = index / 2;
    let flag = true;
    for (let i = 0; i <= delta; i++) {
      const j = xString.length - i - 1;
      if (xString[i] !== xString[j]) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  if (index % 2 !== 0) {
    let flag = true;
    const delta = (index + 1) / 2;
    for (let i = 0; i <= delta; i++) {
      const j = xString.length - i - 1;
      if (xString[i] !== xString[j]) {
        flag = false;
        break;
      }
    }
    return flag;
  }
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /**
   * --01234
   *   12321
   *
   */
  console.log(x);
  const lastNum = x % 10;
  const firstNum = (x - (x % 10000)) / 10000;
  console.log(firstNum);
  console.log(lastNum);
  console.log("");
  const secondNum = ((x - (x % 1000)) / 1000) % 10;
  const nearLastNum = (x % 100) / 10;
  console.log(secondNum);
  console.log(nearLastNum);
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
  //   test2();
  //   test3();
}
