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
          const node = new Node(vl1pvl2);
          result.addNode(node);
        }

        if (vl1pvl2 >= 10) {
          wasReminder = true;
          const node = new Node(0);
          result.addNode(node);
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
            continue;
          }

          if (addValue < 10) {
            const nodeValue = new Node(addValue);
            result.addNode(nodeValue);
            wasReminder = false;
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
            continue;
          }

          if (vl1pvl2 < 10) {
            wasReminder = false;
            const nodeValue = new Node(vl1pvl2);
            result.addNode(nodeValue);
            continue;
          }
        }
      }

      count++;
    }

    return result;
  }

  if (l1 !== l2) {
    return;
  }
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
  result.show();
}
function test4() {}
function test5() {}

{
  // test1(); // done
  // test2(); // done
  test3();
  // test4();
  // test5();
}
