function solution(n, s, a, b, fares) {
  let dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(Infinity));

  for (let i = 1; i < n + 1; i++) {
    dp[i][i] = 0;
  }

  fares.forEach(([node1, node2, fare]) => {
    dp[node1][node2] = fare;
    dp[node2][node1] = fare;
  });

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  let shortest = dp[s][a] + dp[s][b];
  for (let i = 1; i < n + 1; i++) {
    shortest = Math.min(shortest, dp[s][i] + dp[i][a] + dp[i][b]);
  }

  return shortest;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
);
