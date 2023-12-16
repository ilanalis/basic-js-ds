const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const list = removeK(l, k)
  function removeK(node, k) {
    if (!node) {
      return null
    }
    if (!node.next) {

      return node
    }
    if (node.next.value === k && (!node.next.next)) {
      node.next = null;
      return node;
    }
    if (node.value === k) {
      if (!node.next) {
        node = null;
      } else {
        node = removeK(node.next, k);

      }
      return node;
    }
    node.next = removeK(node.next, k);
    return node
  }
  return list;
}

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

module.exports = {
  removeKFromList
};
