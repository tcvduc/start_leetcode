class Bracket {
  constructor(type, value, shape) {
    this.type = type;
    this.value = value;
    this.shape = shape;
  }
}
/**
 *
 * @param {String} s
 */
function stringToArray(s) {
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
 *
 * @returns {Map<keyof,Bracket>} map
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
 * @param {string} ss
 * @return {boolean}
 */
var isValid = function (ss) {
  let flag = true;
  const bracketInfo = getBracketInfo();
  const s = stringToArray(ss);

  for (let i = 0; i <= s.length - 1; ) {
    const si = bracketInfo.get(s[i]);

    if (si.value === "open") {
      i++;
      continue;
    }

    if (si.value === "close") {
      if (i - 1 < 0) {
        flag = false;
        break;
      }
      const sim1 = bracketInfo.get(s[i - 1]);
      //   if(sim1.value)
    }
  }
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
  test1(); // true
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
  //   test15(); // false
}
