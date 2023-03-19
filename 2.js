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
 * 1.
 * + ll1: 1 -> 2 -> 3: 321
 * + ll2: 4 -> 5 -> 6: 654
 * + ret: 5 -> 7 -> 9: 975
 *
 * 2.
 * + ll1: 8 -> 6 -> 1: 168
 * + ll2: 4 -> 5 -> 2: 254
 * + ret: 2 -> 2 -> 4: 422
 *
 * 3.
 * + ll1: 5 -> 6 -> 7: 765
 * + ll2: 6 -> 5 -> 2 -> 1: 1256
 * + ret: 1 -> 2 -> 0 -> 2: 2021
 *
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

  getHeadNode() {
    return this.head;
  }

  getTailNode() {
    return this.tail;
  }

  /**
   *
   * @param {Node} node
   */
  addNode(node) {
    /**
     * case 1: done
     * + ll: null
     * + node: 1 -> null
     * + ret: 1 -> null
     *
     * case 2: done
     * + ll1: 1 -> null
     * + node: 2 -> null
     * + ret: 1 -> 2 -> null
     *
     *
     */

    // case 1
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    // case 2
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

function test1() {
  /**
   * 1.
   * + ll1: 1 -> 2 -> 3: 321
   * + ll2: 4 -> 5 -> 6: 654
   * + ret: 5 -> 7 -> 9: 975
   *
   *
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
}
function test2() {}
function test3() {}

{
  test1();
  test2();
  test3();
}
