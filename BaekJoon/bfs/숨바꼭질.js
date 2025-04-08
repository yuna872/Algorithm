const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

let queue = [[n, 0]];
let visited = new Array(100001).fill(false);

visited[n] = true;

let answer;
while (queue.length) {
  const [i, time] = queue.shift();

  if (i === k) {
    answer = time;
    break;
  }

  for (let x of [i * 2, i + 1, i - 1]) {
    if (x >= 0 && x < 100001 && !visited[x]) {
      queue.push([x, time + 1]);
      visited[x] = true;
    }
  }
}

console.log(answer);
