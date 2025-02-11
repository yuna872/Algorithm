const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input.shift();

for (let t = 0; t < T; t++) {
  let F = +input.shift();
  let parents = {};
  let visited = {};

  const union = (i, j) => {
    let x = find(i);
    let y = find(j);

    if (x === y) return;
    else {
      parents[y] = x;
      visited[x] += visited[y];
    }
  };

  const find = (x) => {
    if (x === parents[x]) return x;
    // 재귀함수로 부모노드 찾기
    else {
      parents[x] = find(parents[x]);
      return parents[x];
    }
  };

  for (let i = 0; i < F; i++) {
    let [x, y] = input.shift().split(" ");

    if (!parents[x]) {
      parents[x] = x;
      visited[x] = 1;
    }

    if (!parents[y]) {
      parents[y] = y;
      visited[y] = 1;
    }

    union(x, y);
    console.log(visited[find(x)]);
  }
}