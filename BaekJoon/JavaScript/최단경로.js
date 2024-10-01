const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(v) {
    this.heap.push(v);
    const lastIdx = this.heap.length - 1;
    this.heapifyUp(lastIdx);
  }

  heapifyUp(idx) {
    const parantIdx = Math.floor(idx / 2);
    if (parantIdx >= 1 && this.heap[parantIdx].cost > this.heap[idx].cost) {
      [this.heap[parantIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parantIdx],
      ];
      this.heapifyUp(parantIdx);
    }
  }

  remove() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    let minV = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapifyDown(1);
    return minV;
  }

  heapifyDown(idx) {
    const leftChildIdx = idx * 2;
    const rightChildIdx = idx * 2 + 1;
    let smaller = idx;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx].cost < this.heap[smaller].cost
    ) {
      smaller = leftChildIdx;
    }
    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx].cost < this.heap[smaller].cost
    ) {
      smaller = rightChildIdx;
    }
    if (smaller !== idx) {
      [this.heap[idx], this.heap[smaller]] = [
        this.heap[smaller],
        this.heap[idx],
      ];
      this.heapifyDown(smaller);
    }
  }
}

const [V, E] = input.shift().split(" ").map(Number);
const K = +input.shift();

let graph = new Array(V + 1).fill().map(() => []);
input.forEach((line) => {
  let [v, u, w] = line.split(" ").map(Number);
  graph[v].push({ node: u, cost: w });
});

let visited = new Array(V + 1).fill(false);
let distance = new Array(V + 1).fill(Infinity);
distance[K] = 0;

const pq = new MinHeap();
pq.insert({ node: K, cost: 0 });

// 우선순위 큐에 더 이상 원소가 없을 때 까지
while (pq.heap.length > 1) {
  const { node, cost } = pq.remove();

  // 방문한 노드 건너뛰기
  if (visited[node]) continue;
  visited[node] = true;

  // 방문했지만 다음으로 이동할 노드 없는 경우 패스
  const nextNodes = graph[node];
  if (nextNodes.length === 0) continue;

  for (const nextNode of nextNodes) {
    // 현재노드까지의 거리 + 다음 노드까지의 거리가 더 작은 경우
    if (distance[nextNode.node] > nextNode.cost + cost) {
      // distance 배열 갱신하기
      distance[nextNode.node] = nextNode.cost + cost;
      pq.insert({ node: nextNode.node, cost: distance[nextNode.node] });
    }
  }
}

console.log(
  distance
    .slice(1)
    .map((v) => (v === Infinity ? "INF" : v))
    .join("\n")
);
