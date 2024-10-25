const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, C] = input.shift().split(" ").map(Number);
let board = new Array(N);
for (let n = 0; n < N; n++) {
  board[n] = Number(input[n]);
}
board.sort((a, b) => a - b);

function solution(N, C, arr) {
  let min = 1;
  let max = arr[N - 1] - arr[0];
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    // 설치해야 하는 공유기 수보다 더 작을 때 -> 거리 좁히기
    if (!check(mid)) max = mid - 1;
    // 설치해야 하는 공유기 수보다 더 많을 때 -> 거리 늘리기
    else {
      min = mid + 1;
    }
  }
  return max;

  function check(mid) {
    let cnt = 1; // 첫 번째 집은 무조건 설치 한다는 가정 - 가장 왼쪽 집을 설치해야 최대 거리를 구할 수 있음
    let lastInstalled = arr[0];
    for (let i = 1; i < N; i++) {
      // 최소 거리 이상일 때 설치
      if (arr[i] - lastInstalled >= mid) {
        lastInstalled = arr[i];
        cnt++;
        if (cnt >= C) return true;
      }
    }
    return false;
  }
}

console.log(solution(N, C, board));
