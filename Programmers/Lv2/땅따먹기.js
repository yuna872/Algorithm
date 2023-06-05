function solution(land) {
  const N = land.length;
  const M = land[0].length;

  let DP = new Array(N).fill().map((a, i) => land[i]);

  let i = 1;
  while (i < N) {
    for (let j = 0; j < M; j++) {
      const arr = DP[i - 1].filter((item, idx) => idx !== j);
      DP[i][j] += DP[i - 1][land[i - 1].indexOf(Math.max(...arr))];
    }

    i++;
  }

  return Math.max(...DP[N - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
