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

/**
 *
 * @param {String} s1
 * @param {String} s2
 *
 */
function isTwoStringTheSame(s1, s2) {
  if (s1.length !== s2.length) return false;

  for (let i = s1.length - 1; i >= 0; i--) {
    if (s1[i] !== s2[i]) return false;
  }

  return true;
}

/**
 *
 * @param {String[]} as1
 * @param {String[]} as2
 *
 */
function isTwoArrayStringTheSame(as1, as2) {
  if (as1.length !== as2.length) return false;

  for (let i = as1.length - 1; i >= 0; --i) {
    const flag2 = isTwoStringTheSame(as1[i], as2[i]);

    if (!flag2) {
      return false;
    }
  }

  return true;
}

function openNestedLoopOn3ToOn2() {
  const a = generateArray(8);
  advanceLogArray(a);

  const jikOn3 = [];

  for (let i = 0; i <= a.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1 - 1; j++) {
      for (let k = j + 1; k <= a.length - 1; k++) {
        jikOn3.push(`(${i},${j},${k})`);
      }
    }
  }

  console.log("\nO(n^3)");
  console.log(jikOn3);

  console.log("\nO(n^2)");
  const jikOn2 = [];
  for (let i = 0; i <= a.length - 1 - 1 - 1; i++) {
    let k = i + 1;

    for (let j = i + 1; j <= a.length - 1 - 1; j++) {
      k++;

      if (k > a.length - 1) {
        k = j + 1;
        continue;
      }

      jikOn2.push(`(${i},${j},${k})`);

      j--;
    }
  }

  console.log(jikOn2);
  console.log(
    "Is two array the same: ",
    isTwoArrayStringTheSame(jikOn2, jikOn3)
  );
}

{
  openNestedLoopOn3ToOn2();
}
