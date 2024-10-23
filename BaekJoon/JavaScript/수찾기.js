const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);
let M = +input.shift();
let nums = input.shift().split(" ").map(Number);

arr.sort((a, b) => a - b);
nums.forEach((num) => {
  let start = 0;
  let end = N - 1;
  let flag = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let cur = arr[mid];
    if (cur === num) {
      flag = true;
      break
    } else if (cur > num) end = mid - 1;
    else start = mid + 1;
  }

  console.log(flag ? 1 : 0);
});
