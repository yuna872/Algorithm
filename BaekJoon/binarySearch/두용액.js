const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let minV = Infinity;
let answer = [];
while (left < right) {
  let sumV = arr[left] + arr[right];

  if (Math.abs(sumV) < minV) {
    answer = [arr[left], arr[right]];
    minV = Math.abs(sumV);
  }

  if (sumV < 0) {
    left++;
  } else if (sumV > 0) {
    right--;
  } else break;
}

console.log(answer.join(" "));
