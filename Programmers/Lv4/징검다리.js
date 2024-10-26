function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);

  let start = 0;
  let end = distance;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let cur = 0;
    let cnt = 0;
    rocks.forEach((rock, idx) => {
      // 바위를 제거해도 되는 경우
      if (mid > rock - cur) {
        cnt++;
      } else {
        // 제거하면 안되는 경우
        cur = rock;
      }

      if (idx === rocks.length - 1 && mid > distance - cur) {
        cnt++;
      }
    });

    // 마지막 바위 -> 도착 지점 확인

    if (cnt > n) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
