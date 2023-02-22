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

  log() {
    for (
      let nodeTraverse = this.head;
      nodeTraverse !== null;
      nodeTraverse = nodeTraverse.next
    ) {
      console.log(nodeTraverse);
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
     * + case 2: done
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
     * + case 3:
     *   + singly linked list: 1 -> 2 -> 3 -> 4 -> null
     *   + head: 1 -> 2
     *   + tail: 4 -> null
     *   + node: 5 -> null
     *   + ret: 1 -> 2 -> 3 -> 4 -> 5 -> null
     *     + tail.next = node
     *
     *
     */

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    const countNode = this.countNode();
    if (countNode === 1) {
      this.tail = node;
      this.head.next = this.tail;
      return;
    }

    if (countNode !== 1) {
      console.log("here");
      for (
        let nodeTraverse = this.head;
        nodeTraverse !== null;
        nodeTraverse = nodeTraverse.next
      ) {
        if (nodeTraverse.next === null) {
          nodeTraverse.next = node;
          break;
        }
      }

      this.tail = node;
      return;
    }
  }
}

const node5 = new Node(5, null);
const node4 = new Node(4, null);

const node3 = new Node(3, null);
const node2 = new Node(2, null);
const node1 = new Node(1, null);

const node33 = new Node(3, null);
const node22 = new Node(2, node33);
const node11 = new Node(1, node22);
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
console.log("node count: ", singlyLinkedList2.countNode());
console.log("\n\n\n");

const singlyLinkedList3 = new SinglyLinkedList(null, null);
console.log(singlyLinkedList3);
singlyLinkedList3.addNode(node1);
console.log("after add node 1: ", singlyLinkedList3);
singlyLinkedList3.addNode(node2);
console.log("after add node 2: ", singlyLinkedList3);
singlyLinkedList3.addNode(node3);
console.log("after add node 3: ", singlyLinkedList3);
singlyLinkedList3.addNode(node4);
console.log("after add node 4: ");
singlyLinkedList3.log();

console.log("node count: ", singlyLinkedList3.countNode());
console.log("\n\n\n");
