export class Node {
    value: string;
    adjacentNodes: Node[];

    constructor(value: string) {
        this.value = value;
        this.adjacentNodes = [];
    }

    addAdjacentNode(n: Node) {
        this.adjacentNodes.push(n);
    }

    addAdjacentNodes(...n: Node[]) {
        this.adjacentNodes = this.adjacentNodes.concat(n);
    }

    toString(): string {
        let result = this.value + ": ";
        for(let node of this.adjacentNodes) {
            result += node.value + ", ";
        }
        result = result.substring(0, result.length - 2);
        return result;
    }
}

export class Graph {
    nodes: Node[];

    constructor() {
        this.nodes = [];
    }

    addNode(n: Node) {
        this.nodes.push(n);
    }

    addNodes(...n: Node[]) {
        this.nodes = this.nodes.concat(n);
    }

    toString(): string {
        let result = "";
        for (let node of this.nodes) {
            result += node.toString() + "\n";
        }
        return result;
    }
}
