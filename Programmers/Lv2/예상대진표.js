function solution(n, a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let round = 0;
  while (max !== min) {
    round++;
    if (min % 2) min = (min + 1) / 2;
    else min /= 2;

    if (max % 2) max = (max + 1) / 2;
    else max /= 2;
  }

  return round;
}

console.log(solution(8, 4, 8));
