/**
 * 13. Roman to Integer
 * - Roman numerals are represent by seven different
 * symbols: I, V, X, L, C, D and M
 *
 * Symbol Value
 * I      1
 * V      5
 * X      10
 * L      50
 * C      100
 * D      500
 * M      1000
 *
 * - For example, 2 is written as "II" in Roman numeral,
 * just two ones added together. 12 is written as "XII",
 * which is simply X + II. The number 27 is written as "XXVII"
 * which is XX + V + II.
 * - Roman numerals are written largest to smallest from
 * left to right. However, the numeral for four is not IIII.
 * Instead, the number four is written as IV. Because the one
 * is before the five we subtract it making four. The same
 * principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used
 * + I can be placed before V(5) and X(10) to make 4 and 9
 * + X can be placed before L(50) and C(100) to make 40 and 90
 *   + XL: 40
 *   + XC: 90
 * + C can be placed before D(500) and M(1000) to make 400
 * and 900
 *   + CD: 500
 *   + CM: 1000
 * - Given a roman numeral, convert it to an integer
 *
 * - Example 1
 * + input: s = "III"
 * + output: 3
 * + explanation: III = 3
 *
 * - Example 2
 * + input: s = "LVIII"
 * + output: 58
 * + explanation:
 *   + L = 50
 *   + V = 5
 *   + III = 3
 *   + LVIII = 50 + 5 + 3 = 58
 *
 * - Example 3
 * + input: s = "MCMXCIV"
 * + output: 1994
 * + explanation:
 *   + M = 1000
 *   + CM = 900
 *   + XC = 90
 *   + IV = 4
 *     + MCMXCIV = 1000 + 900 + 90 + 4
 *     + MCMXCIV = 1900 + 90 + 4
 *     + MCMXCIV = 1990 + 4
 *     + MCMXCIV = 1994
 *
 * - Constraints
 * + 1 <= s.length <= 15
 * + s contains only the characters ('I','V','X','L','C','D','M')
 *   + I: 1
 *   + V: 5
 *   + X: 10
 *   + L: 50
 *   + C: 100
 *   + D: 500
 *   + M: 1000
 * + It is guaranteed that s is a valid roman numeral in
 * range [1,3999]
 *
 *
 *
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  /*
   *   + I: 1
   *   + V: 5
   *   + X: 10
   *   + L: 50
   *   + C: 100
   *   + D: 500
   *   + M: 1000
   *
   *   + IV: 4
   *   + IX: 9
   *   + IL: 49
   *   + IC: 99
   *   + ID: 499
   *   + IM: 999
   *
   *   + VX: 5
   *
   * + MCMXCIV
   *   + if s[i] < s[i+1]
   *     + result = s[i+1].val - s[i].val
   *     + i+=2
   *   + if s[i] > s[i+1]
   *     + result = s[i].val + s[i+1].val
   *     + i+=2
   *
   * -------012
   * + s = "III"
   * + s.lenght = 3
   * + i: 0
   *   + i+=2
   * + if s[i] === s.length
   *   + result += s[i]
   *
   * -------0123
   * + s = "XIII"
   * + s.length: 4
   * + i: 0
   *   + i+=2
   * + i: 2
   *   + i==2
   * + i: 4
   *
   * 0123
   * XIII
   *
   * + i: 4
   *   + if i>s.length - 1
   *     + const sim1 = s[i - 1]
   *
   *
   * + LVIII
   *   + I: 1
   *   + V: 5
   *   + L: 50
   * + LVIII: 50 + 5 + 1 + 1 + 1
   * + LVIII: 55 + 3
   * + LVIII: 58
   *
   * + MCMXCIV: 1000 + 900 + 90 + 4 = 1994
   *   + I: 1
   *   + V: 5
   *   + X: 10
   *   + C: 100
   *   + M: 1000
   *
   * + MCMXCVI
   * + I: 1
   * + V: 5
   * + X: 10
   * + C: 100
   * + M: 1000
   * + MCMXCVI: 1000 + 900 + 90 + 5 + 1
   * + MCMXCVI: 1996
   *
   *---0123456
   * + MCMXCVI
   *
   *
   * + i: 0
   *   + M: 1000
   *   + C: 100
   *   + M: 1000
   *   + result: 1000 + 900 = 1900
   * + i: 3
   *   + X: 10
   *   + C: 100
   *   + V: 5
   *   + result: 90 + 5 = 95
   *   + result: 1995
   *
   *
   * 0123456
   * MCMXCVI
   * + 1990 + 6 = 1996
   *
   *
   *
   *
   */
  const map = new Map();

  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let result = 0;

  for (let i = 0; i <= s.length - 1; ) {
    const si = map.get(s[i]);

    if (i === s.length - 1) {
      result += si;
      break;
    }

    const sip1 = map.get(s[i + 1]);

    if (si < sip1) {
      result += sip1 - si;
    }

    if (si >= sip1) {
      const sip2 = map.get(s[i + 2]);

      if (sip2 === undefined) {
        result += si + sip1;
        break;
      }

      if (sip1 < sip2) {
        const delta = sip2 - sip1;
        result += si + delta;
        i += 3;

        continue;
      }

      if (sip1 >= sip2) {
        result += si + sip1;
      }
    }

    i += 2;
  }

  return result;
};

function test1() {
  const s = "III";
  const result = romanToInt(s);
  console.log(result);
}

function test2() {
  const s = "LVIII";
  const result = romanToInt(s);
  console.log(result);
}

function test3() {
  const s = "MCMXCIV";
  const result = romanToInt(s);
  console.log(result);
}

function test4() {
  const s = "MCMXCVI";
  const result = romanToInt(s);
  console.log(result);
}

{
  //   test1();
  //   test2();
  //   test3();
  test4();
}
