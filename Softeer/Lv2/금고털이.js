const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [W, N] = input.shift().split(" ").map(Number);
let obj = {};
for (let n = 0; n < N; n++) {
  let [w, price] = input.shift().split(" ").map(Number);
  obj[price] = w;
}

let sortedArr = Object.keys(obj).sort((a, b) => b - a);

let answer = 0;
let i = 0;
while (W > 0) {
  let price = Number(sortedArr[i]);
  let w = obj[price]

  if (W > w) {
    W -= w;
    answer += w * price;
  } else {
    answer += W * price;
    W = 0;
  }
  i++;
}

console.log(answer);
