/**
 * Problem: Count file "1.n" character
 *
 */

const fs = require("fs");

/**
 *
 * @param {String} s
 */
function countStringCharacter(s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    count++;
  }

  return count;
}

const path = "../english-language-learner/1.n";
const options = {};
const callback =
  /**
   *
   * @param {NodeJS.ErrnoException} err
   * @param {Buffer} data
   */
  function (err, data) {
    if (err) {
      throw err;
    }

    const dataString = data.toString();
    const count = countStringCharacter(dataString);
    console.log(count);
  };

function f() {
  fs.readFile(path, options, callback);
}

f();
