/**
 *
 * @return {Map<any,{type:Number,data:string}>} map
 */
function getBracketInfo() {
  const map = new Map();

  map.set("(", {
    type: 1,
    data: "open",
    bracket: "(",
  });
  map.set("[", {
    type: 2,
    data: "open",
    bracket: "[",
  });
  map.set("{", {
    type: 3,
    data: "open",
    bracket: "{",
  });

  map.set(")", {
    type: 1,
    data: "close",
    bracket: ")",
  });
  map.set("]", {
    type: 2,
    data: "close",
    bracket: "]",
  });
  map.set("}", {
    type: 3,
    data: "close",
    bracket: "}",
  });
  return map;
}

/**
 *
 * @param {String} s
 */
function isOpen(s) {
  let flag = true;
  const openString = "open";

  if (s.length !== openString.length) {
    flag = false;
  }

  return flag;
}

/**
 *
 * @param {String} s
 */
function isClose(s) {
  let flag = true;
  const closeString = "close";

  if (s.length !== closeString.length) {
    flag = false;
  }

  return flag;
}

/**
 *
 * @param {String} s
 */
function convertStringToArray(s) {
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
 *
 */
function arrayRemovePositionAtPos(a, pos) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + pos = 2
   * ------------0 1 2 3
   * + result = [1,2,4,5]
   *
   *
   */
  if (pos < 0 || pos > a.length - 1) return a;

  const result = new Array(a.length - 1);
  for (let i = 0; i <= pos - 1; ++i) result[i] = a[i];
  for (let j = pos; j <= result.length - 1; ++j) result[j] = a[j + 1];
  return result;
}

/**
 * @param {string} ss
 * @return {boolean}
 */
var isValid = function (ss) {
  /**
   *--------01234
   * + s = "([]){"
   *   + i = 2
   *
   *--------0
   * + s = "{"
   *   + i = 0
   *
   *
   */

  let flag = true;
  let s = convertStringToArray(ss);
  let isAllOpenBracket = true;
  const brackets = getBracketInfo();

  for (let i = 0; i <= s.length - 1; ) {
    if (i === -1) {
      i++;
    }

    if (i === 0 && s.length === 0) {
      break;
    }

    const si = brackets.get(s[i]);
    const isOpenBracket = isOpen(si.data);

    if (isOpenBracket) {
      i++;
      continue;
    }

    if (!isOpenBracket) {
      // s[i] now is close bracket
      isAllOpenBracket = false;

      if (i - 1 < 0) {
        flag = false;
        break;
      }

      const sim1 = brackets.get(s[i - 1]);

      const sim1Type = sim1.type;
      const siType = si.type;
      const isTheSameType = siType === sim1Type;

      if (isTheSameType) {
        const pos1 = i;
        const pos2 = i - 1;
        s = arrayRemovePositionAtPos(s, pos1);
        s = arrayRemovePositionAtPos(s, pos2);

        i -= 2;
        continue;
      }

      if (!isTheSameType) {
        flag = false;
        break;
      }
    }
  }

  if (isAllOpenBracket || s.length !== 0) {
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
  test12(); // false
}
