class Node {
  /**
   *
   * @param {number} value
   * @param {Node} next
   *
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  /**
   *
   * @param {Node} head
   * @param {Node} tail
   *
   */
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  countNode() {
    /**
     * case 1: done
     * + singly linked list: null
     *   + ret: 0
     * case 2:
     * + singly linked list: 1 -> null
     *   + ret: 1
     *
     */
    let count = 0;

    if (this.head === null) {
      return count;
    }

    if (this.head !== null) {
      for (
        let nodeTraverse = this.head;
        nodeTraverse !== null;
        nodeTraverse = nodeTraverse.next
      ) {
        count++;
      }

      return count;
    }
  }

  /**
   *
   * @param {Node} node
   */
  addNode(node) {
    /**
     * + case 1: done
     *   + head: null
     *   + tail: null
     *   + node: 1 -> null
     *   + ret: 1 -> null
     *     + head = tail = node
     * + case 2:
     *   + head: 1 -> null
     *   + tail: 1 -> null
     *   + node: 2 -> null
     *   + ret: 1 -> 2 -> null
     *     + head: 1 -> 2
     *     + tail: 2 -> null
     *       + countNode
     *       + if countNode === 1
     *         + head: 1 -> null
     *         + tail: node
     *
     *
     */

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
  }
}

const node3 = new Node(3, null);
const node2 = new Node(2, null);
const node1 = new Node(1, null);
console.log(node3);
console.log(node2);
console.log(node1);
console.log("\n\n\n");

const singlyLinkedList1 = new SinglyLinkedList(node1, null);
console.log(singlyLinkedList1);
console.log("\n\n\n");

const singlyLinkedList2 = new SinglyLinkedList(null, null);
console.log(singlyLinkedList2);
singlyLinkedList2.addNode(node1);
console.log("after add node: ", singlyLinkedList2);
