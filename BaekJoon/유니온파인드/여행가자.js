const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();

const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, x, y) => {
  const px = getParent(parent, x);
  const py = getParent(parent, y);
  if (px < py) parent[py] = px;
  else parent[px] = py;
};

const findParent = (parent, x, y) => {
  const px = getParent(parent, x);
  const py = getParent(parent, y);
  if (px === py) return true;
  else return false;
};

let parent = [];
for (let i = 0; i < N; i++) parent[i] = i;

for (let i = 0; i < N; i++) {
  const arr = input.shift().split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    // 집합이 아닌 경우
    if (i !== j && arr[j] && !findParent(parent, i, j)) {
      // 유니온
      unionParent(parent, i, j);
    }
  }
}

const cities = input[0].split(" ").map((v) => +v - 1);

const root = getParent(parent, cities[0]);
let answer = "YES";
for (let i = 1; i < cities.length; i++) {
  if (root !== getParent(parent, cities[i])) {
    answer = "NO";
    break;
  }
}

console.log(answer);
