function solution(n, results) {
  var answer = 0;

  let graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let [win, lose] of results) {
    graph[win][lose] = 1;
    graph[lose][win] = -1;
  }

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) graph[i][j] = 1;
        if (graph[i][k] === -1 && graph[k][j] === -1) graph[i][j] = -1;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    let cnt = graph[i].filter((v) => v !== 0).length;
    if (cnt === n - 1) answer++;
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
