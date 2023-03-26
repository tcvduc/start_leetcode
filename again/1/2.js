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
 *
 * @param {Number} n
 */
function getNumberLastDigit(n) {
  return n % 10;
}

/**
 * @param {ListNode} ln1
 * @param {ListNode} ln2
 * @return {ListNode}
 */
var addTwoNumbers = function (ln1, ln2) {
  /**
   * + case 1: done
   *   + l1 = l2
   * + case 2: done
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

  let wasReminder = false;
  const oneNumber = 1;

  if (l1 === l2) {
    let countNode = 0;

    for (
      let nl1 = ln1, nl2 = ln2;
      nl1 !== null && nl2 !== null;
      nl1 = nl1.next, nl2 = nl2.next
    ) {
      countNode++;

      const nl1vl = nl1.value;
      const nl2vl = nl2.value;
      const addValue = nl1vl + nl2vl;

      if (countNode === 1) {
        if (addValue < 10) {
          result.add(addValue);
          countNode++;
          wasReminder = false;
          continue;
        }

        if (addValue >= 10) {
          const newValue = getNumberLastDigit(addValue);
          result.add(newValue);
          wasReminder = true;
          countNode++;
          continue;
        }
        continue;
      }

      if (countNode > 1) {
        if (wasReminder === true) {
          const newValue = addValue + oneNumber;

          if (newValue < 10) {
            result.add(newValue);
            wasReminder = false;
            countNode++;
            continue;
          }

          if (newValue >= 10) {
            const lastDigit = getNumberLastDigit(newValue);
            result.add(lastDigit);
            wasReminder = true;
            countNode++;
            continue;
          }
        }

        if (wasReminder === false) {
          result.add(addValue);
          wasReminder = false;
          countNode++;
          continue;
        }
      }
    }
    if (wasReminder === true) {
      result.add(oneNumber);
      return result;
    }

    if (wasReminder === false) {
      return result;
    }
  }

  if (l1 < l2) {
    let countNode = 0;
    let nl1 = ln1;
    let wasReminder = false;

    for (let nl2 = ln2; nl2 !== null; nl2 = nl2.next) {
      if (nl1 !== null) {
        const nl1vl = nl1.value;
        const nl2vl = nl2.value;
        const addValue = nl1vl + nl2vl;

        if (countNode === 1) {
          if (addValue < 10) {
            result.add(addValue);
            wasReminder = false;
            nl1 = nl1.next;
            countNode++;
            continue;
          }

          if (addValue >= 10) {
            wasReminder = true;
            countNode++;
            nl1 = nl1.next;
            result.add(addValue);
            continue;
          }
        }

        if (countNode !== 1) {
          if (wasReminder === true) {
            const newValue = oneNumber + addValue;
            if (newValue < 10) {
              nl1 = nl1.next;
              countNode++;
              wasReminder = false;
              result.add(newValue);
              continue;
            }

            if (newValue >= 10) {
              wasReminder = true;
              nl1 = nl1.next;
              countNode++;
              const lastDigit = getNumberLastDigit(newValue);
              result.add(lastDigit);
              continue;
            }
          }

          if (wasReminder !== true) {
            if (addValue < 10) {
              nl1 = nl1.next;
              countNode++;
              wasReminder = false;
              result.add(addValue);

              continue;
            }

            if (addValue >= 10) {
              nl1 = nl1.next;
              countNode++;
              wasReminder = true;
              const lastDigit = getNumberLastDigit(addValue);
              result.add(lastDigit);
              continue;
            }
          }
        }
      }

      if (wasReminder === true) {
        const nl2vl = nl2.value;
        const newValue = nl2vl + oneNumber;

        if (newValue < 10) {
          result.add(newValue);
          wasReminder = false;
          countNode++;
          continue;
        }

        if (newValue >= 10) {
          wasReminder = true;
          countNode++;
          const lastDigit = getNumberLastDigit(newValue);
          result.add(lastDigit);

          if (countNode === l2) {
            result.add(oneNumber);
          }

          continue;
        }
      }

      if (wasReminder === false) {
        const nl2vl = nl2.value;
        result.add(nl2vl);
      }
    }

    return result;
  }

  if (l1 > l2) {
    let nl2 = ln2;
    let countNode = 0;
    let wasReminder = false;

    for (let nl1 = ln1; nl1 !== null; nl1 = nl1.next) {
      countNode++;

      if (nl2 !== null) {
        const nl1vl = nl1.value;
        const nl2vl = nl2.value;
        const addValue = nl1vl + nl2vl;

        if (countNode === 1) {
          if (addValue < 10) {
            wasReminder = false;

            nl2 = nl2.next;
            result.add(addValue);
            continue;
          }

          if (addValue >= 10) {
            wasReminder = true;
            nl2 = nl2.next;
            const lastDigit = getNumberLastDigit(addValue);
            result.add(lastDigit);
            continue;
          }
        }

        if (countNode !== 1) {
          if (wasReminder === true) {
            const newValue = oneNumber + addValue;

            if (newValue < 10) {
              nl2 = nl2.next;
              wasReminder = false;
              result.add(newValue);
              continue;
            }

            if (newValue >= 10) {
              wasReminder = true;
              nl2 = nl2.next;
              const lastDigit = getNumberLastDigit(newValue);
              result.add(lastDigit);
              continue;
            }
          }

          if (wasReminder !== true) {
            if (addValue < 10) {
              nl2 = nl2.next;
              wasReminder = false;
              result.add(addValue);
              continue;
            }

            if (addValue >= 10) {
              wasReminder = true;
              nl2 = nl2.next;
              const lastDigit = getNumberLastDigit(addValue);
              result.add(lastDigit);
              continue;
            }
          }
        }
      }

      if (wasReminder === true) {
        const nl1vl = nl1.value;
        const addValue = nl1vl + oneNumber;

        if (addValue < 10) {
          wasReminder = false;
          result.add(addValue);
          continue;
        }

        if (addValue >= 10) {
          wasReminder = true;
          const lastDigit = getNumberLastDigit(addValue);
          result.add(lastDigit);

          if (countNode === l1) {
            result.add(oneNumber);
          }

          continue;
        }
      }

      if (wasReminder === false) {
        const nl1vl = nl1.value;
        result.add(nl1vl);
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

function test2() {
  /**
   * + ln1: 6 -> 7 -> 8 -> 1
   * + ln2: 6 -> 7 -> 8 -> 2
   * + ret: 2 -> 5 -> 7 -> 4
   *
   */
  const value1 = 6;
  const value2 = 7;
  const value3 = 8;
  const value4 = 1;
  const value5 = 2;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);

  listNode2.add(value1);
  listNode2.add(value2);
  listNode2.add(value3);
  listNode2.add(value5);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 5 -> 7 -> 4
}

