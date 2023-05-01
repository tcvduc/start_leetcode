/**
 * 9. i,j,k loop forwards and backwards
 * - Loop i,j,k forwards and backwards
 * i,j,k triplet unique.
 *
 * - Example 1
 * -------0 1 2 3 4
 * + a = [1,2,3,4,5]
 * + ijk = [
 * `(0,1,2)`,`(0,1,3)`,`(0,1,4)`,
 * `(0,2,3)`,`(0,2,4)`,`(0,3,4)`,
 * `(1,2,3)`,`(1,2,4)`,`(1,3,4)`,
 * `(2,3,4)`
 * ]
 *
 */

/**
 *
 * @param {Array} a
 */
function loopIJK(a) {
  const ijkForward = [];
  const ijkBackward = [];

  for (let i = 0; i <= a.length - 1 - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1 - 1; ++j) {
      for (let k = j + 1; k <= a.length - 1; ++k) {
        ijkForward.push(`(${i},${j},${k})`);
      }
    }
  }

  for (let i = a.length - 1; i >= 2; --i) {
    for (let j = i - 1; j >= 1; --j) {
      for (let k = j - 1; k >= 0; --k) {
        ijkBackward.push(`(${k},${j},${i})`);
      }
    }
  }

  console.log("ijkForward: ", ijkForward);
  console.log("ijkBackward: ", ijkBackward);
}

function test1() {
  const a = [1, 2, 3, 4, 5];
  loopIJK(a);
}

{
  test1();
}
