const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const t = +input[idx++];

for (let i = 0; i < t; i++) {
  const n = +input[idx++];

  const getParent = (parents, x) => {
    if (parents[x] === x) return x;
    return (parents[x] = getParent(parents, parents[x]));
  };

  const union = (parents, x, y) => {
    const parentX = getParent(parents, x);
    const parentY = getParent(parents, y);
    if (parentX !== parentY) {
      parents[parentY] = parentX;
      counts[parentX] += counts[parentY];
    }
  };

  let parents = {};
  let counts = {};

  for (let j = 0; j < n; j++) {
    const [f1, f2] = input[idx++].split(" ");

    if (!parents[f1]) {
      parents[f1] = f1;
      counts[f1] = 1;
    }
    if (!parents[f2]) {
      parents[f2] = f2;
      counts[f2] = 1;
    }

    union(parents, f1, f2);

    const root = getParent(parents, f1);
    console.log(counts[root]);

    // console.log(parents, counts)
  }
}
