/**
 *
 * @param {Number} n
 */
function getNumberLength(n) {
  /**
   * + n = 1234
   * + result = 4
   * + Explanation: 1234 counted elements is 4
   *
   * + const length = 0
   *
   * + length = 1
   *   + v1 = 1234 % 10 = 4
   *   + v2 = 1234 - v1 = 1230
   *   + v3 = 1230 / 10 = 123
   * + length = 2
   *   + v1 = 123 % 10 = 3
   *   + v2 = 123 - 3  = 120
   *   + v3 = 120 / 10 = 12
   * + length = 3
   *   + v1 = 12 % 10 = 2
   *   + v2 = 12 - 2 = 10
   *   + v3 = 10 / 10 = 1
   * + length = 4
   *   + v1 = 1 % 10 = 1
   *   + v2 = 1 - 1 = 0
   *   + v3 = 0 / 10 = 0
   *
   * return length
   *
   * -- -------------
   * -- code
   * -- -------------
   * let length = 0
   * let temporary = n;
   *
   * while(temporary !== 0){
   *   const v1 = temporary % 10;
   *   const v2 = temporary - v1;
   *   const v3 = v2 / 10;
   *   temporary = v3;
   *   length++;
   * }
   *
   */
  let length = 0;
  let temporary = n;

  while (temporary !== 0) {
    const v1 = temporary % 10;
    const v2 = temporary - v1;
    const v3 = v2 / 10;
    temporary = v3;
    length++;
  }

  return length;
}

/**
 *
 * @param {Number} n
 */
function fx(n) {
  console.log("n = ", n);
  console.log("n.length = ", getNumberLength(n));

  const delta1 = n % 10;
  const delta2 = n - delta1;
  const delta3 = delta2 / 10;
  const delta4 = delta3 % 10;

  console.log(delta4);
}

function test1() {
  const n1 = 1234;
  const n2 = 123;
  const n3 = 12;
  const n4 = 1;
  const n5 = 0;

  const result1 = getNumberLength(n1);
  const result2 = getNumberLength(n2);
  const result3 = getNumberLength(n3);
  const result4 = getNumberLength(n4);
  const result5 = getNumberLength(n5);

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);
}

{
  const n = 1234;
  const result = fx(n);
  console.log(result);

  test1();
}
