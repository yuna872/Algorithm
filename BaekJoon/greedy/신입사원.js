const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const t = +input[idx++];
for (let i = 0; i < t; i++) {
  const n = +input[idx++];

  let arr = new Array(n);
  for (let j = 0; j < n; j++) {
    arr[j] = input[idx++].split(" ").map(Number);
  }

  arr.sort((a, b) => a[0] - b[0]);

  let cnt = 1;
  let maxR = arr[0][1];
  for (let j = 1; j < n; j++) {
    if (maxR > arr[j][1]) {
      maxR = arr[j][1];
      cnt++;
    }
  }
  console.log(cnt);
}
