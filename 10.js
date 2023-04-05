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
 *
 * @param {String} s
 */
function isExistAsteriskCharacter(s) {
  let flag = false;

  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === "*") {
      flag = true;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {String} s
 */
function isExistDotCharacter(s) {
  let flag = false;

  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === ".") {
      flag = true;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {Array} a
 * @param {Number} index
 *
 */
function arrayRemoveElement(a, index) {
  /**
   * -------0 1 2 3 4 5 6
   * + a = [1,2,3,4,5,6,7]
   * + index = 3
   * ------------0 1 2 3 4 5
   * + output = [1,2,3,5,6,7]
   *
   */
  const result = new Array(a.length - 1);
  for (let i = 0; i <= index - 1; ++i) {
    result[i] = a[i];
  }

  for (let j = index; j <= result.length - 1; ++j) {
    result[j] = a[j + 1];
  }

  return result;
}

/**
 *
 * @param {String} s
 * @param {String} p
 *
 */
function split(s, p) {
  /**
   * + s = "abc*def*ghj"
   * + p = "*"
   * + result = ["abc","def","ghj"]
   *
   * + sub = ""
   * -> if still exist characters then push it
   *    + if condition can only check some i loop
   * + i: 0 -> length - 1
   *   + i = 11
   *     + s[i] = "j"
   *     + sub = "ghj"
   *     + result = ["abc","def"]
   *   + i = 10
   *     + s[i] = "h"
   *     + sub = "gh"
   *     + result = ["abc","def"]
   *   + i = 9
   *     + s[i] = "g"
   *     + sub = "g"
   *     + result = ["abc","def"]
   *   + i = 8
   *     + s[i] = "*"
   *     + result = ["abc","def"]
   *     + sub = ""
   *   + i = 7
   *     + sub = "def"
   *     + result = [abc]
   *   + i = 6
   *     + sub = "de"
   *     + result = ["abc"]
   *   + i = 5
   *     + sub = "d"
   *     + result = ["abc"]
   *   + i = 0
   *     + s[0] = "a"
   *       + sub = "a"
   *         + sub += s[0]
   *   + i = 1
   *     + s[1] = "b"
   *       + sub = "ab"
   *         + sub = sub + s[1]
   *   + i = 2
   *     + s[2] = "c"
   *       + sub = "abc"
   *         + sub = sub + s[2]
   *   + i = 3
   *     + s[3] = "*"
   *       if s[i] != "*"
   *          + sub = sub + s[i]
   *       if s[i] = "*"
   *          + sub = "abc"
   *            + sub = sub + ""
   *          + result = ["abc"]
   *
   *
   */
  let sub = "";
  let result = [];

  for (let i = 0; i <= s.length - 1; ++i) {
    if (s[i] === p) {
      result.push(sub);
      sub = "";
    }

    if (s[i] !== p) {
      sub += s[i];
    }
  }

  if (sub.length !== 0) {
    result.push(sub);
  }

  for (let i = result.length - 1; i >= 0; --i) {
    if (result[i] === "") {
      result = arrayRemoveElement(result, i);
    }
  }

  return result;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /**
   * + '.': matches any character
   * + '*': matches preceding element
   *   + 'abc*'
   *
   *
   */

  const flag1 = isExistAsteriskCharacter(p);
  const flag2 = isExistDotCharacter(p);

  if (!flag1 && !flag2) {
    // not exist both '.' and '*'
    return p.length === s.length;
  }

  if (!flag1 && flag2) {
    // exist only '.'
    return true;
  }

  if (flag1 && !flag2) {
    // exist only '*'
    for (let i = 0; i <= p.length - 1; ++i) {
      if (p[i] === "*") {
        for (let j = i - 1; j >= 0; --j) {
          let pCharacter = p[j];

          for (let k = 0; k <= s.length - 1; k++) {
            if (pCharacter === s[k]) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  if (flag1 && flag2) {
    // exist both '.' and '*'
    /**
     * -------012345678910
     * + s = "mississippi"
     *
     * -------0123456789
     * + p = "mis*is*p*."
     *   mis*is*p*.mis.is*p*
     *
     */
    const splitByDot = split(p, ".");

    for (let i = 0; i <= splitByDot.length - 1; ++i) {
      const splitByAsterisk = split(splitByDot[i], "*");
      let s2 = "";
      for (let j = 0; j <= splitByAsterisk.length - 1; ++j) {
        s2 += splitByAsterisk[j];
      }

      const l1 = s.length;
      const l2 = s2.length;

      if (l1 < l2) {
        let flag = false;
        for (let k1 = 0; k1 <= s2.length - 1; ++k1) {
          let s3 = "";
          for (let k2 = 0; k2 <= s.length - 1; k2++) {
            s3 += s[k2];
          }

          for (let k3 = 0; k3 <= s3.length - 1; ++k3) {}
        }
      }

      console.log(s);
    }
  }
};

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
function test4() {
  const s = "mississippi";
  const p = "mis*is*p*.mis.is*p*";
  const result = isMatch(s, p); // false
  console.log(result);
}

{
  // test1();
  // test2();
  // test3();
  test4();
}
