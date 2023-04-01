/**
 *
 * @param {String} subString
 * @param {String} character
 *
 */
function wasExistCharacter(subString, character) {
  let flag = false;

  for (let i = subString.length - 1; i >= 0; --i) {
    if (subString[i] === character) {
      flag = true;
      break;
    }
  }

  return flag;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let max = 1;
  const delta1 = s.length - 1 - 1;
  const delta2 = s.length - 1;

  for (let i = 0; i <= delta1; ++i) {
    let subString = s[i];

    for (let j = i + 1; j <= delta2; j++) {
      if (wasExistCharacter(subString, s[j])) {
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

{
  test1();
}
