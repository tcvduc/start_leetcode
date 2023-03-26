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
    if (this.value === 0) {
      this.value = newValue;
      this.next = null;
      return;
    }

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

    for (let nodeLoop = this; nodeLoop !== null; nodeLoop = nodeLoop.next) {
      count++;
    }

    return count;
  }

  show() {
    let show = "";
    let count = 0;
    let length = this.length();

    for (let nodeLoop = this; nodeLoop !== null; nodeLoop = nodeLoop.next) {
      count++;

      if (count === length) {
        show += nodeLoop.value;
        break;
      }

      show += nodeLoop.value + " -> ";
    }

    return console.log(show);
  }
}

/**
 * @param {ListNode} ln1
 * @param {ListNode} ln2
 * @return {ListNode}
 */
var addTwoNumbers = function (ln1, ln2) {
  /**
   * + case 1:
   *   + l1 = l2
   * + case 2:
   *   + l1 < l2
   * + case 3:
   *   + l1 > l2
   *
   */
  ln1.show();
  ln2.show();

  const l1 = ln1.length();
  const l2 = ln2.length();

  const result = new ListNode(undefined, undefined);

  if (l1 === l2) {
    for (
      let nl1 = ln1, nl2 = ln2;
      nl1 !== null && nl2 !== null;
      nl1 = nl1.next, nl2 = nl2.next
    ) {
      const nl1vl = nl1.value;
      const nl2vl = nl2.value;
      const addValue = nl1vl + nl2vl;

      if (addValue < 10) {
      }

      if (addValue >= 10) {
      }
    }
  }

  return result;
};

function debug1() {
  const result = new ListNode(undefined, undefined);
  result.add(1);
  result.add(2);
  result.add(3);
  result.add(4);
  result.show();
}

function test1() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 4
   * + ln2: 4 -> 3 -> 2 -> 1
   * + ret: 5 -> 5 -> 5 -> 5
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;

  const listNode1 = new ListNode(value1, undefined);
  const listNode2 = new ListNode(value4, undefined);

  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);

  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value1);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show();
}

{
  debug1();

  //   test1();
}
