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
 *  + 0321: not this
 *    + 1 -> 2 -> 3 -> 0
 *  + 3210: this is accept
 *    + 0 -> 1 -> 2 -> 3
 *
 *
 * -- ------------------------------
 * -- Understanding the problem
 * -- ------------------------------
 * case 1. done
 * + ll1: 1 -> 2 -> 3: 321
 * + ll2: 4 -> 5 -> 6: 654
 * + ret: 5 -> 7 -> 9: 975
 *
 * case 2.
 * + ll1: 8 -> 6 -> 1: 168
 * + ll2: 4 -> 5 -> 2: 254
 * + ret: 2 -> 2 -> 4: 422
 *
 * case 3.
 * + ll1: 8 -> 6 -> 1: 168
 * + ll2: 4 -> 5 -> 9: 954
 * + ret: 2 -> 2 -> 1 -> 1: 1122
 *
 * case 4.
 * + ll1: 5 -> 6 -> 7: 765
 * + ll2: 6 -> 5 -> 2 -> 1: 1256
 * + ret: 1 -> 2 -> 0 -> 2: 2021
 *
 * case 5.
 * + ll1: 5 -> 6 -> 7:      765
 * + ll2: 6 -> 5 -> 7 -> 1: 1756
 * + ret: 1 -> 2 -> 5 -> 2: 2521
 *
 *
 * case 6.
 * + ll1: 1 -> 3 -> 5:       531
 * + ll2: 2 -> 4 -> 1 -> 1: 1142
 * + ret: 3 -> 7 -> 6 -> 1: 1673
 *
 *
 * case 7.
 * + ll1: 1 -> 3 -> 5:                531
 * + ll2: 2 -> 4 -> 1 -> 1 -> 1 -> 2: 211142
 * + ret: 3 -> 7 -> 6 -> 1 -> 1 -> 2: 211673
 *
 * case 8:
 * + ll1: 7 -> 9 -> 5:                531
 * + ll2: 7 -> 9 -> 5 -> 1 -> 1 -> 2: 211142
 * + ret: 4 -> 9 -> 1 -> 2 -> 1 -> 2: 211673
 *
 */

class Node {
  /**
   *
   * @param {Number} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  show() {
    /**
     * case 1: done
     * + sll: null
     * + ret: null
     *
     * case 2: done
     * + sll: 1 -> 2 -> 3 -> null
     * + ret: 1 -> 2 -> 3 -> null
     *
     */
    if (this.head === null) {
      return console.log("null");
    }

    if (this.head !== null) {
      let result = "";
      const arrow = "->";
      let count = 0;
      const length = this.length();

      for (
        let nodeLoop = this.head;
        nodeLoop !== null;
        nodeLoop = nodeLoop.next
      ) {
        count++;

        if (count === length) {
          result += nodeLoop.value;
          break;
        }

        result += nodeLoop.value + " " + arrow + " ";
      }

      console.log(result);
    }
  }

  length() {
    let count = 0;
    for (
      let nodeLoop = this.head;
      nodeLoop !== null;
      nodeLoop = nodeLoop.next
    ) {
      count++;
    }
    return count;
  }

  /**
   *
   * @param {Node} node
   */
  addNode(node) {
    /**
     * case 1: done
     * + sll: null
     * + node: 1 -> null
     * + ret: 1 -> null
     *
     * case 2: done
     * + sll: 1 -> null
     * + node: 2 -> null
     * + ret: 1 -> 2 -> null
     *
     *
     */
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.head !== null) {
      for (
        let nodeLoop = this.head;
        nodeLoop !== null;
        nodeLoop = nodeLoop.next
      ) {
        if (nodeLoop.next === null) {
          nodeLoop.next = node;
          this.tail = node;
          break;
        }
      }
    }
  }
}

/**
 *
 * @param {Number} n
 */
function getNumberLastDigit(n) {
  /**
   * + 123
   * + 123 % 10 = 3
   * + 123 modulo 10 = 3
   * + 123 mod 10 = 3
   *   + 120 / 10 = 12
   *   + 12 x 10 = 120
   *   + 120 + 3 = 123
   *
   */
  return n % 10;
}

/**
 *
 * @param {SinglyLinkedList} sll1
 * @param {SinglyLinkedList} sll2
 *
 */
