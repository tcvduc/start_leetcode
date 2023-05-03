/**
 * 20. Valid parentheses
 * - Given a string "s" containing
 * just the character '(', ')', '{', '}'
 * '[', ']', determine if the input string
 * is valid.
 * - An input string is valid if
 * + Open brackets must be closed by the same
 * type of brackets
 * + Open brackets must be closed in
 * the correct order
 * + Every close bracket must be closed
 * in the correct order
 *
 * - Example 1
 * + s = "()"
 * + result = true
 *
 * - Example 2
 * + s = "()[]{}"
 * + result = true
 *
 * - Example 3
 * + s = "(]"
 * + result = false
 *
 *
 *
 *
 */

/**
 *
 * @param {String} s1
 * @param {String} s2
 *
 */
function isTwoStringTheSame(s1, s2) {
  if (s1.length !== s2.length) return false;
  let flag = true;
  for (let i = s1.length - 1; i >= 0; --i) {
    if (s1[i] !== s2[i]) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 *
 * @param {String} o
 * @param {String} c
 *
 */
function isOpenAndCloseType1(o, c) {
  /**
   * + Open and close type 1
   * + (: open1
   * + ): close1
   *
   */
  const open1s = "open1";
  const close1s = "close1";
  const flag1 = isTwoStringTheSame(open1s, o);
  const flag2 = isTwoStringTheSame(close1s, c);
  const result = flag1 && flag2;
  return result;
}

/**
 *
 * @param {String} o
 * @param {String} c
 *
 */
function isOpenAndCloseType2(o, c) {
  /**
   * + Open and close type 2
   * + [: open2
   * + ]: close2
   *
   */
  const open2s = "open2";
  const close2s = "close2";
  const flag1 = isTwoStringTheSame(open2s, o);
  const flag2 = isTwoStringTheSame(close2s, c);
  const result = flag1 && flag2;
  return result;
}

/**
 *
 * @param {String} o
 * @param {String} c
 *
 */
function isOpenAndCloseType3(o, c) {
  /**
   * + Open and close type 3
   * + [: open3
   * + ]: close3
   *
   */
  const open3s = "open3";
  const close3s = "close3";
  const flag1 = isTwoStringTheSame(open3s, o);
  const flag2 = isTwoStringTheSame(close3s, c);
  const result = flag1 && flag2;
  return result;
}

/**
 *
 * @param {String} open
 * @param {String} close
 *
 */
function isOpenAndCloseTheSameTypeOfBracket(open, close) {
  const map = new Map();
  map.set("(", "open1");
  map.set("[", "open2");
  map.set("{", "open3");
  map.set(")", "close1");
  map.set("]", "close2");
  map.set("}", "close3");

  const openType = map.get(open);
  const closeType = map.get(close);

  const flag1 = isOpenAndCloseType1(openType, closeType);
  const flag2 = isOpenAndCloseType2(openType, closeType);
  const flag3 = isOpenAndCloseType3(openType, closeType);

  return flag1 || flag2 || flag3;
}

/**
 *
 * @param {String} s
 */
function isOpenAndCloseType2TheSame(s) {
  /**
   * - Open and close type 2
   * -------0123
   * + s = "{[]}"
   *
   */
  let flag = true;
  const breakLoopPoint = s.length / 2 - 1;

  for (let i = 0; i <= breakLoopPoint; ++i) {
    const open = s[i];
    const close = s[s.length - i - 1];
    const flag1 = isOpenAndCloseTheSameTypeOfBracket(open, close);
    if (!flag1) {
      flag = flag1;
      break;
    }
  }

  return flag;
}

/**
 *
 * @param {String} s
 */
function isOpenBracket(s) {
  /**
   * - Open Bracket
   * + "(": open1
   * + "[": open2
   * + "{": open3
   *
   */
  const map = new Map();
  map.set("(", "open1");
  map.set("[", "open2");
  map.set("{", "open3");

  const openString = "open";
  const mapValue = map.get(s);

  if (!mapValue) return false;

  let loopString = "";
  let count = 0;

  for (let i = 0; i <= mapValue.length - 1; ++i) {
    count++;
    loopString += mapValue[i];
    if (count === 4) {
      break;
    }
  }

  const flag = isTwoStringTheSame(openString, loopString);
  return flag;
}

/**
 *
 * @param {String} s1
 * @param {String} s2
 *
 */
function isTheSameTypeOfBracket(s1, s2) {
  /**
   * - Is the same type of bracket
   * + s1: [
   * + s2: ]
   * + result: true
   *
   * + s1: [
   * + s2: }
   * + result: false
   *
   *
   */

  const map = new Map();

  map.set("(", "type1");
  map.set(")", "type1");
  map.set("[", "type2");
  map.set("]", "type2");
  map.set("{", "type3");
  map.set("}", "type3");

  const openValue = map.get(s1);
  const closeValue = map.get(s2);
  const flag = isTwoStringTheSame(openValue, closeValue);
  return flag;
}

/**
 *
 * @param {String} s
 */
function stringToArray(s) {
  /**
   * + s = "abcdef"
   * + result = ["a","b","c","d","e","f"]
   *
   */
  const result = [];
  for (let i = 0; i <= s.length - 1; ++i) {
    result.push(s[i]);
  }
  return result;
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 */
function arrayRemoveElementAtPos(a, pos) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + pos = 2
   *
   * ------------0 1 2 3
   * + result = [1,2,4,5]
   *
   */
  if (pos < 0 || pos > a.length - 1) return a;

  const result = new Array(a.length - 1);
  for (let i = 0; i <= pos - 1; ++i) {
    result[i] = a[i];
  }
  for (let j = pos; j <= result.length - 1; ++j) {
    result[j] = a[j + 1];
  }
  return result;
}

/**
 *
 * @param {String} s
 */
function stringToArray1d(s) {
  const result = [];
  for (let i = 0; i <= s.length - 1; ++i) result.push(s[i]);
  return result;
}

/**
 *
 * @param {Array} a
 */
function array1dToString(a) {
  let s = "";
  for (let i = 0; i <= a.length - 1; ++i) s += a[i];
  return s;
}

/**
 *
 * @param {Array} a
 */
function array1dRemoveElementAtPos(a, pos) {
  if (pos < 0 || pos > a.length - 1) return a;

  const result = new Array(a.length - 1);

  for (let i = 0; i <= pos - 1; ++i) result[i] = a[i];
  for (let j = pos; j <= result.length - 1; ++j) result[j] = a[j + 1];

  return result;
}

/**
 *
 * @param {String} s
 * @param {Number} pos1
 * @param {Number} pos2
 *
 */
function doubleRemoveElementAtPos(s, pos1, pos2) {
  let result = s;
  if (pos2 > pos1) {
    result = array1dRemoveElementAtPos(result, pos2);
    result = array1dRemoveElementAtPos(result, pos1);
  }

  if (pos2 < pos1) {
    result = array1dRemoveElementAtPos(result, pos1);
    result = array1dRemoveElementAtPos(result, pos2);
  }
  return array1dToString(result);
}

/**
 *
 * @param {String} s1
 */
function isOpenAndCloseType3TheSame(s1) {
  /**
   * -------01234567
   * + s = "(([]){})"
   * + i = 0
   *   + s[i]   = "("
   *   + s[i+1] = "("
   *   + si === sip1 ?
   *     + if true
   *       + i+=2
   *     + if false
   *
   *
   * -------012345
   * + s = "((){})"
   *
   *
   * -------0123
   * + s = "({})"
   *
   *
   * -------01
   * + s = "()"
   *
   *
   * + s = ""
   *
   *
   *
   *
   **/

  let flag = true;
  let s = stringToArray(s1);

  for (let i = 0; i <= s.length - 1; ) {
    const si = s[i];
    const isOpen = isOpenBracket(si);

    if (isOpen) {
      i++;
      continue;
    }

    if (!isOpen) {
      const sim1 = s[i - 1];
      const isTheSameType = isTheSameTypeOfBracket(si, sim1);
      if (!isTheSameType) {
        flag = false;
        break;
      }

      if (isTheSameType) {
        const pos1 = i;
        const pos2 = i - 1;
        s = doubleRemoveElementAtPos(s, pos1, pos2);
        i -= 2;
      }
    }
  }

  return flag;
}

// console.log(
//   "isOpenAndCloseType3TheSame(s1): ",
//   isOpenAndCloseType3TheSame("(([]){})")
// );

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let flag = true;
  const length = s.length;

  if (length % 2 === 0) {
    for (let i = 0; i <= s.length - 1; i += 2) {
      const si = s[i];
      const sip1 = s[i + 1];
      const sip2 = s[i + 2];
      const flag1 = isOpenAndCloseTheSameTypeOfBracket(si, sip1);
      const openAndCloseType3 = si === sip1 && si !== sip2;

      if (openAndCloseType3) {
        flag = isOpenAndCloseType3TheSame(s);
        break;
      }

      if (!flag1) {
        const flag2 = isOpenAndCloseType2TheSame(s);
        flag = flag2;
        break;
      }
    }
  }

  if (length % 2 !== 0) {
    flag = false;
  }

  return flag;
};

function test1() {
  const s = "()";
  const result = isValid(s);
  console.log(result);
}

function test2() {
  const s = "()[]{}";
  const result = isValid(s);
  console.log(result);
}

function test3() {
  const s = "(]";
  const result = isValid(s);
  console.log(result);
}

function test4() {
  const s = "()[}[]";
  const result = isValid(s);
  console.log(result);
}

function test5() {
  const s = "(][){}";
  const result = isValid(s);
  console.log(result);
}

function test6() {
  const s = "()[]";
  const result = isValid(s);
  console.log(result);
}

function test7() {
  const s = "{[]}";
  const result = isValid(s);
  console.log(result);
}

function test8() {
  const s = "(([]){})";
  const result = isValid(s);
  console.log(result);
}

{
  //   test1(); // true
  //   test2(); // true
  //   test3(); // false
  //   test4(); // false
  //   test5(); // false
  //   test6(); // true
  //   test7(); // true
  test8(); // true
}
