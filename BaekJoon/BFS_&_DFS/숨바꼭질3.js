const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

let queue = [[n, 0]];
let visited = new Array(100001).fill(false);
visited[n] = true;

while (queue.length) {
  const [i, second] = queue.shift();

  if (i === k) {
    console.log(second);
    break;
  }

  for (let ni of [2 * i, i + 1, i - 1]) {
    if (ni >= 0 && ni < 100001 && !visited[ni]) {
      if (ni > 0 && ni === 2 * i) queue.unshift([ni, second]);
      else queue.push([ni, second + 1]);
      visited[ni] = true;
    }
  }
}
