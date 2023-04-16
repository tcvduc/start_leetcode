/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  /* Symbol       Value
   * I             1
   * V             5
   * X             10
   * L             50
   * C             100
   * D             500
   * M             1000
   *
   * --01234567
   * + MCDLXXVI
   *   + 1000 + 100 + 500 + 50
   *   + 1000 + 400 + 50
   *   + 1450
   *   + i = 3
   *     + si = 50
   *     + sip1 = 10
   *     + sip2 = 10
   */
  const romans = new Map();

  romans.set("I", 1);
  romans.set("V", 5);
  romans.set("X", 10);
  romans.set("L", 50);
  romans.set("C", 100);
  romans.set("D", 500);
  romans.set("M", 1000);

  let output = 0;

  for (let i = 0; i <= s.length - 1; ) {
    const si = romans.get(s[i]);
    const sip1 = romans.get(s[i + 1]);
    const sip2 = romans.get(s[i + 2]);

    if (i === s.length - 1) {
      output += si;
      break;
    }

    if (si < sip1) {
      output += sip1 - si;
      i += 2;
      continue;
    }

    if (si === sip1) {
      output += si + sip1;
      i += 2;
      continue;
    }

    if (si > sip1) {
      if (sip2 === undefined) {
        output += si + sip1;
        i += 2;
        continue;
      }

      if (sip1 < sip2) {
        output += si + sip2 - sip1;
        i += 3;
        continue;
      }

      if (sip1 >= sip2) {
        output += si + sip1;
        i += 2;
        continue;
      }
    }
  }

  return output;
};

function test1() {
  const s = "XXIV";
  const output = romanToInt(s);
  console.log(output); // 24
}

function test2() {
  const s = "MCDLXXVI";
  const output = romanToInt(s);
  console.log(output); // 24
}

{
  //   test1();
  test2();
}
