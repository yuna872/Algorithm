function solution(n, results) {
  let graph = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));
  results.forEach(([winner, loser]) => {
    graph[winner][loser] = 1;
    graph[loser][winner] = -1;
  });

  // 플로이드 워셜 알고리즘
  for (let k = 1; k <= n; k++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        if (graph[start][k] === 1 && graph[k][end] === 1) {
          graph[start][end] = 1;
        }
        if (graph[start][k] === -1 && graph[k][end] === -1) {
          graph[start][end] = -1;
        }
      }
    }
  }

  var answer = 0;
  for (let i = 1; i <= n; i++) {
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
