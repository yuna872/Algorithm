const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

for (let t = 0; t < T; t++) {
  const [n, m] = input.shift().split(" ").map(Number);

  const A = input.shift().split(" ").map(Number);
  const B = input.shift().split(" ").map(Number);

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let b = 0;
    while (B[b] < A[i]) {
      b++;
    }

    cnt += b;
  }
  console.log(cnt);
}
