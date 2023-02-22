/**
 * Problem: we have an list of number [10 -> 19]
 * get last digit [0 -> 9]
 *
 */

for (let i = 10; i <= 19; ++i) {
  const number = i;
  const numberModuloTen = number % 10;

  console.log(numberModuloTen);
}
