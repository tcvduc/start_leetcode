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

function openNestedLoopO2nToO1n() {
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

openNestedLoopO2nToO1n();
