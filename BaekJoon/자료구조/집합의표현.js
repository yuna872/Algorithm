const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const getParent = (parents, x) => {
  if (parents[x] === x) return x;
  else return (parents[x] = getParent(parents, parents[x]));
};

const union = (parents, x, y) => {
  const px = getParent(parents, x);
  const py = getParent(parents, y);
  if (px < py) parents[py] = px;
  else parents[px] = py;
};

const findParent = (parents, x, y) => {
  const px = getParent(parents, x);
  const py = getParent(parents, y);
  if (px === py) return true;
  return false;
};

let parents = new Array(n + 1).fill().map((_, i) => i);
for (let i = 1; i <= m; i++) {
  const [o, x, y] = input[i].split(" ").map(Number);
  if (o === 0) {
    // 합집합
    union(parents, x, y);
  } else if (o === 1) {
    // 같은 집합인지 확인
    if (findParent(parents, x, y)) console.log("YES");
    else console.log("NO");
  }
}
