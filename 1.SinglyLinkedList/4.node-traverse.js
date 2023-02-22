class Node {
  /**
   *
   * @param {number} value
   * @param {Node | null} next
   *
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
// console.log(node1);

for (
  let nodeTraverse = node1;
  nodeTraverse !== null;
  nodeTraverse = nodeTraverse.next
) {
  console.log(nodeTraverse);
}

for (
  let nodeTraverse = node1;
  nodeTraverse !== null;
  nodeTraverse = nodeTraverse.next
) {
  console.log(nodeTraverse);
}
