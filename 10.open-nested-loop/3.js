/**
 * 3. Open nested loop O(n^3) to O(n)
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

  for (let i = n; i >= 1; i--) {
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

function onboardOpenO3nToOn() {
  const n = 4;
  const a = generateArray(n);
  advanceLogArray(a);

  const jikOn3 = [];

  for (let i = 0; i <= a.length - 1 - 1 - 1; i++) {
    for (let j = i + 1; j <= a.length - 1 - 1; j++) {
      for (let k = j + 1; k <= a.length - 1; k++) {
        jikOn3.push(`(${i},${j},${k})`);
      }
    }
  }

  console.log("\nO(n^3)");
  console.log(jikOn3);
}

{
  onboardOpenO3nToOn();
}
