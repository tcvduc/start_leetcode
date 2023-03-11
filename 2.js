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

  length = function () {
    let count = 0;
    for (
      let nodeTraverse = this.head;
      nodeTraverse !== null;
      nodeTraverse = nodeTraverse.next
    ) {
      count++;
    }
    return count;
  };

  getArt = function () {
    /**
     * Case 1: done
     * + sll1: undefined
     * + ret: undefined
     *
     * Case 2: done
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

      ret += "null";
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

/**
 *
 * @param {SinglyLinkedList} ll1
 * @param {SinglyLinkedList} ll2
 *
 */
function f(ll1, ll2) {
  /* Case 1.
   * + ll1: 1 -> 2 -> 3: 321
   * + ll2: 4 -> 5 -> 6: 654
   * + ret: 5 -> 7 -> 9: 975
   *
   * Case 2.
   * + ll1: 8 -> 6 -> 1: 168
   * + ll2: 4 -> 5 -> 2: 254
   * + ret: 2 -> 2 -> 4: 42
   *
   * Case 3
   * + ll1: 1 -> 2 -> 3 -> 4 -> null: 4321
   * + ll2: 4 -> 5 -> 6 -> null:      654
   * + ret: 5 -> 7 -> 9 -> 4 -> null: 4975
   *
   * Case 4
   * + ll1: 1 -> 2 -> 3 -> 4 -> null: 4321
   * + ll2: 9 -> 8 -> 6 -> null:      689
   * + ret: 0 -> 1 -> 0 -> 5 -> null: 5010
   *
   *
   *
   **/
  const length1 = ll1.length();
  const length2 = ll2.length();

  const result = new SinglyLinkedList(undefined, undefined);

  if (length1 === length2) {
    for (
      let nt1 = ll1.head, nt2 = ll2.head;
      nt1 !== null && nt2 !== null;
      nt1 = nt1.next, nt2 = nt2.next
    ) {
      const node = new Node(nt1.value + nt2.value);
      result.addNode(node);
    }

    console.log(result.getArt());
    return;
  }

  if (length1 !== length2) {
    return;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8);
const n9 = new Node(9);

const ll1 = new SinglyLinkedList(undefined, undefined);
const ll2 = new SinglyLinkedList(undefined, undefined);

ll1.addNode(n1);
ll1.addNode(n2);
ll1.addNode(n3);

ll2.addNode(n4);
ll2.addNode(n5);
ll2.addNode(n6);

ll1.getArt();
ll2.getArt();

console.log(f(ll1, ll2));
// ll1: 1 -> 2 -> 3: 321
// ll2: 4 -> 5 -> 6: 654
// ret: 5 -> 7 -> 9: 975
