/**
 * 5. Longest Palindromic Substring
 * - Given a string "s", return the longest palindromic substring
 * in "s"
 *
 * - Example 1
 * + s = "babad"
 * + result = "bab"
 * + Explanation: "aba" is also a valid answer
 *   -------01234
 *   + flag = false
 *   + s = "babad"
 *   + s.length = 5
 *   + i: 0 -> s.length - 1
 *     + i = 0
 *     + i = 1
 *     + i = 2
 *     + i = 4
 *       + delta = s.length - i - 1
 *         + delta = 5 - 0 - 1 = 4
 *         + delta = 5 - 1 - 1 = 3
 *         + delta = 5 - 2 - 1 = 2
 *         + delta = 5 - 3 - 1 = 1
 *         + delta = 5 - 4 - 1 = 0
 *           + if s[i] != s[delta]
 *             + flag = false
 *             + break
 *
 * + 1 = wasPalindrome()
 * + 2 = set of sub string
 * + 3 = get set of palindrome
 * + 4 = get the longest of set of palindrome
 *
 *
 * - Example 2
 * + s = "cbbd"
 * + result = "bb"
 *
 * - Example 3
 * + s = "abca"
 * + result = ""
 *
 * - Constraints
 * + 1 <= s.length <= 1000
 * + s consist of only digits and English letters
 *
 *
 *
 */

/**
 *
 * @param {String} s
 */
function wasPalindrome(s) {
  /**
   * -------0123
   * + s = "abba"
   * + result = true
   *   + index = 3
   *   + delta = (index + 1) / 2 - 1
   *   + i: 0 -> 1
   *     + 0
   *     + 1
   *     + delta: 3 -> 2
   *       + 3
   *       + 2
   *
   * -------01234
   * + s = "bbbbb"
   * + result = true
   *   + length = 5
   *   + i: 0 -> 4
   *     + delta: 4 -> 0
   *       + s[i] = s[delta] ?
   *
   * + s = "ab"
   * + result = false
   *
   */
  const index = s.length - 1;

  if (index % 2 === 0) {
    let flag = true;
    const middleIndex = index / 2;
    for (let i = 0; i <= middleIndex; i++) {
      const delta = s.length - i - 1;
      if (s[i] !== s[delta]) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  if (index % 2 !== 0) {
    let flag = true;
    const delta1 = (index + 1) / 2 - 1;

    for (let i = 0; i <= delta1; ++i) {
      const delta2 = s.length - i - 1;
      if (s[i] !== s[delta2]) {
        flag = false;
        break;
      }
    }

    return flag;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let result = s[0];

  for (let i = 0; i <= s.length - 1 - 1; i++) {
    let subString = s[i];
    for (let j = i + 1; j <= s.length - 1; ++j) {
      subString += s[j];

      if (wasPalindrome(subString)) {
        if (subString.length > max) {
          max = subString.length;
          result = subString;
        }
      }
    }
  }

  return result;
};

function test1() {
  const s = "babad";
  const result = longestPalindrome(s);
  console.log(result);
}

function test2() {
  const s = "cbbd";
  const result = longestPalindrome(s);
  console.log(result);
}

function test3() {
  const s = "a";
  const result = longestPalindrome(s);
  console.log(result);
}

function test4() {
  const s = "ac";
  const result = longestPalindrome(s);
  console.log(result);
}

function test5() {
  const s = "abcda";
  const result = longestPalindrome(s);
  console.log(result);
}

{
  test1();
  test2();
  test3();
  test4();
  test5();
}
