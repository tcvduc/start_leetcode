/**
 * 2. Given a positive number n
 * let's generate random string
 * with n length.
 *
 * - Example 1
 * + n = 3
 * + result = "abc"
 *
 * - Example 2
 * + n = 0
 * + result = ""
 *
 * - Example 3
 * + n = 10
 * + result = "abcqwertyu"
 *
 *
 */

/**
 *
 * @param {Number} n
 */
function generateRandomString(n) {
  let result = "";

  const characters =
    "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+[]{}\\|;':,./<>?";

  const min = 0;
  const max = characters.length - 1;
  for (let i = n; i >= 1; --i) {
    const randomIndex = generateRandomNumber(min, max);
    result += characters[randomIndex];
  }

  return result;
}

function test1() {
  const n = 3;
  const result = generateRandomString(n);
}

{
  test1();
}
