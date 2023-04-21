/**
 * 2. Given a positive number n
 * let's generate random string
 * with n length.
 *
 * - Example 1
 * + n = 3
 * + result = "abc"
 *
 * - Example 2
 * + n = 0
 * + result = ""
 *
 * - Example 3
 * + n = 10
 * + result = "abcqwertyu"
 *
 *
 */

/**
 *
 * @param {Number} min
 * @param {Number} max
 *
 */
function generateRandomNumber(min, max) {
  /**
   * + min: 5
   * + max: 10
   * + result: [5,10]
   *
   * + math.floor
   * + math.random: [0,0.9]
   * + min: 5
   * + max: 10
   * + result: [5,10]
   *
   * + floor
   *   + [5,10.e]
   *   + [5,10]
   *
   *  + floor(delta x (max - min + 1) + min)
   *  + [0,0.9] x (10 - 5 + 1) + 5
   *    + [0,0.9] x 6 + 5
   *    + [0,5.e] + 5
   *    + [5,10.e]
   *    + [5,10]
   *
   */
  const delta = Math.random();
  const result = Math.floor(delta * (max - min + 1) + min);
  return result;
}

/**
 *
 * @param {Number} n
 */
function generateRandomString(n) {
  if (n === 0) return "";

  let result = "";

  const characters =
    "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+[]{}\\|;':,./<>?";

  const min = 0;
  const max = characters.length - 1;
  for (let i = n; i >= 1; --i) {
    const randomIndex = generateRandomNumber(min, max);
    result += characters[randomIndex];
  }

  return result;
}

function test1() {
  const n = 3;
  const result = generateRandomString(n);
  console.log(result);
}

function test2() {
  const n = 0;
  const result = generateRandomString(n);
  console.log(result);
}

function test3() {
  const n = 10;
  const result = generateRandomString(n);
  console.log(result);
}

{
  test1();
  test2();
  test3();
}
