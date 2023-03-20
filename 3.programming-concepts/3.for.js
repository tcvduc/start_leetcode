/**
 * 3. for
 *
 */

for (let i = 0; i <= 10; i++) {
  console.log(`i = ${i}`);
}

console.log("\n");

for (let i = 10; i >= 0; --i) {
  console.log(`i = ${i}`);
}

console.log("\n");
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

  /**
   *
   * @param {Node} node
   */
  addNode(node) {
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

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const sll = new SinglyLinkedList();
sll.addNode(node1);
sll.addNode(node2);
sll.addNode(node3);

console.log(sll);

for (let nodeLoop = sll.head; nodeLoop !== null; nodeLoop = nodeLoop.next) {
  console.log("node loop value: ", nodeLoop.value);
}
