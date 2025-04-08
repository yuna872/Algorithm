const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

// 최대 공약수 구하기
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

let slopes = {};
let cnt = 0;
for (let i = 0; i < n; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  let key;
  // x가
  if (x === 0 && y > 0) key = "Infinity";
  else if (x === 0 && y < 0) key = "-Infinity";
  else if (y === 0 && x > 0) key = "+0";
  else if (y === 0 && x < 0) key = "-0";
  else {
    const g = gcd(Math.abs(x), Math.abs(y));
    key = `${y / g}/${x / g}`;
  }

  if (slopes[key]) slopes[key]++;
  else slopes[key] = 1;
}

let sortedEntries = Object.entries(slopes).sort((a, b) => b[1] - a[1]);
console.log(sortedEntries[0][1]);
