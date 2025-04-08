function solution(n, times) {
  var answer = Infinity;

  let min = 1;
  let max = Math.max(...times) * n;
  while (min <= max) {
    // 시간
    let mid = Math.floor((min + max) / 2);

    // mid 시간동안 몇 명 검사할 수 있는지 count
    let cnt = 0;
    for (let time of times) {
      cnt += Math.floor(mid / time);
    }

    if (cnt >= n) {
      max = mid - 1;
      answer = Math.min(answer, mid);
    } else min = mid + 1;
  }

  return answer;
}

console.log(solution(6, [7, 10]));
