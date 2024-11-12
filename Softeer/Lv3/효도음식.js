const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let prefer = input.shift().split(" ").map(Number);

let arr1 = prefer.slice();
let arr2 = prefer.slice();
for (let i = 1; i < N; i++) {
  arr1[i] += arr1[i - 1];
  arr2[N - i - 1] += arr2[N - i];
}

let answer = 1000000 * -1000;
for (let i = 1; i < N - 1; i++) {
  let leftArr = arr1.slice(0, i);
  let leftMaxV = Math.max(...leftArr);
  let maxVIndex = leftArr.indexOf(leftMaxV);

  let j = maxVIndex - 1;
  let minV = Infinity;
  while (j >= 0) {
    if (leftArr[j] < 0) minV = Math.min(minV, leftArr[j]);
    j--;
  }

  leftMaxV = minV !== Infinity ? leftMaxV - minV : leftMaxV;

  let rightArr = arr2.slice(i + 1, N);
  let rightMaxV = Math.max(...rightArr);
  maxVIndex = rightArr.indexOf(rightMaxV);

  j = maxVIndex + 1;
  minV = Infinity;
  while (j < N) {
    if (rightArr[j] < 0) minV = Math.min(minV, rightArr[j]);
    j++;
  }

  rightMaxV = minV !== Infinity ? rightMaxV - minV : rightMaxV;

  answer = Math.max(rightMaxV + leftMaxV, answer);
}

console.log(answer);
