import * as ALG from "./AdjacentListGraph";
import Graph    from "./Graph";

let graph = new ALG.Graph();

let node1  = new ALG.Node('1');
let node2  = new ALG.Node('2');
let node3  = new ALG.Node('3');
let node4  = new ALG.Node('4');
let node5  = new ALG.Node('5');
let node6  = new ALG.Node('6');
let node7  = new ALG.Node('7');
let node8  = new ALG.Node('8');
let node9  = new ALG.Node('9');
let node10 = new ALG.Node('10');

node1.addAdjacentNodes(node4, node10);
node2.addAdjacentNodes(node3);
node3.addAdjacentNodes(node2, node4, node6, node7);
node4.addAdjacentNodes(node1, node3, node5);
node5.addAdjacentNodes(node4, node10);
node6.addAdjacentNodes(node3, node8);
node7.addAdjacentNodes(node3);
node8.addAdjacentNodes(node6, node9);
node9.addAdjacentNodes(node8, node10);
node10.addAdjacentNodes(node1, node5, node9);

graph.addNodes(node1, node2, node3, node4, node5, node6, node7, node8, node9, node10);
console.log("DFS");
Graph.depthFirstSearch(graph, node1);
console.log("DFS Recursive");
Graph.depthFirstSearchRecursive(graph, node1);
console.log("BFS");
Graph.breadthFirstSearch(graph, node1);