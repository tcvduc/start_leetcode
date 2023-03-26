/**
 * Map
 *
 * const x = new Map();
 * x = Map(0) {}
 *
 */

const x = new Map();

x.set(1, 2);
x.set(2, 2);
x.set(3, 4);
x.set(5, 2);
x.set(6, 2);

function f1() {
  console.log(x);

  console.log(x.get(1));
}

function f2() {
  const a = [1, 2, 3, 4, 5];
  const map = new Map();

  for (let i = 0; i <= a.length - 1; ++i) {
    map.set(i, a[i]);
  }

  console.log(map);
}

function f3() {
  const a = [1, 2, 3, 4, 5];
  const map = new Map();

  for (let i = 0; i <= a.length - 1; ++i) {
    map.set(a[i], i);
  }

  console.log(map);
}

{
  //   f1();
  //   f2();

  f3();
}
