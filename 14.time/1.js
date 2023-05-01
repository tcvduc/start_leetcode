/**
 * 1. Watch delta millisecond time
 * - Given start time and end time with
 * millisecond unit, get a delta value
 * to see time changing.
 *
 * - Example 1
 * + s = 40 ms
 * + e = 50 ms
 * + delta = 10 ms
 * + explanation: start 40, end 50,
 * time goes on 10.
 *
 * - Example 2
 * + s = 30
 * + e = 20
 * + delta = 50
 *   + 30 -> 60 -> 20
 *   + 30 -> 20
 *   + 50
 * + explanation: end < start, tru = 60,
 * add following tru
 * + equation: tru - s + e
 *   + tru: 60
 *   + s: 30
 *   + e: 20
 *
 *
 */

const tru = 60;

/**
 *
 * @param {Number} s
 * @param {Number} e
 */
function watchDeltaTimeMillisecond(s, e) {
  if (e >= s) return e - s;
  return tru - s + e;
}

function test1() {
  const s = 40;
  const e = 50;
  const delta = watchDeltaTimeMillisecond(s, e);
  console.log(delta); // 10
}

function test2() {
  const s = 30;
  const e = 20;
  const delta = watchDeltaTimeMillisecond(s, e);
  console.log(delta); // 50
}

{
  test1();
  test2();
}
