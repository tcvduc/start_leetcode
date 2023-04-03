/**
 *
 * @param {Number} n
 */
function getNumberLastDigit(n) {
  return n % 10;
}

/**
 *
 * @param {Number} n
 */
function getNumberLength(n) {
  /**
   * + n = 1234
   * + result = 4
   *
   */
  let length = 0;

  while (n > 0) {
    console.log(n);
    n = n / 10;
  }

  return length;
}

/**
 *
 * @param {Number} n
 */
function getNumberFirstDigit(n) {
  const v1 = n / 10;
  const v2 = v1 / 10;
  const v3 = v2 / 10;
  const result = v3.toFixed(0);
  console.log(result);
}

const n1 = 1234;
const lastDigit = getNumberLastDigit(n1);
const firstDigit = getNumberFirstDigit(n1);
const length = getNumberLength(n1);
console.log(n1);
console.log("firstDigit: ", firstDigit);
console.log("lastDigit: ", lastDigit);
console.log("length: ", length);
