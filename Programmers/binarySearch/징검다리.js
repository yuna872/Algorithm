function solution(distance, rocks, n) {
  var answer = 0;

  rocks = [0, ...rocks, distance].sort((a, b) => a - b);

  let start = 1;
  let end = distance;
  while (start <= end) {
    // 최소 거리
    let mid = Math.floor((start + end) / 2);

    // 최소 거리를 기준으로 바위 제거하기
    let prev = 0;
    let removed = 0;
    for (let i = 1; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) {
        // 최소 거리를 만족하지 못하면 바위 제거
        removed++;
      } else {
        prev = rocks[i];
      }
    }

    if (removed <= n) {
      start = mid + 1;
      answer = mid;
    } else end = mid - 1;
  }
  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
