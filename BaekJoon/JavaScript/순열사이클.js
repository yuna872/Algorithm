const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input.shift();

for (let t = 0; t < T; t++) {
  let N = +input.shift();
  let arr = input.shift().split(" ").map(Number);

  arr.unshift(0);

  let visited = new Array(N + 1).fill().map(() => false);

  const dfs = (i) => {
    visited[i] = true;
    if (!visited[arr[i]]) dfs(arr[i]);
  };

  let cycle = 0;
  for (let i = 1; i < N+1; i++) {
    if (!visited[i]) {
      dfs(i);
      cycle++;
    }
  }

  console.log(cycle);
}