function f(sll1, sll2) {
  const l1 = sll1.length();
  const l2 = sll2.length();

  sll1.show();
  sll2.show();

  /**
   * + case 1: done
   *   + l1 = l2
   * + case 2:
   *   + l1 > l2
   * + case 3: done
   *   + l1 < l2
   */

  if (l1 === l2) {
    const result = new SinglyLinkedList();
    const oneReminder = 1;
    let wasReminder = false;
    let count = 0;

    for (
      let nl1 = sll1.head, nl2 = sll2.head;
      nl1 !== null && nl2 !== null;
      nl1 = nl1.next, nl2 = nl2.next
    ) {
      const value1 = nl1.value;
      const value2 = nl2.value;
      const vl1pvl2 = value1 + value2;

      if (count === 0) {
        if (vl1pvl2 < 10) {
          wasReminder = false;
          const node = new Node(vl1pvl2);
          result.addNode(node);
          count++;
          continue;
        }

        if (vl1pvl2 >= 10) {
          wasReminder = true;
          const nodeValue = getNumberLastDigit(vl1pvl2);
          const node = new Node(nodeValue);
          result.addNode(node);
          count++;
          continue;
        }
      }

      if (count !== 0) {
        if (wasReminder === true) {
          const addValue = oneReminder + vl1pvl2;
          /**
           * + case 1:
           *   + 1 + 9 = 10
           * + case 2:
           *   + 1 + 8 = 9
           *
           */
          if (addValue >= 10) {
            wasReminder = true;
            const addValueLastDigit = getNumberLastDigit(addValue);
            const nodeValue = new Node(addValueLastDigit);
            result.addNode(nodeValue);
            count++;
            continue;
          }

          if (addValue < 10) {
            const nodeValue = new Node(addValue);
            result.addNode(nodeValue);
            wasReminder = false;
            count++;
            continue;
          }
        }

        if (wasReminder !== true) {
          /**
           * + case 1:
           *   + vl1pvl2 >= 10
           * + case 2:
           *   + vl1pvl2 < 10
           *
           */
          if (vl1pvl2 >= 10) {
            wasReminder = true;
            const value = getNumberLastDigit(vl1pvl2);
            const nodeValue = new Node(value);
            result.addNode(nodeValue);
            count++;
            continue;
          }

          if (vl1pvl2 < 10) {
            wasReminder = false;
            const nodeValue = new Node(vl1pvl2);
            result.addNode(nodeValue);
            count++;
            continue;
          }
        }
      }
    }

    /**
     * add one more node to singly linked list
     *
     */
    if (wasReminder === true) {
      const nodeValue = new Node(oneReminder);
      result.addNode(nodeValue);
    }

    return result;
  }

  const result = new SinglyLinkedList();
  const oneReminder = 1;
  let wasReminder = false;

  if (l1 < l2) {
    let nl1 = sll1.head;
    let countSLL1Node = 1;

    for (let nl2 = sll2.head; nl2 !== null; nl2 = nl2.next) {
      if (nl1 !== null) {
        const nl1vl = nl1.value;
        const nl2vl = nl2.value;
        const addValue = nl1vl + nl2vl;

        if (countSLL1Node === 1) {
          /**
           * case 1: done
           * addValue < 10
           *
           * case 2: done
           * addValue >= 10
           *
           */

          if (addValue < 10) {
            wasReminder = false;
            const node = new Node(addValue);
            result.addNode(node);
            countSLL1Node++;
            nl1 = nl1.next;
            continue;
          }

          if (addValue >= 10) {
            wasReminder = true;
            const lastDigit = getNumberLastDigit(addValue);
            const node = new Node(lastDigit);
            result.addNode(node);
            countSLL1Node++;
            nl1 = nl1.next;
            continue;
          }
        }

        if (countSLL1Node <= l1) {
          if (wasReminder === true) {
            const addNodeValue = addValue + oneReminder;
            if (addNodeValue < 10) {
              const node = new Node(addNodeValue);
              result.addNode(node);
              countSLL1Node++;
              nl1 = nl1.next;
              wasReminder = false;
              continue;
            }

            if (addNodeValue >= 10) {
              wasReminder = true;
              const lastDigit = getNumberLastDigit(addNodeValue);
              const node = new Node(lastDigit);
              result.addNode(node);
              countSLL1Node++;
              nl1 = nl1.next;
              continue;
            }
          }

          if (wasReminder !== true) {
            if (addValue < 10) {
              const node = new Node(addValue);
              result.addNode(node);
              countSLL1Node++;
              nl1 = nl1.next;
              wasReminder = false;
              continue;
            }

            if (addValue >= 10) {
              const lastDigit = getNumberLastDigit(addValue);
              const node = new Node(lastDigit);
              result.addNode(node);
              wasReminder = true;
              countSLL1Node++;
              nl1 = nl1.next;
              continue;
            }
          }
        }
      }

      if (countSLL1Node > l1 && wasReminder === true) {
        wasReminder = false;
        const nl2vl = nl2.value;
        const nodeValue = nl2vl + oneReminder;
        const node = new Node(nodeValue);
        result.addNode(node);
        continue;
      }

      if (countSLL1Node > l1 && wasReminder !== true) {
        const nl2vl = nl2.value;
        const node = new Node(nl2vl);
        result.addNode(node);
      }
    }
  }

  if (l1 > l2) {
    let nl2 = sll2.head;
    let countNodeSLL2 = 1;
    let wasReminder = false;
    const oneReminder = 1;

    for (let nl1 = sll1.head; nl1 !== null; nl1 = nl1.next) {
      if (nl2 !== null) {
        const nl1vl = nl1.value;
        const nl2vl = nl2.value;
        const addValue = nl1vl + nl2vl;

        if (countNodeSLL2 === 1) {
          if (addValue < 10) {
            const node = new Node(addValue);
            result.addNode(node);
            nl2 = nl2.next;
            wasReminder = false;
            countNodeSLL2++;
            continue;
          }

          if (addValue >= 10) {
            const lastDigit = getNumberLastDigit(addValue);
            const node = new Node(lastDigit);
            result.addNode(node);
            wasReminder = true;
            countNodeSLL2++;
            nl2 = nl2.next;

            continue;
          }
        }

        if (countNodeSLL2 <= l2) {
          if (wasReminder === true) {
            const value = oneReminder + addValue;
            if (value < 10) {
              const node = new Node(value);
              result.addNode(node);
              countNodeSLL2++;
              nl2 = nl2.next;
              wasReminder = false;
              continue;
            }

            if (value >= 10) {
              const lastDigit = getNumberLastDigit(value);
              const node = new Node(lastDigit);
              result.addNode(node);
              nl2 = nl2.next;
              countNodeSLL2++;
              wasReminder = true;
              continue;
            }
          }

          if (wasReminder !== true) {
            const value = addValue;

            if (value < 10) {
              const node = new Node(value);
              result.addNode(node);
              wasReminder = false;
              countNodeSLL2++;
              nl2 = nl2.next;
              continue;
            }

            if (value >= 10) {
              const lastDigit = getNumberLastDigit(value);
              const node = new Node(lastDigit);
              result.addNode(node);
              wasReminder = true;
              countNodeSLL2++;
              nl2 = nl2.next;
              continue;
            }
          }
        }
      }

      if (wasReminder === true) {
        const value = oneReminder + nl1.value;
        const node = new Node(value);
        result.addNode(node);
        wasReminder = false;
        continue;
      }

      if (wasReminder !== true) {
        const value = nl1.value;
        const node = new Node(value);
        result.addNode(node);
      }
    }
  }

  return result;
}

