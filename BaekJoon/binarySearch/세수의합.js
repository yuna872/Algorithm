const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map(Number);

arr.sort((a, b) => a - b);

let twoSum = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    twoSum.push(arr[i] + arr[j]);
  }
}

const binarySearch = (arr, diff) => {
  const n = arr.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] >= diff) {
      r = mid - 1;
      if (arr[mid] === diff) return true;
    } else {
      l = mid + 1;
    }
  }

  return;
};

twoSum.sort((a, b) => a - b);

let maxV = 0;
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    const diff = arr[j] - arr[i];
    if (binarySearch(twoSum, diff)) {
      maxV = Math.max(maxV, diff + arr[i]);
      break;
    }
  }
}

console.log(maxV);
