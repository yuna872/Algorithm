function solution(m, n, puddles) {

  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  dp[1][1] = 1;
  
  // puddle 지도에 표시하기
  puddles.forEach(([j, i]) => {
    dp[j][i] = -1;
  });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // 물 웅덩이 확인하기
      if ((i === 1 && j === 1) || dp[i][j] === -1) continue;

      if (dp[i - 1][j] > 0) dp[i][j] += dp[i - 1][j] % 1000000007;
      if (dp[i][j - 1] > 0) dp[i][j] += dp[i][j - 1] % 1000000007;
    }
  }

  return dp[n][m] % 1000000007
}

solution(4, 3, [[2, 2]]);