function test1() {
  /* case 1. done
   * + ll1: 1 -> 2 -> 3: 321
   * + ll2: 4 -> 5 -> 6: 654
   * + ret: 5 -> 7 -> 9: 975
   */

  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();
  sll1.addNode(node1);
  sll1.addNode(node2);
  sll1.addNode(node3);
  sll2.addNode(node4);
  sll2.addNode(node5);
  sll2.addNode(node6);

  const result = f(sll1, sll2);
  result.show();
}

function test2() {
  /* case 2.
   * + ll1: 8 -> 6 -> 1: 168
   * + ll2: 4 -> 5 -> 2: 254
   * + ret: 2 -> 2 -> 4: 422
   *
   *
   */
  const node1 = new Node(1);
  const node6 = new Node(6);
  const node8 = new Node(8);

  const node4 = new Node(4);
  const node5 = new Node(5);
  const node2 = new Node(2);

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  sll1.addNode(node8);
  sll1.addNode(node6);
  sll1.addNode(node1);

  sll2.addNode(node2);
  sll2.addNode(node5);
  sll2.addNode(node4);

  const result = f(sll1, sll2);
  result.show(); // 4 -> 2 -> 2
}
function test3() {
  /* case 3.
   * + ll1: 8 -> 6 -> 1: 168
   * + ll2: 4 -> 5 -> 9: 954
   * + ret: 2 -> 2 -> 1 -> 1: 1122
   *
   *
   */
  const node8 = new Node(8);
  const node6 = new Node(6);
  const node1 = new Node(1);

  const node4 = new Node(4);
  const node5 = new Node(5);
  const node9 = new Node(9);

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  sll1.addNode(node8);
  sll1.addNode(node6);
  sll1.addNode(node1);

  sll2.addNode(node4);
  sll2.addNode(node5);
  sll2.addNode(node9);

  const result = f(sll1, sll2);
  result.show(); // ret: 2 -> 2 -> 1 -> 1
}
function test4() {
  /* case 4.
   * + ll1: 5 -> 6 -> 7: 765
   * + ll2: 6 -> 5 -> 2 -> 1: 1256
   * + ret: 1 -> 2 -> 0 -> 2: 2021
   *
   */
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);
  const sll1 = new SinglyLinkedList();
  sll1.addNode(node5);
  sll1.addNode(node6);
  sll1.addNode(node7);

  const n26 = new Node(6);
  const n25 = new Node(5);
  const n22 = new Node(2);
  const n21 = new Node(1);

  const sll2 = new SinglyLinkedList();
  sll2.addNode(n26);
  sll2.addNode(n25);
  sll2.addNode(n22);
  sll2.addNode(n21);

  const result = f(sll1, sll2);
  result.show();
}
function test5() {
  /* case 5.
   * + ll1: 5 -> 6 -> 7:      765
   * + ll2: 6 -> 5 -> 7 -> 1: 1756
   * + ret: 1 -> 2 -> 5 -> 2: 2521
   *
   */
  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n51 = new Node(5);
  const n61 = new Node(6);
  const n71 = new Node(7);

  const n62 = new Node(6);
  const n52 = new Node(5);
  const n72 = new Node(7);
  const n12 = new Node(1);

  sll1.addNode(n51);
  sll1.addNode(n61);
  sll1.addNode(n71);

  sll2.addNode(n62);
  sll2.addNode(n52);
  sll2.addNode(n72);
  sll2.addNode(n12);

  const result = f(sll1, sll2);
  result.show();
}

