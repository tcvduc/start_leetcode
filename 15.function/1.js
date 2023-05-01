/**
 * 1. Calculate function run time
 * - Given a function, calculate
 * function run time
 *
 * - Example:
 * + generateElement(10,000,000)
 * + result = 3:425 - s:ms
 */

/**
 *
 * @param {Number} n
 */
function generateElement(n) {
  const map = new Map();

  for (let i = n; i >= 1; i--) {
    map.set(i, i);
  }

  return map;
}

/**
 *
 * @param {Number} s
 * @param {Number} e
 *
 */
function getDeltaSecond(s, e) {
  if (e >= s) return e - s;
  const tru = 60;
  return tru - s + e;
}

/**
 *
 * @param {Number} s
 * @param {Number} e
 *
 */
function getDeltaMilliSecond(s, e) {
  if (e >= s) return e - s;
  const tru = 1000;
  return tru - s + e;
}

/**
 *
 * @param {Function} functionName
 */
function calculateFunctionRunTime(functionName, ...para) {
  const startTime = new Date();
  const startSecond = startTime.getSeconds();
  const startMillisecond = startTime.getMilliseconds();

  functionName(...para);

  const endTime = new Date();
  const endSecond = endTime.getSeconds();
  const endMillisecond = endTime.getMilliseconds();

  const deltaSecond = getDeltaSecond(startSecond, endSecond);
  const deltaMillisecond = getDeltaMilliSecond(
    startMillisecond,
    endMillisecond
  );

  console.log(`Time: ${deltaSecond}:${deltaMillisecond} - s:ms`);
}

function test1() {
  const n = 10000000;
  console.log("Function generateElement run with: ");
  calculateFunctionRunTime(generateElement, n);
}

{
  test1();
}
