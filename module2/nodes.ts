enum NodeType {
    Root = 0,
    Node,
    Leaf
}

let node: NodeType = NodeType.Root;
let leaf: NodeType = NodeType.Leaf;

console.log(`Tree: root index -> ${node}`);
console.log(`Tree: leaf index -> ${leaf}`);

