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

/**
 *
 * @param {String} s1
 * @param {String} s2
 *
 */
function isTwoStringTheSame(s1, s2) {
  if (s1.length !== s2.length) return false;

  for (let i = s1.length - 1; i >= 0; --i) {
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
function isTwoArrayOfStringTheSame(as1, as2) {
  if (as1.length !== as2.length) return false;

  for (let i = as1.length - 1; i >= 0; --i) {
    const s1i = as1[i];
    const s2i = as2[i];
    if (!isTwoStringTheSame(s1i, s2i)) return false;
  }

  return true;
}

function onboardOpenO3nToOn() {
  const n = 5;
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

  console.log("\nO(n)");

  let j = 0;
  let k = 1;
  let isKMeetLimit = false;
  let isKUpdate = false;
  const jikOn = [];

  for (let i = 0; i <= a.length - 1 - 1 - 1; i++) {
    if (isKMeetLimit) {
      j++;
      k = j + 1;
      isKMeetLimit = false;
      isKUpdate = true;

      jikOn.push(`(${i},${j},${k})`);

      i--;
      continue;
    }

    if (j === a.length - 1 - 1) {
      if (k === a.length - 1) {
        i++;
        jikOn.push(`(${i},${j},${k})`);
      }
    }

    if (j < a.length - 1 - 1) {
      if (isKUpdate) {
        j--;
        isKUpdate = false;
      }

      j++;
      k++;

      if (k > a.length - 1) {
        isKMeetLimit = true;
        i--;
        continue;
      }

      if (!isKMeetLimit) {
        jikOn.push(`(${i},${j},${k})`);

        i--;
        j--;
      }
    }
  }

  console.log(jikOn);
  console.log(isTwoArrayOfStringTheSame(jikOn, jikOn3));
}

{
  onboardOpenO3nToOn();
}
