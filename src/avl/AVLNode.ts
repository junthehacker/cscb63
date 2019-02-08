/**
 * An AVL tree's node
 */
export default class AVLNode {

    key: number;       // Value to store
    left?: AVLNode;    // Left tree
    right?: AVLNode;   // Right tree
    height: number;    // Tree height

    constructor(left: AVLNode | null, key: number, right: AVLNode | null) {
        this.left  = left;
        this.key   = key;
        this.right = right;
        this.updateProperties();
    }

    /**
     * Static helper to get a node's height
     * @param node Node you wish to check
     */
    static getHeight(node: AVLNode | null): number {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    /**
     * Static helper to get a node's balance factor
     * @param node Node you wish to get balance factor for
     */
    static getBalanceFactor(node: AVLNode | null): number {
        if(node === null) {
            return 0;
        }
        return AVLNode.getHeight(node.left) - AVLNode.getHeight(node.right);
    }

    /**
     * Update a node's height
     */
    updateProperties(): void {
        this.height = AVLNode.getHeight(this.left) + AVLNode.getHeight(this.right) + 1;
    }

    /**
     * Return node in string format of "(LEFT key RIGHT)"
     */
    toString(): string {
        return "(" + (this.left ? this.left.toString() : "") + this.key + (this.right ? this.right.toString() : "") + ")"
    }
}
