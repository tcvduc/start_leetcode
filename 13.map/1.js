/**
 * 1. JavaScript Map Data Structure
 * - key value store
 * - unique key
 *
 * - Example
 * + m = {1=>1, 2=>-1,-1=>3}
 *
 */

function onboardMap() {
  const m1 = new Map();

  for (let i = 1; i <= 10000; ++i) {
    m1.set(1, i);
  }

  console.log(m1); // unique key
}

{
  onboardMap();
}
