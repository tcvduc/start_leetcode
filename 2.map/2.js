function f() {
  const a = [1, 2, 3, 4, 5];
  const target = 9;
  const map = new Map();

  for (let i = 0; i <= a.length - 1; ++i) {
    const delta = target - a[i];

    if (map.has(delta)) {
      const i_index = map.get(delta);
      const j_index = i;
      return [i_index, j_index];
    }
    map.set(a[i], i);
  }
}

console.log(f());
