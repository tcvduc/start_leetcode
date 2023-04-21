/**
 * Problem: Given two array of string, find out
 * if both of it are equal.
 *
 * - Example 1
 * + as1: ["abc","def"]
 * + as2: ["abc","def"]
 * + result: true
 *
 * - Example 2
 * + as1: ["abc"]
 * + as2: ["abc","def"]
 * + result: false
 *
 * - Example 3
 * + as1: []
 * + as2: []
 * + result: true
 *
 * - Example 4
 * + as1: []
 * + as2: ["abc","def"]
 * + result: false
 *
 * - Example 5
 * + as1: ["abc","def"]
 * + as2: []
 * + result: false
 *
 * - Example 6
 * + as1: ["abc","defg","hjkl","qwerty"]
 * + as2: ["abc","defg","hjkl","qwerty"]
 * + result: true
 *
 * - Example 7
 * + as1: ["abc","defg","hjkl","qwerty"]
 * + as2: ["abc","defg","hjkl","qwerty2"]
 * + result: false
 *
 * - Example 8
 * + as1: ["123456",".,.,.,.,","[][][][]","qwerty"]
 * + as2: ["123456",".,.,.,.,","[][][][]","qwerty"]
 * + result: true
 *
 * - Example 9
 * + as1: ["abc","def",.... 10000 elements,"jik"]
 * + as2: ["abc","def",.... 10000 elements,"jik"]
 * + result: true
 *
 * - Example 10
 * + as1: ["abc","def",... 10000 elements,"jik"]
 * + as2: []
 * + result: false
 *
 * - Example 11
 * + as1: ["abc","def",... 10000 elements,"jik"]
 * + as2: ["abc","def",... 10000 elements,"jik","jik2"]
 * + result: false
 *
 * - Example 12
 * + as1: ["abc","def",... 1000000 elements,"jik"]
 * + as2: ["abc","def",... 1000000 elements,"jik"]
 * + result: true
 *
 * - Example 13
 * + as1: ["abc","def",... 1000000 elements,"jik"]
 * + as2: ["abc","def",... 1000000 elements,"jik","jik2"]
 * + result: false
 *
 *
 */

/**
 *
 * @param {String[]} as1
 * @param {String[]} as2
 *
 */
function isTwoArrayStringTheSame(as1, as2) {}

function test1() {
  const as1 = ["abc", "def"];
  const as2 = ["abc", "def"];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test2() {
  const as1 = ["abc"];
  const as2 = ["abc", "def"];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test3() {
  const as1 = [];
  const as2 = [];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test4() {
  const as1 = [];
  const as2 = ["abc", "def"];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test5() {
  const as1 = ["abc", "def"];
  const as2 = [];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test6() {
  const as1 = ["abc", "defg", "hjkl", "qwerty"];
  const as2 = ["abc", "defg", "hjkl", "qwerty"];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test7() {
  const as1 = ["abc", "defg", "hjkl", "qwerty"];
  const as2 = ["abc", "defg", "hjkl", "qwerty2"];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test8() {
  const as1 = ["123456", ".,.,.,.,", "[][][][]", "qwerty"];
  const as2 = ["123456", ".,.,.,.,", "[][][][]", "qwerty"];
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}

function test9() {
  // * + as1: ["abc","def",.... 10000 elements,"jik"]
  // * + as2: ["abc","def",.... 10000 elements,"jik"]
  const result = isTwoArrayStringTheSame(as1, as2);
  console.log(result);
}
{
}
