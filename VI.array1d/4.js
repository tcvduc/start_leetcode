/**
 * 4. Convert array of string to string array
 *
 * - Example 1
 * + a = ["abc","def"]
 * + result = `["abc","def"]`
 *
 *
 * - Example 2
 * + a = []
 * + result = ``
 *
 * - Example 3
 * + a = ["abc"]
 * + result = `["abc"]`
 *
 */

/**
 *
 * @param {String[]} a
 */
function convertArrayOfStringToStringArray(a) {
  if (a.length === 0) return "";

  let result = `[`;

  for (let i = 0; i <= a.length - 1; ++i) {
    if (i === a.length - 1) {
      result += '"' + a[i] + '"';
      break;
    }
    result += '"' + a[i] + '"' + ",";
  }

  result += "]";

  return result;
}

function test1() {
  const a = ["abc", "def"];
  const result = convertArrayOfStringToStringArray(a);
  console.log(result);
}

function test2() {
  const a = [];
  const result = convertArrayOfStringToStringArray(a);
  console.log(result);
}

function test3() {
  const a = ["abc"];
  const result = convertArrayOfStringToStringArray(a);
  console.log(result);
}

function test4() {
  const a = ["abc", "def", "jik", "qwerty"];
  const result = convertArrayOfStringToStringArray(a);
  console.log(result);
}

{
  test1();
  test2();
  test3();
  test4();
}
