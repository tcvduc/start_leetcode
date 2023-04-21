/**
 * 2. Given an array of elements concept, write file tech concept.
 * Use write file tech to create a file that contains
 * an array has 10000 elements.
 * Element type: string.
 *
 *
 *
 *
 */

function generateRandomString(length) {}

function generateArrayOf10000Elements() {
  const result = [];

  for (let i = 10000; i >= 1; --i) {
    const stringContent = generateRandomString(length);
    result.push();
  }
}

function writeArrayOf10000Elements() {
  const fs = require("fs");
  const path = __dirname + "/2.txt";
  const data = [];

  fs.writeFileSync(path, "test string", {});
}

{
  writeArrayOf10000Elements();
}
