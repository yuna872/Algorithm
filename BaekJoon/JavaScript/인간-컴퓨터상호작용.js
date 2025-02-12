const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let str = input.shift();
let Q = +input.shift();

let sum = new Array(27).fill().map(() => new Array(str.length).fill(0));
const makeSum = (str, sum) => {
  for (let i = 1; i <= str.length; i++) {
    let alphbet = str[i - 1].charCodeAt() - 96;
    sum[alphbet][i] += 1;
    for (let j = 1; j <= 26; j++) {
      sum[j][i] += sum[j][i - 1];
    }
  }
};

makeSum(str, sum);

for (let q = 0; q < Q; q++) {
  let [a, l, r] = input[q].split(" ");

  l = +l + 1;
  r = +r + 1;
  a = a.charCodeAt() - 96;

  console.log(sum[a][r] - sum[a][l - 1]);
}
