/**
 * 8. Given two positive numbers min and max,
 * let's generate random number between min and max
 *
 * - Example 1
 * + min: 0
 * + max: 5
 * + result: 4
 *
 *
 * - Example 2
 * + min: 0
 * + max: 0
 * + result: 0
 *
 * - Example 3
 * + min: 0
 * + max: 1
 * + result: 0
 *
 * - Example 4
 * + min: 5
 * + max: 10
 * + result: 7
 *
 * ------------------
 * + min: 0
 * + max: 5
 * + delta: [0,1)
 * + result: [0,5]
 *
 * + Equation
 *   + delta x max
 *   + delta x (max - min)
 *   + Math.floor(Math.random() * (max - min) ) + min;
 *   + Math.floor(Math.random() * (max - min + 1)) + min;
 *
 *
 * + Math.floor([0,1) x (5 - 0 + 1)) + 0
 * + Math.floor([0,1) x 6)
 * + Math.floor([0,6)) = [0,5]
 *
 * + Math.floor
 *   + 0.1 -> 0.9 = 0
 *   + 1.1 -> 1.9 = 1
 *   + 2.1 -> 2.9 = 2
 *   + 3.1 -> 3.9 = 3
 *   + 4.1 -> 4.9 = 4
 *   + 5.1 -> 5.9 = 5
 *
 * + delta = [0,1)
 *   + 0 -> 0.9
 *     + 0 -> 0.9 x (max + 1)
 *     + 0 -> 0.9 x (5 + 1)
 *     + 0 -> 0.9 x 6
 *     + 0 -> 5.4
 *     + floor: 0 -> 5
 *
 * + min = 5
 * + max = 10
 * + delta = [0,0.9]
 * + result = [5,10]
 *
 *
 * + [0,0.9] x (11) + 5
 *   + floor
 *   + delta x (max - min + 1) + min
 *   + [0,0.9] x (10 - 5 + 1) + 5
 *   + [0,0.9] x (6) + 5
 *   + [0,5.e] + 5
 *   + [5,10.e]
 *   + [5,10]
 *
 *
 * Equation
 * delta = Math.random()
 * Math.floor(delta x (max - min + 1) + min)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * + Math.floor(delta x (5 - 0)) + 0
 * + Math.floor([0,1) x 5)
 * + Math.floor([0,5))
 *
 *
 *
 *
 * + [0,1) * 5 = [0,5)
 *   + 0.9 * 5 ~ 4.5
 *
 * + [0,1) x (5 - 0)
 *   + [0,1) x (5 - 0)
 *   + [0,1) x 5
 *   + [0,5)
 * + 0.1 x (5 - 0)
 * + 0.1 x 5
 * + 0.5
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * @param {Number} min
 * @param {Number} max
 *
 */
function generateRandomNumber(min, max) {
  const delta = Math.random();
  return Math.floor(delta * (max - min + 1)) + min;
}

function test1() {
  const min = 0;
  const max = 5;
  const result = generateRandomNumber(min, max);
  console.log(result);
}

function test2() {
  const min = 5;
  const max = 10;
  const result = [];

  console.log("min: ", min);
  console.log("max: ", max);

  for (let i = 10; i >= 0; --i) {
    result.push(generateRandomNumber(min, max));
  }
  console.log(result);
}

{
  test1();
  test2();
}
