const { NotImplementedError } = require('../extensions/index.js');


const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    if (!this._root) {
      this._root = addNode(this._root, data);
      return;
    }

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else if (node.data < data) {
        node.right = addNode(node.right, data);
      }
      return node
    }
    addNode(this.root(), data)

  }

  has(data) {
    let hasNode = hasNodeFunction(this._root, data);

    function hasNodeFunction(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return hasNodeFunction(node.left, data);
      } else {
        return hasNodeFunction(node.right, data);
      }
    }
    return hasNode;
  }

  find(data) {
    const result = findNode(this._root, data);
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    };
    return result;
  }

  remove(data) {

    this._root = removeNode(this._root, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          const newNode = node.right;
          delete node.right;
          return newNode;
        } else if (!node.right) {
          const newNode = node.left;
          delete node.left;
          return newNode;
        }
        let minWithMax = findMinWithinMax(node.right)
        node.data = minWithMax.data;
        node.right = removeNode(node.right, minWithMax.data);
        return node;

      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
      }
      return node;

    };
    function findMinWithinMax(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node;
      } else {
        return findMinWithinMax(node.left);
      }
    }
  }
  min() {
    const minValue = findMinValue(this._root);

    function findMinValue(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node;
      } else {
        return findMinValue(node.left);
      }
    }
    if (minValue) {
      return minValue.data
    }

    return minValue;
  }
  max() {
    const maxValue = findMaxValue(this._root)

    function findMaxValue(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node;
      } else {
        return findMaxValue(node.right);
      }
    }
    if (maxValue.data) {
      return maxValue.data;
    }
    return maxValue;
  }
}

module.exports = {
  BinarySearchTree
};