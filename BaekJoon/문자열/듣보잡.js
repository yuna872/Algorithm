const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let noHeard = new Set();
let noSeen = new Set();

for (let i = 0; i < N + M; i++) {
  if (i < N) noHeard.add(input[i]);
  else noSeen.add(input[i]);
}

let answer = []
noHeard.forEach((p) => {
    if(noSeen.has(p)) answer.push(p)
})

answer.sort()
console.log(answer.length)
console.log(answer.join('\n'));
