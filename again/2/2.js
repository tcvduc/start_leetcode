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
 *
 * @param {ListNode} listNode
 */
function getListNodeLength(listNode) {
  let length = 0;

  for (let node = listNode; node !== null; node = node.next) {
    length++;
  }

  return length;
}

/**
 *
 * @param {ListNode} listNode1
 * @param {ListNode} listNode2
 *
 */
function wasListNode1LongerThanListNode2(listNode1, listNode2) {
  /**
   * Problem
   * Case 1
   * + List Node 1: 1 -> 2 -> 3
   * + List Node 2: 1 -> 2 -> 3 -> 4
   * + result: false
   *
   * Case 2
   * + List Node 1: 1 -> 2 -> 3 -> 4
   * + List Node 2: 1 -> 2 -> 3
   * + result: true
   *
   * Case 3
   * + List Node 1: 1 -> 2 -> 3
   * + List Node 2: 1 -> 2 -> 3
   * + result: false
   *
   */
  const length1 = getListNodeLength(listNode1);
  const length2 = getListNodeLength(listNode2);

  return length1 > length2 ? true : false;
}

/**
 *
 * @param {ListNode} listNode
 * @param {Number} value
 *
 */
function addNode(listNode, value) {
  const node = new ListNode(value, null);

  let nodeLoop = listNode;

  while (nodeLoop !== null) {
    if (nodeLoop.next === null) {
      nodeLoop.next = node;
      break;
    }
    nodeLoop = nodeLoop.next;
  }

  return listNode;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1.show();
  l2.show();

  const length1 = getListNodeLength(l1);
  const length2 = getListNodeLength(l2);

  console.log("List Node 1 Length: ", length1);
  console.log("List Node 2 Length: ", length2);

  const result = new ListNode(undefined, undefined);
  let wasReminder = false;

  let l1n1vl = l1.val;
  let l2n1vl = l2.val;

  let next1 = l1;
  let next2 = l2;

  let countNode1 = 0;
  let countNode2 = 0;

  console.log("");

  const flag = wasListNode1LongerThanListNode2(l1, l2);

  // List Node 1 Longer Than List Node 2
  if (flag === true) {
    while (next1 !== null) {
      countNode1++;

      const node1Val = next1.val;

      if (next2 !== null) {
      }

      next1 = next1.next;
      next2 = next2.next;
    }
  }

  // List Node 1 length less than List Node 2 length
  if (flag === false) {
    console.log("here");
    let next1 = l1;
    let next2 = l2;

    while (next2 !== null) {
      if (next1 !== null) {
        const val1 = next1.val;
        const val2 = next2.val;

        // console.log(val1);
        console.log(val2);

        next1 = next1.next;
      }

      next2 = next2.next;
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

function testFunction1() {
  const n3 = new ListNode(3, null);
  const n2 = new ListNode(2, n3);
  const l1 = new ListNode(1, n2);

  const n7 = new ListNode(7, null);
  const n6 = new ListNode(6, n7);
  const n5 = new ListNode(5, n6);
  const l2 = new ListNode(4, n5);

  l1.show();
  l2.show();

  const result = wasListNode1LongerThanListNode2(l1, l2);
  console.log(result);
}

function testFunction2() {
  console.log("");
  const n4 = new ListNode(4, null);
  const n3 = new ListNode(3, n4);
  const n2 = new ListNode(2, n3);
  const l1 = new ListNode(1, n2);

  const n7 = new ListNode(7, null);
  const n6 = new ListNode(6, n7);
  const n5 = new ListNode(5, n6);
  const l2 = new ListNode(4, n5);

  l1.show();
  l2.show();

  const result = wasListNode1LongerThanListNode2(l1, l2);
  console.log(result);
}

function testFunction3() {
  console.log("");
  const n51 = new ListNode(5, null);
  const n4 = new ListNode(4, n51);
  const n3 = new ListNode(3, n4);
  const n2 = new ListNode(2, n3);
  const l1 = new ListNode(1, n2);

  const n7 = new ListNode(7, null);
  const n6 = new ListNode(6, n7);
  const n5 = new ListNode(5, n6);
  const l2 = new ListNode(4, n5);

  l1.show();
  l2.show();

  const result = wasListNode1LongerThanListNode2(l1, l2);
  console.log(result);
}

function testFunction4() {
  const n4 = new ListNode(4, null);
  const n3 = new ListNode(3, n4);
  const listNode = new ListNode(2, n3);

  const value = 5;
  const result = addNode(listNode, value);
  result.show();
}

function wrapTestFunctionList() {
  // testFunction1();
  // testFunction2();
  // testFunction3();
  testFunction4();
}

{
  test1();
  // wrapTestFunctionList();
}
