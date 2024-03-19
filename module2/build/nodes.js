"use strict";
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Root"] = 0] = "Root";
    NodeType[NodeType["Node"] = 1] = "Node";
    NodeType[NodeType["Leaf"] = 2] = "Leaf";
})(NodeType || (NodeType = {}));
let node = NodeType.Root;
let leaf = NodeType.Leaf;
console.log(`Tree: root index -> ${node}`);
console.log(`Tree: leaf index -> ${leaf}`);
