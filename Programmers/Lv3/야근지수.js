function solution(n, works) {
  // 배열 원소의 합이 N보다 작으면 야근을 하지 않음
  if (works.reduce((a, b) => a + b) <= n) return 0;

  let sorted = works.sort((a, b) => a - b);
  const len = works.length;

  while (n) {
    const max = sorted[len - 1];

    for (let i = len - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i] -= 1;
        n--;
      }
      if (!n) break;
    }
  }

  return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
