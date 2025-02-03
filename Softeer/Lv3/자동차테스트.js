const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, Q] = input.shift().split(" ").map(Number);
let cars = input.shift().trim().split(" ").map(Number);
cars.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
};

let answer = new Array(Q).fill(0);
for (let q = 0; q < Q; q++) {
  let m = +input.shift();

  // 중앙값 인덱스 찾기
  let mid = binarySearch(cars, m);

  if (mid === -1) answer[q] = 0;
  else if (mid === 0 || mid === N - 1) answer[q] = 0;
  else answer[q] = mid * (N - mid - 1);
}

console.log(answer.join("\n"));
