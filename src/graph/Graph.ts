export default class Graph {

    static depthFirstSearch(graph, node) {
        let visited = {};
        let stack = [];
        // Push the first node to stack
        stack.push(node);
        // While stack is not empty
        while(stack.length !== 0) {
            let v = stack.pop();
            if(!visited[v]) {
                visited[v] = true;
                console.log(v.value);
                for(let w of v.adjacentNodes) {
                    stack.push(w);
                }
            }
        }
    }

    static depthFirstSearchRecursive(graph, node, visited = {}) {
        // Visit the first node
        visited[node] = true;
        console.log(node.value);
        for(let w of node.adjacentNodes) {
            if(!visited[w]) {
                Graph.depthFirstSearchRecursive(graph, w, visited);
            }
        }
    }

    static breadthFirstSearch(graph, node) {
        let visited = {};
        let queue = [];
        queue.push(node); // Push first node to queue
        // Visit first node
        visited[node] = true;
        console.log(node.value);
        while(queue.length !== 0) {
            let v = queue.shift();
            for(let w of v.adjacentNodes) {
                if(!visited[w]) {
                    visited[w] = true;
                    console.log(w.value);
                    queue.push(w);
                }
            }
        }
    }


}