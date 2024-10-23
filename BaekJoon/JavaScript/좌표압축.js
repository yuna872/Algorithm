const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);

let sortedSet = Array.from(new Set([...arr])).sort((a, b) => a - b)
let obj = {}

sortedSet.forEach((num, idx) => obj[num] = idx)

let answer = arr.map((num) => obj[num])

console.log(answer.join(' '))

