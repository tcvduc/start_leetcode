/**
 * 3. Open nested loop from O(n^3) to O(n^2)
 *
 * - Example 1
 * + from
 * for
 *   for
 *     for
 *
 * + to
 * for
 *   for
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
   * + floor, rand [0,0.9]
   *
   * + [0,0.9] x (10 + 1 - 5) + 5
   * + [0,10.e]
   * + [0,10]
   *
   * Equation
   * + delta: Math.random()
   * + math.floor(delta * (max + 1 - min)) + min
   *
   *
   *
   */
  const delta = Math.random();
  return Math.floor(delta * (max - min + 1)) + min;
}

/**
 *
 * @param {Number} n
 */
function generateArray(n) {
  const result = [];

  for (let i = n; i >= 1; --i) {
    const randomNumber = generateRandomNumber(0, 9);
    result.push(randomNumber);
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function advanceLogArray(a) {
  /**
   * + a = [1,2,3,4,5]
   * + result
   * -----0 1 2 3 4
   * a = [1,2,3,4,5]
   *
   */
  let indexBar = "-----";
  let arrayBar = "a = [";

  for (let i = 0; i <= a.length - 1; ++i) {
    if (i === a.length - 1) {
      indexBar += i;
      arrayBar += a[i] + "]";
      break;
    }

    indexBar += i + " ";
    arrayBar += a[i] + ",";
  }

  console.log(indexBar);
  console.log(arrayBar);
}

function openNestedLoopOn3ToOn2() {
  const a = generateArray(4);
  advanceLogArray(a);
}

{
  openNestedLoopOn3ToOn2();
}
