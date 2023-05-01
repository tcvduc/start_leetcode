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
   */

  let ns = n.toString();

  if (ns.length < 3) {
    return ns;
  }

  let result = "";
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

  return result;
}

console.log(addCommaToLargeNumber(1000000));

function test1() {
  /**
   *
   */
  const startTime = new Date();
  const startMiliseconds = startTime.getMilliseconds();

  const n = 1000000;
  const m = generateMapElement(n);
  const factor = 50;
  const result = isMapLargeElementContainsFactor(m, factor);

  const endTime = new Date();
  const endMiliseconds = endTime.getMilliseconds();

  const nComma = addCommaToLargeNumber(n);
  console.log(result);
  console.log(`${nComma} elements`);
  console.log("Time: ", endMiliseconds - startMiliseconds, " ms");
}

{
  test1();
}
