/**
 * 2. Add two numbers
 * You are given two non-empty linked list
 * representing two non-negative integers.
 * The digits are stored in reverse order,
 * and each of their nodes contains a single digit
 * add the two numbers and return the sum
 * as a linked list.
 * You may assume the two numbers do not contain
 * any leading zero, except the number 0 itself.
 *
 * + Example 1
 * linked list 1:   2 -> 4 -> 3
 * linked list 2:   5 -> 6 -> 4
 * ----------------------------
 * linked list ret: 7 -> 0 -> 8
 *
 * + input:
 *   + l1 =  [2,4,3]
 *   + l2 =  [5,6,4]
 * + output: [7,0,8]
 * + explanation: 342 + 465 = 807
 *
 *
 * + Example 2
 * + input
 *   + l1 = [0]
 *   + l2 = [0]
 * + output
 *   + [0]
 *
 * + Example 3
 * + input
 *   + l1 = [9,9,9,9,9,9,9]
 *   + l2 = [9,9,9,9]
 * + output [8,9,9,9,0,0,1]
 *
 * + constrains
 *   + the number of nodes in each linked list
 *   is in the range [1,100]
 *   + 0 <= node.val <= 9
 *   + it is guaranteed that the list represents
 *   a number that does not have leading zero
 *
 *
 *
 *
 */

/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 */

class ListNode {
  /**
   *
   * @param {number} value
   * @param {object} next
   *
   */
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 */
const addTwoNumbers = function (l1, l2) {};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2)); // [7, 0, 8]
