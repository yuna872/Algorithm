function solution(n, vertex) {
  // 각 노드까지의 최단 거리를 저장할 배열
  var steps = new Array(n + 1).fill(-1);
  // 그래프를 2차원 배열로 표현
  let graph = new Array(n + 1).fill().map(() => []);

  // 그래프 그리기
  vertex.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  function bfs(start) {
    // 시작 노드와 지금까지 지나온 거리(step)를 큐에 삽입
    let queue = [[start, 0]];
    // 방문 기록을 위한 배열
    let visited = new Array(n + 1).fill().map(() => false);
    visited[start] = true;

    // 큐에 요소가 존재하는 동안
    while (queue.length) {
      // 현재 방문한 노드와 지금까지 지나온 간선 개수
      let [node, step] = queue.shift();

      // 다음 방문 가능한 노드들을 하나씩 순회하면서
      graph[node].forEach((next) => {
        // 아직 방문한 적이 없다면
        if (!visited[next]) {
          // 방문하기
          visited[next] = true;
          // 지금까지 온 거리 +1 => BFS 이므로 가장 처음 도달한 순간이 최단 거리
          steps[next] = step + 1;
          queue.push([next, step + 1]);
        }
      });
    }
  }

  // 1번 노드로 부터 각 노드까지의 최단 거리 구하기
  bfs(1);

  // 가장 멀리 떨어진 노드의 거리
  const maxVal = Math.max(...steps);

  // 최단거리가 저장된 배열을 순회하며 가장 멀리 떨어진 노드의 개수 구하기
  return steps.reduce((cnt, cur) => (cur === maxVal ? cnt + 1 : cnt), 0);
}
