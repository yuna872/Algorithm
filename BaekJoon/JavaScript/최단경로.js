const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [V, E] = input.shift().split(" ").map(Number);
let K = +input.shift();

// 최소 힙 만들기
class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  push(v) {
    this.heap.push(v);

    let i = this.heap.length - 1;
    while (i > 0) {}
  }
}

// 그래프
let graph = new Array(V + 1)
  .fill()
  .map(() => new Array(V + 1).fill().map(() => 0));
// 그래프 그리기
input.forEach((line) => {
  let [u, v, w] = line.split(" ").map(Number);

  graph[u][v] = 1;
});

// K로부터 각 노드까지의 최단거리가 담긴 리스트
let distance = new Array(V + 1).fill().map(() => 10 * E);
// 방문여부
let visited = new Array(V + 1).fill().map(() => false);
