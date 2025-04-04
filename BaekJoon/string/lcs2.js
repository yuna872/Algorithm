const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const str1 = input[0];
const str2 = input[1];

const n = str1.length;
const m = str2.length;

let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < m + 1; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

let i = n;
let j = m;
let answer = "";
while (i > 0 && j > 0) {
  if (dp[i][j] === dp[i - 1][j]) {
    i--;
  } else if (dp[i][j] === dp[i][j - 1]) {
    j--;
  } else {
    i--;
    j--;
    answer += str1[i];
  }
}

console.log(dp[n][m]);
if (answer.length) console.log(answer.split("").reverse().join(""));
