export default class Heap {

    nodes: number[];

    constructor() {
        this.nodes = [];
    }

    /**
     * Get left index
     * @param i
     */
    static getLeft(i): number {
        return i * 2 + 1;
    }

    /**
     * Get right index
     * @param i
     */
    static getRight(i): number {
        return (i + 1) * 2;
    }

    /**
     * Get parent, return negative number if the node is root.
     * @param i
     */
    static getParent(i): number {
        if(i % 2) {
            // This is a left node (odd)
            return Math.floor(i / 2);
        } else {
            // This is a right node (even)
            return i / 2 - 1;
        }
    }

    /**
     * Insert a value into the heap
     * @param value
     */
    insert(value) {
        this.nodes.push(value);
        let curr = this.nodes.length - 1; // New index we just added
        while(Heap.getParent(curr) >= 0 && this.nodes[Heap.getParent(curr)] < this.nodes[curr]) {
            let temp = this.nodes[Heap.getParent(curr)];
            this.nodes[Heap.getParent(curr)] = this.nodes[curr];
            this.nodes[curr] = temp;
            curr = Heap.getParent(curr);
        }
    }

    extractMax() {
        if(this.nodes.length > 0) {
            let result = this.nodes.shift();
            if(this.nodes.length > 0) {
                // Swap the top with bottom right child
                this.nodes.unshift(this.nodes.pop());
                // While there are still children, and one of them is larger
                let curr = 0;
                while(Heap.getLeft(curr) < this.nodes.length) {
                    // Have right child as well
                    if(Heap.getRight(curr) < this.nodes.length) {
                        // Left is larger
                        if(this.nodes[Heap.getLeft(curr)] > this.nodes[Heap.getRight(curr)]) {
                            if(this.nodes[Heap.getLeft(curr)] > this.nodes[curr]) {
                                // Swap with left
                                let temp = this.nodes[Heap.getLeft(curr)];
                                this.nodes[Heap.getLeft(curr)] = this.nodes[curr];
                                this.nodes[curr] = temp;
                                curr = Heap.getLeft(curr);
                            } else {
                                break; // No more larger child
                            }
                        } else {
                            if(this.nodes[Heap.getRight(curr)] > this.nodes[curr]) {
                                // Swap with right
                                let temp = this.nodes[Heap.getRight(curr)];
                                this.nodes[Heap.getRight(curr)] = this.nodes[curr];
                                this.nodes[curr] = temp;
                                curr = Heap.getRight(curr);
                            } else {
                                break; // No more larger child
                            }
                        }
                    // Only have left child
                    } else {
                        if(this.nodes[Heap.getLeft(curr)] > this.nodes[curr]) {
                            // Swap with left
                            let temp = this.nodes[Heap.getLeft(curr)];
                            this.nodes[Heap.getLeft(curr)] = this.nodes[curr];
                            this.nodes[curr] = temp;
                            curr = Heap.getLeft(curr);
                        } else {
                            break; // No more larger child
                        }
                    }
                }
            }
            return result;
        } else {
            return null; // Nothing to extract
        }
    }

    toString() {
        return JSON.stringify(this.nodes);
    }
}
