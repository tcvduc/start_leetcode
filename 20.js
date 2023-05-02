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
 * @param {String} si
 * @param {String} sip1
 *
 */
function isOpenAndCloseTheSameTypeOfBracket(si, sip1) {
  const map = new Map();
  map.set("(", "open1");
  map.set("[", "open2");
  map.set("{", "open3");
  map.set(")", "close1");
  map.set("]", "close2");
  map.set("}", "close3");

  const openType = map.get(si);
  const closeType = map.get(sip1);

  const flag1 = isOpenAndCloseType1(openType, closeType);
  const flag2 = isOpenAndCloseType2(openType, closeType);
  const flag3 = isOpenAndCloseType3(openType, closeType);

  return flag1 || flag2 || flag3;
}

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
      const flag1 = isOpenAndCloseTheSameTypeOfBracket(si, sip1);
      if (!flag1) {
        flag = flag1;
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

{
  test1(); // true
  test2(); // true
  test3(); // false
  test4(); // false
  test5(); // false
  test6(); // true
}
