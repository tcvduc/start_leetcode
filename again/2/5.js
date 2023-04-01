/**
 *
 * @param {String} s
 */
function wasPalindrome(s) {
  /**
   * -------123456
   * + s = "aabbaa"
   *
   * -------12345
   * + s = "acbca"
   *
   *
   */
  const index = s.length - 1;
  const delta1 = index / 2;
  const delta2 = (index + 1) / 2;
  let flag = true;

  if (index % 2 === 0) {
    for (let i = 0; i <= delta1; ++i) {
      const j = s.length - i - 1;
      if (s[i] !== s[j]) {
        flag = false;
        break;
      }
    }
  }

  if (index % 2 !== 0) {
    for (let i = 0; i <= delta2; i++) {
      const j = s.length - i - 1;
      if (s[i] !== s[j]) {
        flag = false;
        break;
      }
    }
  }

  return flag;
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
    for (let j = i + 1; j <= s.length - 1; j++) {
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
