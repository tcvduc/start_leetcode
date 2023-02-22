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
 * + Example 1
 * linked list 1:   2 -> 4 -> 3
 * linked list 2:   5 -> 6 -> 4
 * ----------------------------
 * linked list ret: 7 -> 0 -> 8
 *
 * + input:
 *   + l1 =  [2,4,3]
 *   + l2 =  [5,6,4]
 * + output: [7,0,8]
 * + explanation: 342 + 465 = 807
 *
 *
 * + Example 2
 * + input
 *   + l1 = [0]
 *   + l2 = [0]
 * + output
 *   + [0]
 *
 * + Example 3
 * + input
 *   + l1 = [9,9,9,9,9,9,9]
 *   + l2 = [9,9,9,9]
 * + output [8,9,9,9,0,0,0,1]
 * + 9999999 + 9999 = 10009998
 *
 * + constrains
 *   + the number of nodes in each linked list
 *   is in the range [1,100]
 *   + 0 <= node.val <= 9
 *   + it is guaranteed that the list represents
 *   a number that does not have leading zero
 *
 *
 *
 *
 */

/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 */

class Node {
  /**
   *
   * @param {number} value
   * @param {object} next
   *
   */
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class SinglyLinkedList {
  constructor(head, tail) {
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
    }
  }

  length() {
    let ret = 0;

    for (
      let nodeTraverse = this.head;
      nodeTraverse !== null;
      nodeTraverse = nodeTraverse.next
    ) {
      ret++;
    }

    return ret;
  }

  countNode() {
    let count = 0;

    for (
      let nodeTraverse = this.head;
      nodeTraverse !== null;
      nodeTraverse = nodeTraverse.next
    ) {
      count++;
    }

    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
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
}

/**
 *
 * @param {SinglyLinkedList} ll1
 * @param {SinglyLinkedList} ll2
 *
 */
function addTwoSinglyLinkedList(ll1, ll2) {
  /**
   * case 1: ll1 length === ll2 length
   * + ll1: 2 -> 4 -> 3 -> null
   * + ll2: 5 -> 6 -> 4 -> null
   * + ret: 7 -> 0 -> 8 -> null
   *   + code virtual
   *     + node1 + node 2 < 10
   *       + node ret = node1 + node2
   *       + ret.add(node ret)
   *     + node1 + node 2 >= 10
   *
   *
   *
   * case 2: ll1 length !== ll2 length
   * + ll1: 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> null
   * + ll2: 9 -> 9 -> 9 -> 9 -> null
   * + ret: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1 -> null
   *
   */
  const ll1Length = ll1.length();
  const ll2Length = ll2.length();

  if (ll1Length === ll2Length) {
    const singlyLinkedListRet = new SinglyLinkedList(null, null);

    for (
      let singlyLinkedList1NodeTraverse = ll1.head,
        singlyLinkedList2NodeTraverse = ll2.head;
      singlyLinkedList1NodeTraverse !== null,
        singlyLinkedList2NodeTraverse !== null;
      singlyLinkedList1NodeTraverse = singlyLinkedList1NodeTraverse.next,
        singlyLinkedList2NodeTraverse = singlyLinkedList2NodeTraverse.next
    ) {
      const currentSinglyLinkedList1Node = singlyLinkedList1NodeTraverse;
      const currentSinglyLinkedList2Node = singlyLinkedList2NodeTraverse;

      const node1Value = currentSinglyLinkedList1Node.value;
      const node2Value = currentSinglyLinkedList2Node.value;
      const node1AddNode2Value = node1Value + node2Value;

      if (node1AddNode2Value < 10) {
        const retNode = new Node(node1AddNode2Value, null);
        singlyLinkedListRet.addNode(retNode);
      }

      if (node1AddNode2Value >= 10) {
      }
    }

    console.log("singlyLinkedListRet: ", singlyLinkedListRet);
    return;
  }

  if (ll1Length !== ll2Length) {
    return;
  }
}

/**
 * @param {Array} l1
 * @param {Array} l2
 * @return {Array}
 *
 */
const addTwoNumbers = function (l1, l2) {
  const node1 = new Node(1, null);
  const node2 = new Node(2, null);
  const node3 = new Node(3, null);
  const node4 = new Node(4, null);
  const singlyLinkedList = new SinglyLinkedList(null, null);
  singlyLinkedList.addNode(node1);
  singlyLinkedList.addNode(node2);
  singlyLinkedList.addNode(node3);
  singlyLinkedList.addNode(node4);
  const singlyLinkedList1 = new SinglyLinkedList(null, null);
  const singlyLinkedList2 = new SinglyLinkedList(null, null);

  // initial linked list 1
  for (let i = 0; i <= l1.length - 1; ++i) {
    const nodei = new Node(l1[i], null);
    singlyLinkedList1.addNode(nodei);
  }

  // initial linked list 2
  for (let j = 0; j <= l2.length - 1; ++j) {
    const nodej = new Node(l2[j], null);
    singlyLinkedList2.addNode(nodej);
  }

  addTwoSinglyLinkedList(singlyLinkedList1, singlyLinkedList2);
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2)); // [7, 0, 8]
