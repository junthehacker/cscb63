import AVLNode from "./AVLNode";

export default class AVL {

    /**
     * Rotate the tree to left.
     * @param node The root node you wish to rotate.
     */
    static rotateLeft(node: AVLNode) {
        let pivot  = node.right;
        node.right = pivot.left;
        pivot.left = node;
        node.updateProperties();
        pivot.updateProperties();
        return pivot;
    }

    /**
     * Rotate the tree to right.
     * @param node The root node you wish to rotate.
     */
    static rotateRight(node: AVLNode) {
        let pivot   = node.left;
        node.left   = pivot.right;
        pivot.right = node;
        node.updateProperties();
        pivot.updateProperties();
        return pivot;
    }

    /**
     * Insert a new key into the AVL tree.
     * @param node Root node.
     * @param key Key to insert.
     */
    static insert(node, key): AVLNode {
        if (!node) {
            return new AVLNode(null, key, null);
        } else if (key < node.key) {
            node.left = AVL.insert(node.left, key);
        } else if (key > node.key) {
            node.right = AVL.insert(node.right, key);
        } else {
            return node; // Duplicate key
        }

        node.updateProperties();

        let balanceFactor = AVLNode.getBalanceFactor(node);

        // Right heavy
        if(balanceFactor < -1) {
            if(AVLNode.getBalanceFactor(node.right) > 1) {
                // Double left
                node.right = AVL.rotateRight(node.right);
                return AVL.rotateLeft(node);
            } else {
                return AVL.rotateLeft(node);
            }
        }

        // Left heavy
        if(balanceFactor > 1) {
            if(AVLNode.getBalanceFactor(node.left) < -1) {
                // Double right
                node.left = AVL.rotateLeft(node.left);
                return AVL.rotateRight(node);
            } else {
                return AVL.rotateRight(node);
            }
        }

        // Balanced
        return node;
    }

}
