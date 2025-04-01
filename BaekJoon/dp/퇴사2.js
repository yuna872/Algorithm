const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map((v) => v.split(" ").map(Number));

let dp = new Array(n + 1).fill(0);
for (let i = n - 1; i >= 0; i--) {
  const [day, benefit] = arr[i];
  const fin_date = i + day;

  if (fin_date <= n) {
    // 작업을 퇴사하기 전까지 할 수 있으면
    // 비교하기
    dp[i] = Math.max(dp[i + 1], dp[fin_date] + benefit);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(Math.max(...dp));
