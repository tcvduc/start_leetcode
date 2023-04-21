/**
 * 4. Given two string s1 and s2, find out if
 * those are equal
 *
 * - Example 1
 * + s1: "abc"
 * + s2: "abc"
 * + result: true
 *
 * - Example 2
 * + s1: ""
 * + s2: "abc"
 * + result: false
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

  for (let i = s1.length - 1; i >= 0; --i) {
    if (s1[i] !== s2[i]) return false;
  }

  return true;
}

function test1() {
  const s1 = "abc";
  const s2 = "abc";
  const result = isTwoStringTheSame(s1, s2);
  console.log(result);
}

function test2() {
  const s1 = "";
  const s2 = "abc";
  const result = isTwoStringTheSame(s1, s2);
  console.log(result);
}

function test3() {
  const s1 = "";
  const s2 = "";
  const result = isTwoStringTheSame(s1, s2);
  console.log(result);
}

{
  test1();
  test2();
  test3();
}
