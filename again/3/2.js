/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 *
 * @param {Number} val
 * @param {any} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? undefined : val;
  this.next = next === undefined ? null : next;
  this.show = function () {
    let result = "";

    for (let node = this; node !== null; node = node.next) {
      if (node.next === null) {
        result += node.val;
        break;
      }

      result += node.val + " -> ";
    }

    return console.log(result);
  };
}

/**
 *
 * @param {ListNode} l
 */
function getListNodeLength(l) {
  let length = 0;
  let node = l;

  while (node !== null) {
    length++;
    node = node.next;
  }

  return length;
}

/**
 *
 * @param {ListNode} listNode
 * @param {Number} val
 *
 */
function addNode(listNode, val) {
  const node = new ListNode(val, null);

  if (listNode.val === undefined) {
    listNode = node;
    return listNode;
  }

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
  /**
   * Case 1: l1 < l2 : done
   * Case 2: l1 = l2 : done
   * Case 3: l1 > l2 : done
   *
   */
  l1.show();
  l2.show();

  let result = new ListNode(undefined, undefined);

  const length1 = getListNodeLength(l1);
  const length2 = getListNodeLength(l2);

  if (length1 < length2) {
    let countNode = 0;
    let next1 = l1;
    let next2 = l2;
    let wasReminder = false;
    const oneVal = 1;

    while (next2 !== null) {
      countNode++;

      if (countNode === 1) {
        if (next1 === null) {
          const val2 = next2.val;
          result = addNode(result, val2);
          next2 = next2.next;
          continue;
        }

        if (next1 !== null) {
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

      if (countNode !== 1) {
        if (next1 === null) {
          if (wasReminder === true) {
            const val2 = next2.val;
            const addVal = val2 + oneVal;

            if (addVal < 10) {
              result = addNode(result, addVal);
              wasReminder = false;
              next2 = next2.next;
              continue;
            }

            if (addVal >= 10) {
              const lastDigit = getNumberLastDigit(addVal);
              result = addNode(result, lastDigit);

              if (countNode === length2) {
                result = addNode(result, oneVal);
              }

              wasReminder = true;
              next2 = next2.next;
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
      }
    }
  }

  if (length1 === length2) {
    let countNode = 0;
    let next1 = l1;
    let next2 = l2;
    let wasReminder = false;
    const oneVal = 1;

    while (next1 !== null) {
      countNode++;

      if (countNode === 1) {
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

          if (countNode === length1) {
            result = addNode(result, oneVal);
          }

          wasReminder = true;
          next1 = next1.next;
          next2 = next2.next;
          continue;
        }
      }

      if (countNode !== 1) {
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

            if (countNode === length1) {
              result = addNode(result, oneVal);
            }

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

            if (countNode === length1) {
              result = addNode(result, oneVal);
            }

            wasReminder = true;
            next1 = next1.next;
            next2 = next2.next;
            continue;
          }
        }
      }
    }
  }

  if (length1 > length2) {
    let next1 = l1;
    let next2 = l2;
    let countNode = 0;
    let wasReminder = false;
    const oneVal = 1;

    while (next1 !== null) {
      countNode++;

      if (countNode === 1) {
        if (next2 === null) {
          const val1 = next1.val;
          result = addNode(result, val1);
          next1 = next1.next;
          continue;
        }

        if (next2 !== null) {
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

      if (countNode !== 1) {
        if (next2 === null) {
          if (wasReminder === true) {
            const val1 = next1.val;
            const addVal = val1 + oneVal;

            if (addVal < 10) {
              result = addNode(result, addVal);
              wasReminder = false;
              next1 = next1.next;
              continue;
            }

            if (addVal >= 10) {
              const lastDigit = getNumberLastDigit(addVal);
              result = addNode(result, lastDigit);

              if (countNode === length1) {
                result = addNode(result, oneVal);
              }

              wasReminder = true;
              next1 = next1.next;
              continue;
            }
          }

          if (wasReminder !== true) {
            const val1 = next1.val;
            result = addNode(result, val1);
            next1 = next1.next;
            continue;
          }
        }

        if (next2 !== null) {
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
      }
    }
  }

  return result;
};

function test1() {
  const n13 = new ListNode(3, null);
  const n12 = new ListNode(2, n13);
  const l1 = new ListNode(1, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(3, n24);
  const n22 = new ListNode(2, n23);
  const l2 = new ListNode(1, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test2() {
  const n13 = new ListNode(3, null);
  const n12 = new ListNode(2, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(3, n24);
  const n22 = new ListNode(2, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test3() {
  const n13 = new ListNode(3, null);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(3, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test4() {
  const n13 = new ListNode(9, null);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(9, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test5() {
  const n13 = new ListNode(9, null);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(9, null);
  const n23 = new ListNode(9, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test6() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(3, n14);
  const n12 = new ListNode(2, n13);
  const l1 = new ListNode(1, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(3, n24);
  const n22 = new ListNode(2, n23);
  const l2 = new ListNode(1, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test7() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(3, n14);
  const n12 = new ListNode(2, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(3, n24);
  const n22 = new ListNode(2, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test8() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(3, n14);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(3, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test9() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(7, n14);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(4, null);
  const n23 = new ListNode(7, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test10() {
  const n14 = new ListNode(5, null);
  const n13 = new ListNode(7, n14);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(5, null);
  const n23 = new ListNode(7, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test11() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(7, n14);
  const n12 = new ListNode(9, n13);
  const l1 = new ListNode(9, n12);

  const n24 = new ListNode(5, null);
  const n23 = new ListNode(7, n24);
  const n22 = new ListNode(9, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test12() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(3, n14);
  const n12 = new ListNode(2, n13);
  const l1 = new ListNode(1, n12);

  const n23 = new ListNode(3, null);
  const n22 = new ListNode(2, n23);
  const l2 = new ListNode(1, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test13() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(3, n14);
  const n12 = new ListNode(2, n13);
  const l1 = new ListNode(9, n12);

  const n23 = new ListNode(3, null);
  const n22 = new ListNode(2, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test14() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(3, n14);
  const n12 = new ListNode(7, n13);
  const l1 = new ListNode(9, n12);

  const n23 = new ListNode(3, null);
  const n22 = new ListNode(7, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test15() {
  const n14 = new ListNode(4, null);
  const n13 = new ListNode(6, n14);
  const n12 = new ListNode(7, n13);
  const l1 = new ListNode(9, n12);

  const n23 = new ListNode(6, null);
  const n22 = new ListNode(7, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test16() {
  const n14 = new ListNode(9, null);
  const n13 = new ListNode(6, n14);
  const n12 = new ListNode(7, n13);
  const l1 = new ListNode(9, n12);

  const n23 = new ListNode(6, null);
  const n22 = new ListNode(7, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

function test17() {
  const n14 = new ListNode(8, null);
  const n13 = new ListNode(9, n14);
  const n12 = new ListNode(7, n13);
  const l1 = new ListNode(9, n12);

  const n23 = new ListNode(9, null);
  const n22 = new ListNode(7, n23);
  const l2 = new ListNode(9, n22);

  const result = addTwoNumbers(l1, l2);
  result.show();
}

{
  // test1();
  // test2();
  // test3();
  // test4();
  // test5();
  // test6();
  // test7();
  // test8();
  // test9();
  // test10();
  // test11();
  // test12();
  // test13();
  // test14();
  // test15();
  // test16();
  test17();
}
