function solution(n, wires) {
  var answer = Infinity;

  let graph = new Array(n + 1).fill().map(() => []);
  for (let [from, to] of wires) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const bfs = (root, exceptNode) => {
    let queue = [root];
    let visited = new Array(n + 1).fill(false);
    visited[root] = true;

    let cnt = 1;
    while (queue.length) {
      const cur = queue.shift();

      for (let next of graph[cur]) {
        if (!visited[next] && exceptNode !== next) {
          visited[next] = true;
          queue.push(next);
          cnt++;
        }
      }
    }

    return cnt;
  };

  for (let [from, to] of wires) {
    const res = Math.abs(bfs(from, to) - bfs(to, from));
    answer = res < answer ? res : answer;
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
