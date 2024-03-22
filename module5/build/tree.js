"use strict";
class TreeNode {
    // constructor
    constructor(id, value, left, right) {
        this._id = id;
        this._left = left;
        this._value = value;
        this._right = right;
    }
    // accessors
    get left() {
        return this._left;
    }
    get id() {
        return this._id;
    }
    get value() {
        return this._value;
    }
    get right() {
        return this._right;
    }
    set left(left) {
        this._left = left;
    }
    set id(id) {
        this._id = id;
    }
    set value(value) {
        this._value = value;
    }
    set right(right) {
        this._right = right;
    }
}
/**
  * Implements a Binary Search Tree (BST)
  */
class Tree {
    constructor() {
        this._root = null;
        this._currentId = 0;
    }
    get root() {
        return this._root;
    }
    set root(root) {
        this._root = root;
    }
    get currentId() {
        return this._currentId;
    }
    // methods
    updateId() {
        this._currentId += 1;
    }
    newNode(value) {
        this._root = this.addNode(value, this._root);
        this.updateId();
    }
    /**
      * Add a node to the Tree
      */
    addNode(value, node) {
        if (node == null) {
            return new TreeNode(value, this._currentId, null, null);
        }
        if (value < node.value) {
            node.left = this.addNode(value, node.left);
        }
        else {
            node.right = this.addNode(value, node.right);
        }
        return node;
    }
    /**
      * Method to print the tree in-order
      */
    printTree(node = this._root) {
        if (node == null) {
            return;
        }
        this.printTree(node.left);
        console.log(node.value);
        this.printTree(node.right);
    }
}
let tree = new Tree();
tree.newNode(1);
tree.newNode(2);
tree.newNode(-1);
tree.newNode(-0.5);
tree.newNode(0.5);
tree.printTree();
