const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let ground = new Array(N);
for (let i = 0; i < N; i++) {
  ground[i] = input[i].split(" ").map(Number);
}

let pairs = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let [di, dj] of [
      [0, 1],
      [1, 0],
    ]) {
      let ni = i + di;
      let nj = j + dj;
      if (ni >= 0 && ni < N && nj >= 0 && nj < N) {
        pairs.push([i, j, ni, nj, ground[i][j] + ground[ni][nj]]);
      }
    }
  }
}

let visited = new Array(N).fill().map(() => new Array(N).fill(false));
let maxV = 0;
const dfs = (arr, cur, sumV, depth, visited) => {
  if (cur === arr.length || depth === 4) {
    maxV = maxV < sumV ? sumV : maxV;
    return;
  }

  let [i, j, ni, nj, sum] = arr[cur];
  if (!visited[i][j] && !visited[ni][nj]) {
    visited[i][j] = true;
    visited[ni][nj] = true;
    dfs(arr, cur + 1, sum + sumV, depth + 1, visited);
    visited[i][j] = false;
    visited[ni][nj] = false;
  }

  dfs(arr, cur + 1, sumV, depth, visited);
};

dfs(pairs, 0, 0, 0, visited);
console.log(maxV);
