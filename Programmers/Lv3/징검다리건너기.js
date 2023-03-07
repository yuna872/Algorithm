function solution(stones, k) {
  var answer = 0;
  const len = stones.length;
  let flag = true;

  while (flag) {
    let step = 0;
    for (let i = 0; i < len; i++) {
      stones[i] -= answer;
      if (stones[i] === 0) {
        step++;
        if (step < k) {
          flag = false;
          break;
        }
      }
    }
    console.log(stones);
    answer++;
  }
  return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
