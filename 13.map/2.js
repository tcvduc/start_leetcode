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
  const min = 0;
  const max = 9;

  for (let i = 1; i <= n; ++i) {
    const key = Math.floor(Math.random() * (max - min + 1)) + min;
    const value = i;
    // map.set(key, value);
    map.set(1, i);
    console.log(map);
  }

  return map;
}

/**
 *
 * @param {Map} m
 * @param {any} element
 */
function mapLargeElementContainsFactor(m, factor) {}

function test1() {
  const n = 10000;
  const m = generateMapElement(n);
  console.log(m);
}

{
  test1();
}
