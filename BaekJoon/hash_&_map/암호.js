const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const n = str.length;
const password = input[1];
const m = password.length;

const indexMap = str.split("").reduce((r, v, i) => {
  r[v] = i + 1;
  return r;
}, {});

let answer = 0;
for (let i = 0; i < m; i++) {
  const char = password[i];
  const order = indexMap[char];

  answer = (answer * n + order) % 900528;
}

console.log(answer % 900528);