function test6() {
  /* case 6.
   * + ll1: 1 -> 3 -> 5:       531
   * + ll2: 2 -> 4 -> 1 -> 1: 1142
   * + ret: 3 -> 7 -> 6 -> 1: 1673
   *
   *
   */
  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n11 = new Node(1);
  const n13 = new Node(3);
  const n15 = new Node(5);

  const n22 = new Node(2);
  const n24 = new Node(4);
  const n211 = new Node(1);
  const n212 = new Node(1);

  sll1.addNode(n11);
  sll1.addNode(n13);
  sll1.addNode(n15);

  sll2.addNode(n22);
  sll2.addNode(n24);
  sll2.addNode(n211);
  sll2.addNode(n212);

  const result = f(sll1, sll2);
  result.show(); //  3 -> 7 -> 6 -> 1
}

function test7() {
  /* case 7.
   * + ll1: 1 -> 3 -> 5:                531
   * + ll2: 2 -> 4 -> 1 -> 1 -> 1 -> 2: 211142
   * + ret: 3 -> 7 -> 6 -> 1 -> 1 -> 2: 211673
   *
   */

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n11 = new Node(1);
  const n13 = new Node(3);
  const n15 = new Node(5);

  const n221 = new Node(2);
  const n24 = new Node(4);
  const n211 = new Node(1);
  const n212 = new Node(1);
  const n213 = new Node(1);
  const n222 = new Node(2);

  sll1.addNode(n11);
  sll1.addNode(n13);
  sll1.addNode(n15);

  sll2.addNode(n221);
  sll2.addNode(n24);
  sll2.addNode(n211);
  sll2.addNode(n212);
  sll2.addNode(n213);
  sll2.addNode(n222);

  const result = f(sll1, sll2);
  result.show(); // 3 -> 7 -> 6 -> 1 -> 1 -> 2
}

function test8() {
  /* + ll1: 7 -> 9 -> 5:                597
   * + ll2: 7 -> 9 -> 5 -> 1 -> 1 -> 2: 211597
   * + ret: 4 -> 9 -> 1 -> 2 -> 1 -> 2: 212194
   *
   */
  console.log("Test 8");

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n17 = new Node(7);
  const n19 = new Node(9);
  const n15 = new Node(5);

  const n21 = new Node(7);
  const n22 = new Node(9);
  const n23 = new Node(5);
  const n24 = new Node(1);
  const n25 = new Node(1);
  const n26 = new Node(2);

  sll1.addNode(n17);
  sll1.addNode(n19);
  sll1.addNode(n15);

  sll2.addNode(n21);
  sll2.addNode(n22);
  sll2.addNode(n23);
  sll2.addNode(n24);
  sll2.addNode(n25);
  sll2.addNode(n26);

  const result = f(sll1, sll2);
  result.show(); // 4 -> 9 -> 1 -> 2 -> 1 -> 2
}

