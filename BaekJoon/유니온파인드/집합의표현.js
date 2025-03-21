const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
function find(parents, x) {
  if (parents[x] < 0) return x;
  parents[x] = find(parents, parents[x]);
  return parents[x];
}

function union(parents, x, y) {
  x = find(parents, x);
  y = find(parents, y);
  if (x < y) {
    parents[x] = y;
  }
}

let parents = [];
for (let i = 0; i < n + 1; i++) parents[i] = i;

let answer = [];
for (let i = 0; i < m; i++) {
  const [type, a, b] = input[i].split(" ").map(Number);

  // find
  if (type === 1) {
    if (find(parents, a) === find(parents, b)) answer.push("YES");
    else answer.push("NO");
  } else {
    // union
    union(parents, a, b);
  }
}
console.log(answer.join("\n"));
