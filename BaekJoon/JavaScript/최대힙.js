const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  // 삽입 후 정렬
  heapifyUp(index) {
    const parentIdx = Math.floor(index / 2);

    if (parentIdx >= 1 && this.heap[parentIdx] < this.heap[index]) {
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      this.heapifyUp(parentIdx);
    }
  }

  insert(v) {
    this.heap.push(v);
    this.heapifyUp(this.heap.length - 1);
  }

  // 삭제 후 정렬
  heapifyDown(index) {
    const leftChildIdx = index * 2;
    const rightChildIdx = index * 2 + 1;
    let bigger = index;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] > this.heap[bigger]
    ) {
      bigger = leftChildIdx;
    }

    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx] > this.heap[bigger]
    ) {
      bigger = rightChildIdx;
    }

    if (index !== bigger) {
      [this.heap[bigger], this.heap[index]] = [
        this.heap[index],
        this.heap[bigger],
      ];
      this.heapifyDown(bigger);
    }
  }

  remove() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const maxV = this.heap[1];

    this.heap[1] = this.heap.pop();
    this.heapifyDown(1);
    return maxV;
  }
}

let maxHeap = new MaxHeap();
let answer = [];
input.forEach((line) => {
  let num = Number(line);

  if (num > 0) {
    maxHeap.insert(num);
  } else {
    answer.push(maxHeap.remove());
  }
});

console.log(answer.join("\n"));
