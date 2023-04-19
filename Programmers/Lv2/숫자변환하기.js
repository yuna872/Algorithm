function solution(x, y, n) {
  if (x >= y) return 0;
  let DP = Array(y + 1).fill(Infinity);

  DP[x] = 0;
  for (let i = x + 1; i < y + 1; i++) {
    if (x <= i - n) DP[i] = Math.min(DP[i], DP[i - n] + 1);
    if (x <= i / 2 && i % 2 === 0) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    if (x <= i / 3 && i % 3 === 0) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }

  return DP[y] === Infinity ? -1 : DP[y];
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
