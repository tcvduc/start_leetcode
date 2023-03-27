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

  while (true) {
    if (l1 !== null) {
      if (l2 === null) {
        if (wasReminder === true) {
        }

        if (wasReminder === false) {
        }
      }

      if (l2 !== null) {
      }

      const vl1 = l1.val;
      const vl2 = l2.val;
      l1 = l1.next;
      l2 = l2.next;
    }

    if (l1 === null) {
      console.log(l1);
      break;
    }
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
