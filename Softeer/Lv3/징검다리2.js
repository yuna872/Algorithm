const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const A = input[0].split(" ").map(Number);

const BinarySearch = (arr, v) => {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= v) end = mid;
    else start = mid + 1;
  }
  return start;
};

const getLis = (arr, N) => {
  let lis = [];
  let dp = new Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    let index = BinarySearch(lis, arr[i]);
    if (index < lis.length) lis[index] = arr[i];
    else lis.push(arr[i]);
    dp[i] = index + 1;
  }

  return dp;
};

const dp = getLis(A, N);
const dpR = getLis(A.slice().reverse(), N).reverse();
let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(dp[i] + dpR[i] - 1, answer);
}

console.log(answer);