function test3() {
  /**
   * + ln1: 6 -> 7 -> 8 -> 7
   * + ln2: 6 -> 7 -> 8 -> 7
   * + ret: 2 -> 5 -> 7 -> 5 -> 1
   *
   */
  const value1 = 6;
  const value2 = 7;
  const value3 = 8;
  const value4 = 7;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);

  listNode2.add(value1);
  listNode2.add(value2);
  listNode2.add(value3);
  listNode2.add(value4);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 5 -> 7 -> 5 -> 1
}

function test4() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 4
   * + ln2: 4 -> 3 -> 2 -> 1 -> 0
   * + ret: 5 -> 5 -> 5 -> 5 -> 0
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value1);
  listNode2.add(value0);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 5 -> 0
}

function test5() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 9
   * + ln2: 4 -> 3 -> 2 -> 9 -> 0
   * + ret: 5 -> 5 -> 5 -> 8 -> 1
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value9);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value9);
  listNode2.add(value0);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 8 -> 1
}

function test6() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 9
   * + ln2: 4 -> 3 -> 2 -> 9 -> 9
   * + ret: 5 -> 5 -> 5 -> 8 -> 0 -> 1
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value9);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value9);
  listNode2.add(value9);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 8 -> 0 -> 1
}

function test7() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 4
   * + ln2: 4 -> 3 -> 2 -> 1 -> 2 -> 3 -> 4
   * + ret: 5 -> 5 -> 5 -> 5 -> 2 -> 3 -> 4
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value1);
  listNode2.add(value2);
  listNode2.add(value3);
  listNode2.add(value4);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 5 -> 2 -> 3 -> 4
}

function test8() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 8
   * + ln2: 4 -> 3 -> 2 -> 8 -> 9 -> 5 -> 5
   * + ret: 5 -> 5 -> 5 -> 6 -> 0 -> 6 -> 5
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value8);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value8);
  listNode2.add(value9);
  listNode2.add(value5);
  listNode2.add(value5);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 6 -> 0 -> 6 -> 5
}

function test9() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 8
   * + ln2: 4 -> 3 -> 2 -> 8 -> 9 -> 9 -> 5
   * + ret: 5 -> 5 -> 5 -> 6 -> 0 -> 0 -> 6
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value8);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value8);
  listNode2.add(value9);
  listNode2.add(value9);
  listNode2.add(value5);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 6 -> 0 -> 6 -> 5
}

