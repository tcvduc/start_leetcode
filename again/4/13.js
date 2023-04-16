/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = new Map();

  romans.set("I", 1);
  romans.set("V", 5);
  romans.set("X", 10);
  romans.set("L", 50);
  romans.set("C", 100);
  romans.set("D", 500);
  romans.set("M", 1000);

  let result = 0;

  const breakLoop = s.length - 1;

  for (let i = 0; i <= breakLoop; ) {
    const si = romans.get(s[i]);
    const sip1 = romans.get(s[i + 1]);
    const sip2 = romans.get(s[i + 2]);

    if (i === breakLoop) {
      result += si;
      break;
    }

    if (si < sip1) {
      result += sip1 - si;
      i += 2;
      continue;
    }

    if (si === sip1) {
      result += si + sip1;
      i += 2;
      continue;
    }

    if (si > sip1) {
      if (sip2 === undefined) {
        result += si + sip1;
        break;
      }

      if (sip1 < sip2) {
        result += si + sip2 - sip1;
        i += 3;
        continue;
      }

      if (sip1 === sip2) {
        result += si + sip1;
        i += 2;
        continue;
      }

      if (sip1 > sip2) {
        result += si + sip1;
        i += 2;
        continue;
      }
    }
  }

  return result;
};

function test1() {
  const s = "XML";
  const result = romanToInt(s);
  console.log(result);
}

test1();
