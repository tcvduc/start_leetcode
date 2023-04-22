/**
 * 6. Given two array of 7 digits elements,
 * log horizontally two array on the
 * console screen
 *
 * - Example
 *
 * + a1 = [
 * '(0,1,2)', '(0,1,3)',
 * '(0,1,4)', '(0,2,3)',
 * '(0,2,4)', '(0,3,4)',
 * '(1,3,4)', '(3,3,4)'
 * ]
 *
 *
 * + a2 = [
 * '(0,1,2)', '(0,1,3)',
 * '(0,1,4)', '(0,2,3)',
 * '(0,2,4)', '(0,3,4)',
 * '(1,2,3)', '(1,2,4)',
 * '(1,3,4)', '(2,3,4)'
 * ]
 *
 * + result
 *
 * a1 = [                      a2 = [
 * '(0,1,2)', '(0,1,3)',       '(0,1,2)', '(0,1,3)',
 * '(0,1,4)', '(0,2,3)',       '(0,1,4)', '(0,2,3)',
 * '(0,2,4)', '(0,3,4)',       '(0,2,4)', '(0,3,4)',
 * '(1,3,4)', '(3,3,4)'        '(1,2,3)', '(1,2,4)',
 * ]                           '(1,3,4)', '(2,3,4)'
 *                             ]
 *
 *
 *
 *
 * Working
 *
 */

/**
 *
 * @param {Array} a
 */
function getArrayLength(a) {
  /**
   * -------0 1 2 3 4
   * + a = [1,2,3,4,5]
   * + result = 5
   *
   * + a = []
   * + result = 0
   *
   *
   * + a = [1,2,3,4,5]
   * + i = 0
   * + i = 1
   * + i = 2
   * + i = 3
   * + i = 4
   * + i = 5
   *
   *
   *
   */

  let i = 0;
  while (true) {
    if (a[i] === undefined) {
      break;
    }
    i++;
  }
  return i;
}

/**
 *
 * @param {Number} n
 */
function generateSpace(n) {
  let result = "";
  for (let i = n; i >= 1; i--) result += " ";
  return result;
}

/**
 *
 * @param {Array} a1
 * @param {Array} a2
 *
 *
 */
function logHorizontallyTwoArrayOfSevenDigitsElements(a1, a2) {
  console.log("Log horizontally two array of seven digits element program\n");

  const delta1 = getArrayLength(a1);
  const delta2 = getArrayLength(a2);
  const numberOfSpaces = 7;
  const middleSpacing = generateSpace(numberOfSpaces);

  let arrayBar = "a1 = [                      a2 = [";
  let elementsBar = "";

  if (delta1 < delta2) {
  }

  if (delta1 === delta2) {
  }

  if (delta1 > delta2) {
  }

  console.log(arrayBar);
  console.log(elementsBar);
}

function test1() {
  const a1 = [
    "(0,1,2)",
    "(0,1,3)",
    "(0,1,4)",
    "(0,2,3)",
    "(0,2,4)",
    "(0,3,4)",
    "(1,3,4)",
    "(3,3,4)",
  ];

  const a2 = [
    "(0,1,2)",
    "(0,1,3)",
    "(0,1,4)",
    "(0,2,3)",
    "(0,2,4)",
    "(0,3,4)",
    "(1,2,3)",
    "(1,2,4)",
    "(1,3,4)",
    "(2,3,4)",
  ];

  logHorizontallyTwoArrayOfSevenDigitsElements(a1, a2);
}

{
  test1();
}