function test10() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 8
   * + ln2: 4 -> 3 -> 2 -> 8 -> 9 -> 9 -> 9
   * + ret: 5 -> 5 -> 5 -> 6 -> 0 -> 0 -> 0 -> 1
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value8);

  listNode2.add(value4);
  listNode2.add(value3);
  listNode2.add(value2);
  listNode2.add(value8);
  listNode2.add(value9);
  listNode2.add(value9);
  listNode2.add(value9);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 5 -> 5 -> 5 -> 6 -> 0 -> 0 -> 0 -> 1
}

function test11() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 4 -> 5
   * + ln2: 1 -> 2 -> 3 -> 4
   * + ret: 2 -> 4 -> 6 -> 8 -> 5
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value4);
  listNode1.add(value5);

  listNode2.add(value1);
  listNode2.add(value2);
  listNode2.add(value3);
  listNode2.add(value4);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 4 -> 6 -> 8 -> 5
}

function test12() {
  /**
   * + ln1: 6 -> 7 -> 8 -> 1 -> 5
   * + ln2: 6 -> 7 -> 8 -> 1
   * + ret: 2 -> 5 -> 7 -> 3 -> 5
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value6);
  listNode1.add(value7);
  listNode1.add(value8);
  listNode1.add(value1);
  listNode1.add(value5);

  listNode2.add(value6);
  listNode2.add(value7);
  listNode2.add(value8);
  listNode2.add(value1);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 5 -> 7 -> 3 -> 5
}

function test13() {
  /**
   * + ln1: 6 -> 7 -> 8 -> 9 -> 5
   * + ln2: 6 -> 7 -> 8 -> 9
   * + ret: 2 -> 5 -> 7 -> 9 -> 6
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value6);
  listNode1.add(value7);
  listNode1.add(value8);
  listNode1.add(value9);
  listNode1.add(value5);

  listNode2.add(value6);
  listNode2.add(value7);
  listNode2.add(value8);
  listNode2.add(value9);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 5 -> 7 -> 9 -> 6
}

function test14() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 9 -> 9
   * + ln2: 1 -> 2 -> 3 -> 9
   * + ret: 2 -> 4 -> 6 -> 8 -> 0 -> 1
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value9);
  listNode1.add(value9);

  listNode2.add(value1);
  listNode2.add(value2);
  listNode2.add(value3);
  listNode2.add(value9);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 4 -> 6 -> 8 -> 0 -> 1
}

function test15() {
  /**
   * + ln1: 1 -> 2 -> 3 -> 9 -> 9 -> 9 -> 9
   * + ln2: 1 -> 2 -> 3 -> 9
   * + ret: 2 -> 4 -> 6 -> 8 -> 0 -> 0 -> 0 -> 1
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value1);
  listNode1.add(value2);
  listNode1.add(value3);
  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);

  listNode2.add(value1);
  listNode2.add(value2);
  listNode2.add(value3);
  listNode2.add(value9);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 2 -> 4 -> 6 -> 8 -> 0 -> 0 -> 0 -> 1
}

function test16() {
  /**
   * + ln1: 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
   * + ln2: 9 -> 9 -> 9 -> 9
   * + ret: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);
  listNode1.add(value9);

  listNode2.add(value9);
  listNode2.add(value9);
  listNode2.add(value9);
  listNode2.add(value9);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1
}

function test17() {
  /**
   * + ln1: 2 -> 2 -> 2 -> 2 -> 2 -> 2 -> 2
   * + ln2: 2 -> 2 -> 2 -> 2
   * + ret: 4 -> 4 -> 4 -> 4 -> 2 -> 2 -> 2
   *
   */
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value0 = 0;

  const listNode1 = new ListNode(undefined, undefined);
  const listNode2 = new ListNode(undefined, undefined);

  listNode1.add(value2);
  listNode1.add(value2);
  listNode1.add(value2);
  listNode1.add(value2);
  listNode1.add(value2);
  listNode1.add(value2);
  listNode1.add(value2);

  listNode2.add(value2);
  listNode2.add(value2);
  listNode2.add(value2);
  listNode2.add(value2);

  const result = addTwoNumbers(listNode1, listNode2);
  result.show(); // 4 -> 4 -> 4 -> 4 -> 2 -> 2 -> 2
}

{
  //   debug1();
  //   test1(); // done
  //   test2(); // done
  // test3(); // done
  // test4(); // done
  // test5(); // done
  // test6(); // done
  // test7(); // done
  // test8(); // done
  // test9(); // done
  // test10(); // done
  // test11(); // done
  // test12(); // done
  // test13(); // done
  // test14(); // done
  // test15(); // done
  // test16(); // done
  test17();
}
