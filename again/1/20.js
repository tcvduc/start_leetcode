/**
 *
 * @param {String} s
 */
function stringToArray(s) {
  const result = [];
  for (let i = 0; i <= s.length - 1; ++i) result.push(s[i]);
  return result;
}

function getBracketInfo() {
  const map = new Map();

  map.set("(", {
    type: 1,
    value: "(",
    data: "open",
  });
  map.set("[", {
    type: 2,
    value: "[",
    data: "open",
  });
  map.set("{", {
    type: 3,
    value: "{",
    data: "open",
  });

  map.set(")", {
    type: 1,
    value: ")",
    data: "close",
  });
  map.set("]", {
    type: 2,
    value: "]",
    data: "close",
  });
  map.set("}", {
    type: 3,
    value: "}",
    data: "close",
  });

  return map;
}

/**
 *
 * @param {Array} a
 * @param {Number} pos
 *
 */
function arrayRemovePositionAtPos(a, pos) {
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
  let flag = true;
  let s = stringToArray(ss);
  const brackets = getBracketInfo();

  for (let i = 0; i <= s.length - 1; ) {}
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
