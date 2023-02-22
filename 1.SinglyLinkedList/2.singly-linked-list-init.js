class Node {
  /**
   *
   * @param {number} value
   * @param {Node} nextNode
   *
   */
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList2 {
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
}

const node3 = new Node(3, null);
const node2 = new Node(2, null);
const node1 = new Node(1, null);

const singlyLinkedList2 = new SinglyLinkedList2(node1, null);
console.log(singlyLinkedList2);
