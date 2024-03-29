/**
 * 3. Open Nested Loop O(n^3) To O(n^2)
 *
 * - From
 * for
 *  for
 *   for
 *
 * - To
 * for
 *  for
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function generateArray1d(n) {
  const result = [];

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
 * @param {String[]} as1
 * @param {String[]} as2
 *
 */
function isTwoArrayStringTheSame(as1, as2) {
  /**
   * Problem: Given two array of string, find out
   * if both of it are equal.
   *
   * - Example 1
   * + as1: ["abc","def"]
   * + as2: ["abc","def"]
   * + result: true
   *
   * - Example 2
   * + as1: ["abc"]
   * + as2: ["abc","def"]
   * + result: false
   *
   * - Example 3
   * + as1: []
   * + as2: []
   * + result: true
   *
   * - Example 4
   * + as1: []
   * + as2: ["abc","def"]
   * + result: false
   *
   * - Example 5
   * + as1: ["abc","def"]
   * + as2: []
   * + result: false
   *
   * - Example 6
   * + as1: ["abc","defg","hjkl","qwerty"]
   * + as2: ["abc","defg","hjkl","qwerty"]
   * + result: true
   *
   * - Example 7
   * + as1: ["abc","defg","hjkl","qwerty"]
   * + as2: ["abc","defg","hjkl","qwerty2"]
   * + result: false
   *
   * - Example 8
   * + as1: ["123456",".,.,.,.,","[][][][]","qwerty"]
   * + as2: ["123456",".,.,.,.,","[][][][]","qwerty"]
   * + result: true
   *
   */
}

function onboardOpenNestedLoopOn3ToOn2Try1() {
  const a = generateArray1d(6);
  advanceLogArray(a);

  const jikOn3 = [];

  for (let i = 0; i <= a.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1 - 1; ++j) {
      for (let k = j + 1; k <= a.length - 1; ++k) {
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
}

onboardOpenNestedLoopOn3ToOn2Try1();
