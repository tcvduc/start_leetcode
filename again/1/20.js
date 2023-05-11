class Bracket {
  /**
   *
   * @param {Number} type
   * @param {string} value
   * @param {string} shape
   *
   */
  constructor(type, value, shape) {
    this.type = type;
    this.value = value;
    this.shape = shape;
  }
}
const openString = "open";
const closeString = "close";

/**
 *
 * @return {Bracket} map
 */
function getBracketInfo() {
  const map = new Map();

  map.set("(", {
    type: 1,
    value: "open",
    shape: "(",
  });
  map.set("[", {
    type: 2,
    value: "open",
    shape: "[",
  });
  map.set("{", {
    type: 3,
    value: "open",
    shape: "{",
  });

  map.set(")", {
    type: 1,
    value: "close",
    shape: ")",
  });
  map.set("]", {
    type: 2,
    value: "close",
    shape: "]",
  });
  map.set("}", {
    type: 3,
    value: "close",
    shape: "}",
  });

  return map;
}

/**
 *
 * @param {Bracket} s
 */
function isOpenBracket(s) {
  return s.value === openString;
}

/**
 *
 * @param {Bracket} s
 */
function isCloseBracket(s) {
  return s.value === closeString;
}

/**
 *
 * @param {Bracket} s1
 * @param {Bracket} s2
 *
 */
function isBracketTheSameType(s1, s2) {
  return s1.type === s2.type;
}

/**
 *
 * @param {String} s
 */
function stringToArray(s) {
  const result = [];
  const delta = s.length - 1;
  for (let i = 0; i <= delta; ++i) {
    result.push(s[i]);
  }
  return result;
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 *
 */
function array1dRemoveElementAtPos(a, pos) {
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
 * @param {string} ss
 * @return {boolean}
 */
const isValid = function (ss) {
  /**
   * -------01
   * + s = "()"
   * + s = ""
   *
   *
   */

  if (ss.length % 2 !== 0) return false;

  let flag = true;
  let isAllOpenBracket = true;
  let s = stringToArray(ss);
  const brackets = getBracketInfo();
  for (let i = 0; i <= s.length - 1; ) {
    if (i < 0 && s.length === 0) {
      break;
    }

    if (i < 0 && s.length === 1) {
      flag = false;
      break;
    }

    if (i < 0 && s.length !== 0 && s.length !== 1) {
      i++;
    }

    const si = brackets.get(s[i]);
    let flag2 = isOpenBracket(si);

    if (flag2) {
      i++;
      continue;
    }

    if (!flag2) {
      isAllOpenBracket = false;

      if (i - 1 < 0) {
        flag = false;
        break;
      }

      const sim1 = brackets.get(s[i - 1]);
      const flag3 = isOpenBracket(sim1);
      const flag4 = isBracketTheSameType(si, sim1);
      const flag5 = flag3 && flag4;
      if (flag5) {
        const pos1 = i;
        const pos2 = i - 1;
        s = array1dRemoveElementAtPos(s, pos1);
        s = array1dRemoveElementAtPos(s, pos2);

        i -= 2;
        continue;
      }

      if (!flag5) {
        flag = false;
        break;
      }
    }
  }

  if (isAllOpenBracket) {
    flag = false;
  }

  if (s.length !== 0) {
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

function test9() {
  const s = "[";
  const result = isValid(s);
  console.log(result);
}

function test10() {
  const s = "]";
  const result = isValid(s);
  console.log(result);
}

function test11() {
  const s = "]]]";
  const result = isValid(s);
  console.log(result);
}

function test12() {
  const s = "([]){";
  const result = isValid(s);
  console.log(result);
}

function test13() {
  const s = "((";
  const result = isValid(s);
  console.log(result);
}

function test14() {
  const s = "[[[]";
  const result = isValid(s);
  console.log(result);
}

function test15() {
  const s = "()";
  const result = isValid(s);
  console.log(result);
}

{
  // test1(); // true
  // test2(); // true
  // test3(); // false
  // test4(); // false
  // test5(); // false
  // test6(); // true
  // test7(); // true
  // test8(); // true
  // test9(); // false
  // test10(); // false
  // test11(); // false
  // test12(); // false
  // test13(); // false
  // test14(); // false
  test15(); // false
}
