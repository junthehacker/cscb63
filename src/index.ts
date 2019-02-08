import AVLNode from "./avl/AVLNode";
import AVL     from "./avl/AVL";

let node = new AVLNode(null, 2, null);

node = AVL.insert(node, 3);
node = AVL.insert(node, 4);
node = AVL.insert(node, 20);
node = AVL.insert(node, 10);

console.log(node.toString());

