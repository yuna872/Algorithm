function solution(m, n, puddles) {
  let dp = new Array(m).fill().map(() => new Array(n).fill(0));

  // 웅덩이 표시하기
  for (let [px, py] of puddles) {
    dp[px - 1][py - 1] = -1;
  }

  const mod = 1000000007;

  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === -1) continue;
      // 왼쪽 확인, 웅덩이가 아닌 경우에
      if (j - 1 >= 0 && dp[i][j - 1] !== -1) dp[i][j] += dp[i][j - 1] % mod;
      // 위쪽 확인, 웅덩이가 아닌 경우
      if (i - 1 >= 0 && dp[i - 1][j] !== -1) dp[i][j] += dp[i - 1][j] % mod;

      dp[i][j] %= mod;
    }
  }

  return dp[m - 1][n - 1];
}

console.log(solution(4, 3, [[2, 2]], 4));
