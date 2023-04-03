/**
 * 10. Regular Expression Matching
 * - Given an input string "s" and a
 * pattern "p", implement regular expression
 * matching with support "." and "*" where:
 * + '.' matches any single character
 * + '*' matches zero or more of the preceding
 * element
 * - The matching should cover the entire
 * input string (not partial)
 *
 * - Example 1
 * + s = "aa"
 * + p = "a"
 * + output = false
 * + explanation: "a" does not match the
 * entire "aa"
 *
 * - Example 2
 * + s = "aa"
 * + p = "a*"
 * + output = true
 * + explanation: "*" mean zero or more
 * of the preceding element, 'a', therefore
 * by repeating 'a' once, it becomes 'aa'
 *
 * - Example 3
 * + s = "ab"
 * + p = ".*"
 * + output = true
 * + explanation: ".*" mean match zero or
 * more of any character.
 *
 * - Constraints
 * + 1 <= s.length <= 20
 * + 1 <= p.length <= 20
 * + s contains only lowercase english letter
 * + p contains only lowercase english letter,
 * '.' and '*'
 * + It is guaranteed for each appearance
 * of the character '*' there will be a previous
 * valid character to match
 *
 *
 *
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {};

function test1() {
  const s = "aa";
  const p = "a";
  const result = isMatch(s, p);
  console.log(result);
}

function test2() {
  const s = "mississippi";
  const p = "mis*is*p*.";
  const result = isMatch(s, p);
  console.log(result);
}

function test3() {
  const s = "aa";
  const p = "a*";
  const result = isMatch(s, p);

  console.log(result);
}

{
  test1();
  test2();
  test3();
}
