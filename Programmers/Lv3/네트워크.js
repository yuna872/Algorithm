function solution(n, computers) {
  var network = 0;

  const visited = new Array(n).fill(false);

  function DFS(index) {
    visited[index] = true; // 방문 처리

    for (let i = 0; i < n; i++) {
      // 기준이 되는 인덱스와 연결되어 있고, 방문한 적이 없는 노드라면
      if (computers[index][i] === 1 && !visited[i]) {
        DFS(i); // 깊이우선
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      network++;
    }
  }

  return network;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
