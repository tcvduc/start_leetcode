/**
 * 6. Zigzag conversion
 * - The string "PAYPALISHIRING" is written in a zigzag
 * pattern on a given number of rows like this: (you may want
 * to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make
 * this conversion given a number of rows
 *
 * string convert(string s, int numRows);
 *
 * - Example 1
 * + s = "PAYPALISHIRING"
 * + numRows = 3
 * + result = "PAHNAPLSIIGYIR"
 * P   A   H   N
 * A P L S I I G  => "PAHNAPLSIIGYIR"
 * Y   I   R
 *
 * - Example 2
 * + s = "PAYPALISHIRING"
 * + numRows = 4
 * + result = "PINALSIGYAHRPI"
 * P  I     N
 * A L S   I G   => "PINALSIGYAHRPI"
 * YA   H R
 * P     I
 *
 * - Example 3
 * + s = "A"
 * + numRows = 1
 * + result = "A"
 *
 * A => "A"
 *
 * - Constraints
 * + 1 <= s.length <= 1000
 * + "s" consists of English letters (lower-case and upper-case)
 * "," and "."
 * + 1 <= numRows <= 1000
 *
 *
 * -- ----------------------
 * + s = "PAYPALISHIRING"
 * + numRows = 3
 * + result = "PAHNAPLSIIGYIR"
 *
 *---0123456
 *0| P A H N
 *1| APLSIIG  => "PAHNAPLSIIGYIR"
 *2| Y I R
 * - numRows = 3
 * - numCols = 6 = 3 x 2
 *
 *
 * -- -----------------
 * + s = "PAYPALISHIRING"
 * + numRows = 4
 * + result = "PINALSIGYAHRPI"
 * ---012345678910
 * 0| P  I     N
 * 1| A L S   I G   => "PINALSIGYAHRPI"
 * 2| YA   H R
 * 3| P     I
 * - numRows = 4
 * - numCols = 10
 *
 * + s[0][0]  + s[2][1]  + s[1][4] + s[2][7] + s[1][10]
 * + s[1][0]  + s[1][3]  + s[2][5] + s[1][8]
 * + s[2][0]  + s[0][3]  + s[3][6] + s[0][9]
 * + s[3][0]
 *
 * + 1: turn "PAYPALISHIRING" to matrix
 * + 2: find i,j loop logic
 * + 3: pour "PAYPALISHIRING" to matrix
 * + 4: find i,j loop logic to get the horizon way
 * + 5: add string
 *
 *
 *
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const cols = [];
  for (let i = 0; i <= s.length - 1; ++i) {
    let zicZag = s[i];
    for (let j = i; j <= i + numRows - 1; ++j) {
      zicZag += s[j];
    }
    cols.push(zicZag);
  }
};
function test1() {
  const s = "PAYPALISHIRING";
  const numRows = 3;
  const result = convert(s, numRows);
  console.log(result);
}

{
  test1();
}
