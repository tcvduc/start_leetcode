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
const nodeHead = new Node(1, node2);

console.log(nodeHead);
