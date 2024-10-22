const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = [];
for (let n = 0; n < N; n++) {
  arr.push(+input.shift());
}

function solution(N, M, arr) {
  let min = Math.max(...arr);
  let max = arr.reduce((acc, cur) => acc + cur, 0);

  let answer = 0;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let cnt = 0; // 인출한 횟수
    let hand = 0; // 꺼낸 돈
    arr.forEach((money) => {
      // 써야하는 돈이 가지고 있는 돈보다 큰 경우
      if (money > hand) {
        // 통장에서 인출
        cnt++;
        hand = mid;
      }
      // 돈 쓰기
      hand -= money;
    });

    // 횟수가 적거나 같은 경우 인출 금액 줄이기
    if (cnt <= M) {
      answer = Math.min(answer, mid);
      max = mid - 1;
    } else if (cnt > M) min = mid + 1; // 횟수가 M보다 많으면 인출 금액 늘리기
  }

  console.log(answer);
}

solution(N, M, arr);
