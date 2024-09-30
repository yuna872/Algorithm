const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(v) {
    this.heap.push(v);
    const lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  remove() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    let minV = this.heap[1];
    // 마지막 원소를 루트 노드로
    this.heap[1] = this.heap.pop();
    this.heapifyDown(1);

    return minV;
  }

  // 새로운 원소 삽입 후 힙 정렬
  heapifyUp(index) {
    const parentIndex = Math.floor(index / 2);
    if (parentIndex >= 1 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  // 원소 삭제 후 힙 재정렬
  heapifyDown(index) {
    const leftChildIdx = index * 2;
    const rightChildIdx = index * 2 + 1;
    let smaller = index;

    if (
      leftChildIdx <= this.heap.length - 1 &&
      this.heap[leftChildIdx] < this.heap[smaller]
    ) {
      smaller = leftChildIdx;
    }

    if (
      rightChildIdx <= this.heap.length - 1 &&
      this.heap[rightChildIdx] < this.heap[smaller]
    ) {
      smaller = rightChildIdx;
    }

    if (smaller !== index) {
      [this.heap[smaller], this.heap[index]] = [
        this.heap[index],
        this.heap[smaller],
      ];
      this.heapifyDown(smaller);
    }
  }
}

let minHeap = new MinHeap();
let answer =[]
input.forEach((line) => {
  let num = Number(line);

  if (num > 0) {
    // 자연수 인 경우 배열에 추가
    minHeap.insert(num);
  } else {
    // 가장 작은 값 출력
    answer.push(minHeap.remove());
  }
});

console.log(answer.join('\n'))
