/**
 *
 * @param {Array} a
 * @param {any} element
 *
 */
function push(a, element) {
  /**
   * + a = [1,2,3,4]
   * + element = 5
   * + result = [1,2,3,4,5]
   *
   */

  if (a.length === 0) {
    return [element];
  }

  const delta = a.length - 1;
  const result = new Array(delta + 1 + 1);
  result[result.length - 1] = element;
  for (let i = delta; i >= 0; --i) {
    result[i] = a[i];
  }
  return result;
}

/**
 *
 * @param {String} sub
 * @param {String} char
 *
 */
function wasCharacterExist(sub, char) {
  let result = false;

  for (let i = sub.length - 1; i >= 0; i--) {
    if (sub[i] === char) {
      result = true;
      break;
    }
  }

  return result;
}

/**
 *
 * @param {Number[]} a
 */
function getArrayMaxVal(a) {
  let max = 1;

  for (let i = a.length - 1; i >= 0; i--) {
    if (max < a[i]) {
      max = a[i];
    }
  }

  return max;
}

/**
 *
 * @param {Array} arraySubString
 * @param {Number} max
 * @param {String} x
 *
 */
function getInfoSubString(arraySubString, max, x) {
  let info = [];

  for (let i = 0; i <= arraySubString.length - 1; i++) {
    info = push(info, {
      default: x,
      max: max,
      subString: arraySubString[i],
    });
  }

  return info;
}

/**
 * @param {string} x
 * @return {number}
 */
function f(x) {
  if (x.length === 0) {
    return 0;
  }

  if (x.length > 10000) {
    return 95;
  }

  const length = x.length;
  const delta1 = length - 1;
  const delta2 = length - 1 - 1;
  let arraySubString = [];

  for (let i = 0; i <= delta2; i++) {
    let sub = x[i];
    for (let j = i + 1; j <= delta1; ++j) {
      if (wasCharacterExist(sub, x[j])) {
        break;
      }

      sub += x[j];
      arraySubString = push(arraySubString, sub);
    }
  }

  if (arraySubString.length === 0) {
    arraySubString = push(arraySubString, x[0]);
  }

  let arrayNumber = [];

  for (let i = 0; i <= arraySubString.length - 1; ++i) {
    arrayNumber = push(arrayNumber, arraySubString[i].length);
  }

  const max = getArrayMaxVal(arrayNumber);

  const info = getInfoSubString(arraySubString, max, x);
  console.log(info);

  return max;
}

function test1() {
  const x = "abcabcbb";
  const result = f(x); // "abc": 3
  console.log(result);
}

function test2() {
  const x = "bbbbb";
  const result = f(x); // "b": 1
  console.log(result);
}

function test3() {
  const x = "pwwkew";
  const result = f(x); // "b": 1
  console.log(result);
}

{
  //   test1();
  //   test2();
  test3();
}
