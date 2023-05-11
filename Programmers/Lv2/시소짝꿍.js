function solution(weights) {
  var answer = 0;

  for (let i = 0; i < weights.length; i++) {
    const arr = weights.slice(i + 1, weights.length);
    for (let ratio of [1, 3 / 2, 2, 4 / 3, 2 / 3, 3 / 4, 1 / 2]) {
      if (arr.includes(ratio * weights[i])) answer++;
    }
  }
  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
