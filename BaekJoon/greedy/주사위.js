const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = BigInt(input[0]);
const dice = input[1].split(" ").map(BigInt);

let minV = [];
for (let i = 0; i < 3; i++) {
  minV.push(dice[i] > dice[5 - i] ? dice[5 - i] : dice[i]);
}

minV.sort((a, b) => (a < b ? -1 : 1));

let one = minV[0];
let two = one + minV[1];
let three = two + minV[2];

let answer =
  (5n * n * n - 16n * n + 12n) * one + (8n * n - 12n) * two + 4n * three;

let maxV = 0n;
let sumV = 0n;
for (let i = 0; i < 6; i++) {
  if (maxV < dice[i]) maxV = dice[i];
  sumV += dice[i];
}

console.log(n === 1n ? (sumV - maxV).toString() : answer.toString());