function test9() {
  /* + ll1: 7 -> 9 -> 5:                597
   * + ll2: 7 -> 9 -> 5 -> 1 -> 2 -> 5: 211597
   * + ret: 4 -> 9 -> 1 -> 2 -> 2 -> 5: 522194
   *
   */

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n17 = new Node(7);
  const n19 = new Node(9);
  const n15 = new Node(5);

  const n21 = new Node(7);
  const n22 = new Node(9);
  const n23 = new Node(5);
  const n24 = new Node(1);
  const n25 = new Node(2);
  const n26 = new Node(5);

  sll1.addNode(n17);
  sll1.addNode(n19);
  sll1.addNode(n15);

  sll2.addNode(n21);
  sll2.addNode(n22);
  sll2.addNode(n23);
  sll2.addNode(n24);
  sll2.addNode(n25);
  sll2.addNode(n26);

  const result = f(sll1, sll2);
  result.show(); // 4 -> 9 -> 1 -> 2 -> 2 -> 5
}

function test10() {
  /* + ll1: 1 -> 2 -> 3:                321
   * + ll2: 3 -> 2 -> 1 -> 1 -> 2 -> 5: 521123
   * + ret: 4 -> 4 -> 4 -> 1 -> 2 -> 5: 521444
   *
   */

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n11 = new Node(1);
  const n12 = new Node(2);
  const n13 = new Node(3);

  const n21 = new Node(3);
  const n22 = new Node(2);
  const n23 = new Node(1);
  const n24 = new Node(1);
  const n25 = new Node(2);
  const n26 = new Node(5);

  sll1.addNode(n11);
  sll1.addNode(n12);
  sll1.addNode(n13);

  sll2.addNode(n21);
  sll2.addNode(n22);
  sll2.addNode(n23);
  sll2.addNode(n24);
  sll2.addNode(n25);
  sll2.addNode(n26);

  const result = f(sll1, sll2);
  result.show(); // 4 -> 4 -> 4 -> 1 -> 2 -> 5
}

function test11() {
  /* + ll1: 3 -> 2 -> 1 -> 1 -> 2 -> 5: 521123
   * + ll2: 1 -> 2 -> 3               :    321
   * + ret: 4 -> 4 -> 4 -> 1 -> 2 -> 5: 521444
   *
   */

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n11 = new Node(3);
  const n12 = new Node(2);
  const n13 = new Node(1);
  const n14 = new Node(1);
  const n15 = new Node(2);
  const n16 = new Node(5);

  const n21 = new Node(1);
  const n22 = new Node(2);
  const n23 = new Node(3);

  sll1.addNode(n11);
  sll1.addNode(n12);
  sll1.addNode(n13);
  sll1.addNode(n14);
  sll1.addNode(n15);
  sll1.addNode(n16);

  sll2.addNode(n21);
  sll2.addNode(n22);
  sll2.addNode(n23);

  const result = f(sll1, sll2);
  result.show(); // 4 -> 4 -> 4 -> 1 -> 2 -> 5
}

function test12() {
  /* + ll1: 7 -> 8 -> 9 -> 1 -> 2 -> 5: 521987
   * + ll2: 7 -> 8 -> 9               :    987
   * + ret: 4 -> 7 -> 9 -> 2 -> 2 -> 5: 522974
   *
   */

  const sll1 = new SinglyLinkedList();
  const sll2 = new SinglyLinkedList();

  const n11 = new Node(7);
  const n12 = new Node(8);
  const n13 = new Node(9);
  const n14 = new Node(1);
  const n15 = new Node(2);
  const n16 = new Node(5);

  const n21 = new Node(7);
  const n22 = new Node(8);
  const n23 = new Node(9);

  sll1.addNode(n11);
  sll1.addNode(n12);
  sll1.addNode(n13);
  sll1.addNode(n14);
  sll1.addNode(n15);
  sll1.addNode(n16);

  sll2.addNode(n21);
  sll2.addNode(n22);
  sll2.addNode(n23);

  const result = f(sll1, sll2);
  result.show(); // 4 -> 7 -> 9 -> 2 -> 2 -> 5
}

{
  // test1(); // done
  // test2(); // done
  // test3(); // done
  // test4(); // done
  // test5(); // done
  // test6(); // done
  // test7(); // done
  // test8();
  // test9();
  // test10();
  // test11();
  test12();
}
