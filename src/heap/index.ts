import Heap from "./Heap";

console.log("Running heap demo.");

let heap = new Heap();

heap.insert(16);
heap.insert(14);
heap.insert(10);
heap.insert(8);
heap.insert(7);
heap.insert(9);
heap.insert(3);
heap.insert(2);
heap.insert(4);
heap.insert(1);
heap.insert(15);

console.log(heap.toString());

console.log("Extracting max");

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());