/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

  this.show = function () {
    let result = "";

    const fistNode = this.val;
    let nextLoop = this.next;

    result += fistNode + " -> ";

    while (nextLoop !== null) {
      if (nextLoop.next === null) {
        result += nextLoop.val;
        break;
      }

      result += nextLoop.val + " -> ";

      nextLoop = nextLoop.next;
    }

    return console.log(result);
  };
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1.show();
  l2.show();

  const result = new ListNode(undefined, undefined);
  let wasReminder = false;

  let l1n1vl = l1.val;
  let l2n1vl = l2.val;

  let next1 = l1.next;
  let next2 = l2.next;

  while (true) {
    if (next1 !== null) {
      const l1vl = next1.val;
      console.log(l1vl);
      next1 = next1.next;
    }

    break;
  }
};

function test1() {
  const n3 = new ListNode(3, null);
  const n2 = new ListNode(2, n3);
  const l1 = new ListNode(1, n2);

  const n7 = new ListNode(7, null);
  const n6 = new ListNode(6, n7);
  const n5 = new ListNode(5, n6);
  const l2 = new ListNode(4, n5);

  const result = addTwoNumbers(l1, l2);
}

{
  test1();
}
