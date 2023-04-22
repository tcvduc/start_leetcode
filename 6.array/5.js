/**
 * 5. Given two array of elements, log
 * horizontally two array on console screen.
 *
 * - Example 1
 * + a1 = [1,2,3,4,5]
 * + a2 = [6,7,8]
 * + result
 *
 * ------0 1 2 3 4     ------0 1 2
 * a1 = [1,2,3,4,5]    a2 = [6,7,8]
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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param {Number} n
 */
function generateArray(n) {
  const result = [];
  const min = 0;
  const max = 9;

  for (let i = n; i >= 1; --i) {
    const rand = generateRandomNumber(min, max);
    result.push(rand);
  }

  return result;
}

/**
 *
 * @param {Number} n
 */
function generateSpace(n) {
  /***
   * + n = 4
   * + result = "    "
   *
   * + n = 0
   * + result = ""
   */
  let result = "";

  for (let i = n; i >= 1; i--) result += " ";

  return result;
}

/**
 *
 * @param {Array} a1
 * @param {Array} a2
 *
 */
function logHorizontallyTwoArrays(a1, a2) {
  const middleSpacingNumber = 4;
  let indexBar = "------";
  let arrayBar = "a1 = [";
  let middleSpacingForIndexBar = generateSpace(middleSpacingNumber);
  let middleSpacingForArrayBar = generateSpace(middleSpacingNumber - 1);

  for (let i = 0; i <= a1.length - 1; ++i) {
    if (i === a1.length - 1) {
      indexBar += i;
      arrayBar += a1[i] + "]";
      break;
    }
    indexBar += i + " ";
    arrayBar += a1[i] + ",";
  }

  indexBar += middleSpacingForIndexBar;
  indexBar += "------";

  arrayBar += middleSpacingForArrayBar;
  arrayBar += "a2 = [";
  for (let j = 0; j <= a2.length - 1; j++) {
    if (j === a2.length - 1) {
      indexBar += j;
      arrayBar += a2[j] + "]";
      break;
    }
    indexBar += j + " ";
    arrayBar += a2[j] + ",";
  }

  console.log(indexBar);
  console.log(arrayBar);
}

function test1() {
  const a1 = generateArray(9);
  const a2 = generateArray(9);

  logHorizontallyTwoArrays(a1, a2);
}

{
  test1();
}
