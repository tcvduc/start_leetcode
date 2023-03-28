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
function wasListNode1LengthGreaterThanListNode2Length(listNode1, listNode2) {
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
 * @param {ListNode} listNode1
 * @param {ListNode} listNode2
 *
 */
function wasListNode1LengthLessThanListNode2Length(listNode1, listNode2) {
  const length1 = getListNodeLength(listNode1);
  const length2 = getListNodeLength(listNode2);
  return length1 < length2;
}

/**
 *
 * @param {ListNode} listNode1
 * @param {ListNode} listNode2
 *
 */
function wasListNode1LengthEqualListNode2Length(listNode1, listNode2) {
  const length1 = getListNodeLength(listNode1);
  const length2 = getListNodeLength(listNode2);
  return length1 === length2;
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

  if (nodeLoop.val === 0) {
    nodeLoop = node;
    return nodeLoop;
  }

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
 *
 * @param {Number} n
 */
function getNumberLastDigit(n) {
  return n % 10;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1.show();
  l2.show();

  let result = new ListNode(undefined, undefined);

  let wasReminder = false;

  const flag1 = wasListNode1LengthLessThanListNode2Length(l1, l2);
  const flag2 = wasListNode1LengthEqualListNode2Length(l1, l2);
  const flag3 = wasListNode1LengthGreaterThanListNode2Length(l1, l2);

  // List Node 1 length less than List Node 2 length
  if (flag1 === true) {
    let next1 = l1;
    let next2 = l2;
    const oneVal = 1;
    let countNode = 0;
    const length2 = getListNodeLength(l2);

    while (next2 !== null) {
      countNode++;
      if (countNode === 1) {
        if (next1 !== null) {
          const val1 = next1.val;
          const val2 = next2.val;
          const addValue = val1 + val2;

          if (addValue < 10) {
            wasReminder = false;
            result = addNode(result, addValue);
            next1 = next1.next;
            next2 = next2.next;
            continue;
          }

          if (addValue >= 10) {
            const lastDigit = getNumberLastDigit(addValue);
            result = addNode(result, lastDigit);

            wasReminder = true;
            next1 = next1.next;
            next2 = next2.next;
            continue;
          }
        }
      }

      if (countNode !== 1) {
        if (next1 !== null) {
          if (wasReminder === true) {
            const val1 = next1.val;
            const val2 = next2.val;
            const addVal = val1 + val2 + oneVal;

            if (addVal < 10) {
              result = addNode(result, addVal);

              wasReminder = false;
              next1 = next1.next;
              next2 = next2.next;
              continue;
            }

            if (addVal >= 10) {
              const lastDigit = getNumberLastDigit(addVal);
              result = addNode(result, lastDigit);

              wasReminder = true;
              next1 = next1.next;
              next2 = next2.next;
              continue;
            }
          }

          if (wasReminder === false) {
            const val1 = next1.val;
            const val2 = next2.val;
            const addVal = val1 + val2;

            if (addVal < 10) {
              result = addNode(result, addVal);
              wasReminder = false;
              next1 = next1.next;
              next2 = next2.next;
              continue;
            }

            if (addVal >= 10) {
              const lastDigit = getNumberLastDigit(addVal);
              result = addNode(result, lastDigit);

              wasReminder = true;
              next1 = next1.next;
              next2 = next2.next;
              continue;
            }
          }
        }

        if (next1 === null) {
          if (wasReminder === true) {
            const val2 = next2.val;
            const addVal = val2 + oneVal;

            if (addVal < 10) {
              result = addNode(result, addVal);
              next2 = next2.next;
              wasReminder = false;
              continue;
            }

            if (addVal >= 10) {
              const lastDigit = getNumberLastDigit(addVal);
              result = addNode(result, lastDigit);

              if (countNode === length2) {
                result = addNode(result, oneVal);
              }

              next2 = next2.next;
              wasReminder = true;
              continue;
            }
          }

          if (wasReminder === false) {
            const val2 = next2.val;
            result = addNode(result, val2);
            next2 = next2.next;
            continue;
          }
        }
      }
    }
  }

  // List Node 1 length equal List Node 2 length
  if (flag2 === true) {
  }

  // List Node 1 length greater than List Node 2 length
  if (flag3 === true) {
  }

  return result;
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
  result.show();
}

function test2() {
  const n3 = new ListNode(3, null);
  const n2 = new ListNode(7, n3);
  const l1 = new ListNode(9, n2);

  const n7 = new ListNode(9, null);
  const n6 = new ListNode(9, n7);
  const n5 = new ListNode(9, n6);
  const n8 = new ListNode(9, n5);
  const l2 = new ListNode(9, n8);

  const result = addTwoNumbers(l1, l2);
  result.show();
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

  const result = wasListNode1LengthGreaterThanListNode2Length(l1, l2);
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

  const result = wasListNode1LengthGreaterThanListNode2Length(l1, l2);
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

  const result = wasListNode1LengthGreaterThanListNode2Length(l1, l2);
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
  // test1();
  test2();
  // wrapTestFunctionList();
}
