const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let neverHeard = new Set();
let neverSeen = new Set();

input.forEach((name, idx) => {
    if(idx < N) {
        neverHeard.add(name)
    } else neverSeen.add(name)
})

let answer = [];
neverHeard.forEach((v) => {
    if(neverSeen.has(v)) answer.push(v)
})

answer.sort()
console.log(answer.length)
console.log(answer.join('\n'));
