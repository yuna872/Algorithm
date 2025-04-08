function solution(N, number) {
  var answer = 0;

    let dp = new Array(number + 1).fill().map(() => new Array(4).fill(0));
    
    dp[N] = new Array(4).fill(1)

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === 0) {
        // 곱셈
        if (i % N === 0) dp[i][j] = Math.min(...dp[Math.floor(i / N)]) + 1;
      }
      if (j === 1) {
        // 나눗셈
        if (i * N <= number) dp[i][j] = Math.min(...dp[i * N]) + 1;
      }

      if (j === 2) {
        // 덧셈
        if (i - N >= 0) dp[i][j] = Math.min(...dp[i - N]) + 1;
      }

      if (j === 3) {
        // 뺄셈
        if (i + N <= number) dp[i][j] = Math.min(...dp[i + N]);
      }
    }
  }
    
    console.log(dp)

  return answer;
}

console.log(solution(5, 12));
console.log(solution(2, 11));
