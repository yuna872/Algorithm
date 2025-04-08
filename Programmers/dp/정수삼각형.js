function solution(triangle) {
  var answer = 0;
  const n = triangle.length;

  let dp = new Array(n).fill().map(() => new Array(n).fill(0));

  dp[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) dp[i][j] = dp[i - 1][j] + triangle[i][j];
      else if (j === i) dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
  }

  return Math.max(...dp[n - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
