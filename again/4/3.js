/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let max = 1;

  for (let i = 0; i <= s.length - 1 - 1; ++i) {
    let subString = s[i];

    for (let j = i + 1; j <= s.length - 1; ++j) {
      let flag = false;

      for (let k = 0; k <= subString.length - 1; ++k) {
        if (subString[k] === s[j]) {
          flag = true;
          break;
        }
      }

      if (flag === true) {
        break;
      }

      subString += s[j];
    }

    if (subString.length > max) {
      max = subString.length;
    }
  }

  return max;
};

function test1() {
  const s = "abcabcbb";
  const result = lengthOfLongestSubstring(s);
  console.log(result);
}

function test2() {
  const s = "bbbbb";
  const result = lengthOfLongestSubstring(s);
  console.log(result);
}

function test3() {
  const s = "pwwkew";
  const result = lengthOfLongestSubstring(s);
  console.log(result);
}

function test4() {
  const s = "";
  const result = lengthOfLongestSubstring(s);
  console.log(result);
}

{
  test1();
  test2();
  test3();
  test4();
}
