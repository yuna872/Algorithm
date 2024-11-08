function solution(triangle) {
  let n = triangle.length;
  let dp = new Array(n);
  dp[0] = triangle[0];

  for (let i = 1; i < n; i++) {
    let tmp = [];

    for (let j = 0; j < i + 1; j++) {
      let maxV;
      if (j === 0) maxV = dp[i - 1][j];
      else if (j === i) maxV = dp[i - 1][j - 1];
      else maxV = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);

      maxV += triangle[i][j];
      tmp.push(maxV);
    }

    dp[i] = tmp;
  }
  return Math.max(...dp[n - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
