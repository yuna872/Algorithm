const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);
let S = input.shift().split(" ").map(Number);

let accS = S.reduce((acc, cur, i) => {
  acc.push(i > 0 ? cur + acc[i - 1] : cur);
  return acc;
}, []);

for (let i = 0; i < K; i++) {
  let [A, B] = input[i].split(" ").map(Number);

  let sumV = A - 2 >= 0 ? accS[B - 1] - accS[A - 2] : accS[B - 1];
  let rounded = (sumV / (B - A + 1)).toFixed(2)
  console.log(rounded)
}
