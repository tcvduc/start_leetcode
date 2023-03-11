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
 *  + 0123 - not this
 *  + 0 - this accepted
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
 *
 *
 */

/**
 * Node
 * + n1: 1 -> null
 * + n2: 2 -> null
 */
class Node {
  /**
   *
   * @param {number} value
   */
  constructor(value) {
    this.value = value | 0;
    this.next = null;
  }
}

/**
 * Singly Linked List
 * + ll1: 1 -> 2 -> null
 * + ll2: 1 -> 2 -> 3 -> 4 -> 5 -> null
 *
 * + head: 1 -> 2
 * + tail: 5 -> null
 *
 *
 */
class SinglyLinkedList {
  /**
   *
   * @param {Node} head
   * @param {Node} tail
   *
   */
  constructor(head, tail) {
    this.head = head || undefined;
    this.tail = tail || undefined;
  }

  getArt = function () {
    /**
     * Case 1: done
     * + sll1: undefined
     * + ret: undefined
     *
     * Case 2:
     * + sll: 1 -> 2 -> 3 -> 4 -> null
     * + head: 1 -> 2
     * + tail: 4 -> null
     * + art: 1 -> 2 -> 3 -> 4 -> null
     *
     */

    if (this.head === undefined) {
      return undefined;
    }

    if (this.head !== undefined) {
      let ret = "";
      for (
        let nodeTraverse = this.head;
        nodeTraverse !== null;
        nodeTraverse = nodeTraverse.next
      ) {
        ret += nodeTraverse.value + " -> ";
      }
      console.log(ret);
    }
  };

  /**
   *
   * @param {Node} node
   *
   */
  addNode(node) {
    /**
     * Case 1: done
     * + sll1: undefined
     * + node: 1 -> null
     *
     * Case 2: done
     * + sll: 1 -> null
     * + node: 2 -> null
     * + ret: 1 -> 2 -> null
     *
     * Case 3: done
     * + sll: 1 -> 2 -> 3 -> 4 -> null
     * + node: 5 -> null
     * + ret: 1 -> 2 -> 3 -> 4 -> 5 -> null
     *
     */
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (this.head !== undefined) {
      for (
        let nodeTraverse = this.head;
        nodeTraverse !== null;
        nodeTraverse = nodeTraverse.next
      ) {
        if (nodeTraverse.next === null) {
          nodeTraverse.next = node;
          this.tail = node;
          break;
        }
      }
    }
  }

  getHeadNode() {
    return this.head;
  }

  getTailNode() {
    return this.tail;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);

const sll1 = new SinglyLinkedList(undefined, undefined);
sll1.addNode(n1);
sll1.addNode(n2);
sll1.addNode(n3);
sll1.addNode(n4);
// console.log(sll1);
// sll1.getArt();
