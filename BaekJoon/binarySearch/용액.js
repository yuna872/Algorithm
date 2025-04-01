const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = n - 1;
let minV = Infinity;
let answer = [];
while (left < right) {
  let sumV = arr[left] + arr[right];

  if (Math.abs(sumV) <= minV) {
    minV = Math.abs(sumV);
    answer = [arr[left], arr[right]];
  }

  if (sumV <= 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer.join(' '));
