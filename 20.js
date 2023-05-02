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
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  console.log(s);
  let flag = true;
  const length = s.length;

  if (length % 2 === 0) {
    for (let i = 0; i <= s.length - 1; ) {
      const si = s[i];
      const sip1 = s[i + 1];
      console.log(si);
      console.log(sip1);
      if (si !== sip1) {
        flag = false;
        break;
      }

      i += 2;
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
  //   test2(); // true
  //   test3(); // true
  //   test4(); // false
  //   test5(); // false
  //   test6(); // true
}
