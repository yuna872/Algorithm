const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let ground = new Array(N);
for (let n = 0; n < N; n++) {
  ground[n] = input.shift().split(" ").map(Number);
}


let maxV = 0;
function dfs(i, j, sumV, flag, ground) {
  if (i === N - 1 && j === N - 1) {
    maxV = maxV < sumV ? sumV : maxV;
    return;
  }
  // 오른쪽으로 이동
  if (i + 1 < N) {
    dfs(i + 1, j, sumV + ground[i + 1][j], flag);
    if (flag) dfs(i + 1, j, sumV + ground[i + 1][j] * 2, false);
  }
  // 아래로 이동
  if (j + 1 < N) {
    dfs(i, j + 1, sumV + ground[i][j + 1], flag);
    if (flag) dfs(i, j + 1, sumV + ground[i][j + 1] * 2, false);
  }
}

dfs(0, 0, 0, true, ground);
console.log(maxV)
