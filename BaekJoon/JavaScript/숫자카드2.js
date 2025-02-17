const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const nums = input[1].split(" ").map(Number);
const M = +input[2];
const arr = input[3].split(" ").map(Number);

nums.sort((a, b) => a - b);
console.log(nums);

const lowerBound = (arr, target) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

const upperBound = (arr, target) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

let answer = [];
for (let num of arr) {
  answer.push(upperBound(nums, num) - lowerBound(nums, num));
}

console.log(answer.join(" "));
