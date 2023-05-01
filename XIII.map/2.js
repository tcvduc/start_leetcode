/**
 * 2. Map large elements contains factor element
 * - Given a map large elements and a factor
 * element, find if a factor element is
 * inside the map.
 *
 * - Example 1
 * + m = {1=>0,-1=>1,2=>2,-3=>3,..10,000 elements}
 * + element = -1
 * + result = true
 *
 */

/**
 *
 * @param {Number} n
 */
function generateMapElement(n) {
  const map = new Map();

  for (let i = 1; i <= n; ++i) {
    const key = i;
    const value = i - 1;
    map.set(key, value);
  }

  return map;
}

/**
 *
 * @param {Map} m
 * @param {any} element
 */
function isMapLargeElementContainsFactor(m, factor) {
  let flag = m.has(factor);
  return flag;
}

/**
 *
 * @param {Number} n
 */
function addCommaToLargeNumber(n) {
  /**
   * + n = 1000000
   * + result = 1,000,000
   *
   * + n = 10,000,000
   */

  let ns = n.toString();

  if (ns.length < 3) {
    return ns;
  }

  let result = "";

  if (ns < 10000000) {
    result += ns[0] + ",";

    let countGroupThree = 0;

    for (let i = 1; i <= ns.length - 1; ++i) {
      countGroupThree++;

      if (i === ns.length - 1) {
        result += ns[i];
        break;
      }

      if (countGroupThree === 3) {
        countGroupThree = 0;
        result += ns[i] + ",";
        continue;
      }

      result += ns[i];
    }
  } else {
    result += ns[0] + ns[1] + ",";

    let countGroupThree = 0;

    for (let i = 2; i <= ns.length - 1; ++i) {
      countGroupThree++;

      if (i === ns.length - 1) {
        result += ns[i];
        break;
      }

      if (countGroupThree === 3) {
        countGroupThree = 0;
        result += ns[i] + ",";
        continue;
      }

      result += ns[i];
    }
  }

  return result;
}

/**
 *
 * @param {Number} s
 * @param {Number} e
 *
 */
function getDeltaTimeMillisecond(s, e) {
  if (e >= s) return e - s;
  const tru = 1000;
  return tru - s + e;
}

/**
 *
 * @param {Number} s
 * @param {Number} e
 *
 */
function getDeltaTimeSecond(s, e) {
  if (e >= s) return e - s;
  const tru = 60;
  return tru - s + e;
}

function test1() {
  const startTime = new Date();
  const startSeconds = startTime.getSeconds();
  const startMilliseconds = startTime.getMilliseconds();

  const n = 10000000;
  const m = generateMapElement(n);
  const factor = 50;
  const result = isMapLargeElementContainsFactor(m, factor);

  const endTime = new Date();
  const endSeconds = endTime.getSeconds();
  const endMilliseconds = endTime.getMilliseconds();

  const nComma = addCommaToLargeNumber(n);
  console.log(result);
  console.log(`${nComma} elements`);
  const deltaTimeMillisecond = getDeltaTimeMillisecond(
    startMilliseconds,
    endMilliseconds
  );
  const deltaTimeSecond = getDeltaTimeSecond(startSeconds, endSeconds);
  console.log(`Time: ${deltaTimeSecond}:${deltaTimeMillisecond} s:ms`);
}

{
  test1();
}
