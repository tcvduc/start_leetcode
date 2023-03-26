/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }

  /**
   *
   * @param {Number} newValue
   */
  add(newValue) {
    for (let nodeLoop = this; nodeLoop !== null; nodeLoop = nodeLoop.next) {
      if (nodeLoop.next === null) {
        nodeLoop.next = {
          value: newValue,
          next: null,
        };
        break;
      }
    }
  }

  length() {
    let count = 0;

    for (
      let nodeLoop = this.value;
      nodeLoop !== null;
      nodeLoop = nodeLoop.next
    ) {
      count++;
    }

    return count;
  }

  show() {
    let show = "";

    for (
      let nodeLoop = this.head;
      nodeLoop !== null;
      nodeLoop = nodeLoop.next
    ) {
      show += nodeLoop.value + " ->";
    }

    return show;
  }
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 *
 */
function f(l1, l2) {}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode(undefined, undefined);

  return result;
};

function test1() {
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;

  const listNode1 = new ListNode(value1, undefined);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);

  console.log(listNode1);
}

{
  test1();
}
