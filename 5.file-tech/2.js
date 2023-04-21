/**
 * 2. Given an array of elements concept, write file tech concept.
 * Use write file tech to create a file that contains
 * an array has 10000 elements.
 * Element type: string.
 *
 *
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

function generateArrayOf10000Elements() {
  const result = [];

  for (let i = 10000; i >= 1; --i) {
    const length = generateRandomNumber(0, 10);
    const stringContent = generateRandomString(length);
    result.push(stringContent);
  }

  return result;
}

function writeArrayOf10000Elements() {
  const fs = require("fs");
  const path = __dirname + "/2.txt";
  const data = generateArrayOf10000Elements();
  console.log(data);
  // fs.writeFileSync(path, data.toString(), {});
}

{
  writeArrayOf10000Elements();
}
