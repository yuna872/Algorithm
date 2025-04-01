const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

let min = 1;
let max = N * (1 + Math.abs(A[0] - A[N - 1]));
let answer
while (min <= max) {
  let k = Math.floor((min + max) / 2);

  let stack = [0];
  let visited = new Array(N).fill(false);
  let isPossible = false;
  while (stack.length) {
    const now = stack.pop();

    if (now === N - 1) {
      isPossible = true;
      break;
    }

    for (let i = now + 1; i < N; i++) {
      // 드는 힘 구하기
      const next = i;
      const power = (next - now) * (1 + Math.abs(A[now] - A[next]));
      if (power <= k && !visited[next]) {
        stack.push(next);
        visited[next] = true;
      }
    }
  }

  if (isPossible) {
    answer = k
    max = k - 1;
  } else min = k + 1;
}

console.log(answer);
