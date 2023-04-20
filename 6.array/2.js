/**
 * 2. Open Nested Loop
 *
 * + From:
 * for
 *   for
 *     for
 * + To:
 * for
 *   for
 *
 *
 * -------0 1 2 3
 * + a = [0,0,1,2]
 *   + i: 0->2
 *     + j: i+1 -> 3
 *     + j: i+1 -> 3
 *   + i: 0
 *     + j: 1
 *     + j: 2
 *     + j: 3
 *   + i: 1
 *     + j: 2
 *     + j: 3
 *   + i: 2
 *     + j: 3
 *
 * (i,j)
 * + (0,1), (0,2), (0,3)
 * + (1,2), (1,3)
 * + (2,3)
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function generateArray1d(n) {
  const result = new Array(0);

  for (let i = 1; i <= n; ++i) {
    result.push(Math.floor(Math.random() * i));
  }

  return result;
}

/**
 *
 * @param {Array} a
 */
function advanceLogArray(a) {
  /**
   * -------0 1 2 3 4
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
 * @param {Array} a1
 * @param {Array} a2
 *
 */
function isTwoArrayTheSame(a1, a2) {
  if (a1.length !== a2.length) return false;

  let flag = true;

  for (let i = a1.length - 1; i >= 0; --i) {
    if (a1[i] !== a2[i]) {
      flag = false;
      break;
    }
  }

  return flag;
}

function openNestedLoopO2nToO1nT1() {
  /* Expected ji result
   * + (i,j)
   *   + (0,1), (0,2), (0,3)
   *   + (1,2), (1,3)
   *   + (2,3)
   *
   */
  const a = generateArray1d(4);

  const jiOn2 = [];

  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1; ++j) {
      jiOn2.push(`(${i},${j})`);
    }
  }

  console.log("\x1b[31m%s\x1b[0m", "ji O(n^2)");
  console.log(jiOn2);

  const jiOn = [];
  let j = 0;
  let isIChange = false;
  let oldI = 0;

  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    if (oldI !== i) {
      oldI = i;
      isIChange = true;
    }

    if (isIChange) {
      j++;

      if (j > a.length - 1) {
        continue;
      }

      jiOn.push(`(${i},${j})`);

      i--;
    }

    if (!isIChange) {
      j++;

      if (j > a.length - 1) {
        j = i + 1;
        continue;
      }

      jiOn.push(`(${i},${j})`);

      i--;
    }
  }

  console.log("\x1b[31m%s\x1b[0m", "ji O(n)");
  console.log(jiOn);
}

function openNestedLoopO2nToOnT2() {
  const a = generateArray1d(6);

  advanceLogArray(a);
  const jiOn2 = [];

  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1; j++) {
      jiOn2.push(`(${i},${j})`);
    }
  }

  console.log(jiOn2);
  const jiOn = [];
  let j = 0;
  let isIChanged = false;

  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    if (isIChanged) {
      j++;

      if (j > a.length - 1) {
        isIChanged = false;
        j = i + 1;
        continue;
      }

      jiOn.push(`(${i},${j})`);

      i--;
    }

    if (!isIChanged) {
      j++;

      if (j > a.length - 1) {
        isIChanged = true;
        j = i + 1;
        continue;
      }

      jiOn.push(`(${i},${j})`);

      i--;
    }
  }

  console.log("\nO(n)");
  console.log(jiOn);
  console.log(isTwoArrayTheSame(jiOn, jiOn2));
}

function onboardOpenNestedLoopO2nToOnT3() {
  const a = generateArray1d(4);
  advanceLogArray(a);

  const jiO2n = [];
  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1; j++) {
      jiO2n.push(`(${i},${j})`);
    }
  }

  console.log("\nO(n^2)");
  console.log(jiO2n);

  let j = 0;
  let isIndexChanged = false;
  const jiOn = [];

  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    if (isIndexChanged) {
      j++;

      if (j > a.length - 1) {
        j = i + 1;
        isIndexChanged = false;
        continue;
      }

      jiOn.push(`(${i},${j})`);

      i--;
    }

    if (!isIndexChanged) {
      j++;

      if (j > a.length - 1) {
        j = i + 1;
        isIndexChanged = true;
        continue;
      }

      jiOn.push(`(${i},${j})`);

      i--;
    }
  }

  console.log("\nO(n)");
  console.log(jiOn);
}

onboardOpenNestedLoopO2nToOnT3();
