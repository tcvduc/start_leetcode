/**
 * 13. Roman To Integer
 * - Roman numerals are represented by seven
 * different symbols: I, V, X, L, C, D and M
 *
 * - Chart
 * Symbol  Value
 * I       1
 * V       5
 * X       10
 * L       50
 * C       100
 * D       500
 * M       1000
 *
 * - Rules
 * + Usually written largest to smallest from left to right
 * + if small to large from left to right subtract it, large
 * subtract small
 *
 * - Example 1
 * + input: III
 * + output: 3
 * + explain:
 *   + I: 1
 *   + 1 + 1 + 1 = 3
 *
 * - Example 2
 * + input: IV
 * + output: 4
 * + explain: IV = 1 5 = 5 - 1 = 4
 *
 * - Example 3
 * + input: MMLCD
 * + output:
 * + explain:
 *   + MMLCD = 1000 + 1000 + 50 + 100 + 500
 *   + MMLCD = 2000 + 50 + 500
 *   + MMLCD = 2050 + 500
 *   + MMLCD = 2550
 *
 * 01234
 * MMLCD
 *
 */

/**
 * @param {string} s
 * @return {number}
 *
 */
var romanToInt = function (s) {
  /*
   *
   * I       1
   * V       5
   * X       10
   * L       50
   * C       100
   * D       500
   * M       1000
   * --01234
   * + MMLCD
   * + 1000 + 1000 + 50 + 100 + 500
   * + 2000 + 50 + 500
   * + 2050 + 500
   * + 2550
   *
   */

  const romans = new Map();

  romans.set("I", 1);
  romans.set("V", 5);
  romans.set("X", 10);
  romans.set("L", 50);
  romans.set("C", 100);
  romans.set("D", 500);
  romans.set("M", 1000);

  let result = 0;

  for (let i = 0; i <= s.length - 1; ) {
    const si = romans.get(s[i]);
    const sip1 = romans.get(s[i + 1]);
    const sip2 = romans.get(s[i + 2]);

    if (i === 2) {
      console.log("i = ", 2);
      console.log("si ", si);
      console.log("sip1 ", sip1);
      console.log("sip2 ", sip2);
      console.log("result ", result);
    }

    if (si < sip1) {
      result += sip1 - si;
      i += 2;
      continue;
    }

    if (si >= sip1) {
      if (sip2 === undefined) {
        result += si + sip1;
        i += 2;
        continue;
      }

      if (sip1 >= sip2) {
        result += si + sip1 + sip2;
        i += 3;
        continue;
      }

      if (sip1 < sip2) {
        result += si + sip2 - sip1;
        i += 3;
        continue;
      }
    }
  }

  return result;
};

function test1() {
  const s = "III";
  const result = romanToInt(s); // 3
  console.log(result);
}

function test2() {
  const s = "IV";
  const result = romanToInt(s); // 4
  console.log(result);
}

function test3() {
  const s = "MMLCD";
  const result = romanToInt(s); // 2550
  console.log(result);
}

{
  //   test1();
  //   test2();
  test3();
}
