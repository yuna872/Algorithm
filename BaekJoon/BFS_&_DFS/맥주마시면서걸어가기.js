const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const bfs = (home, stores, festival) => {
  let queue = [home];
  let visited = new Array(stores.length).fill(false);

  while (queue.length) {
    const [x, y] = queue.shift();

    if (Math.abs(festival[0] - x) + Math.abs(festival[1] - y) <= 1000) {
      return "happy";
    }

    for (let i = 0; i < stores.length; i++) {
      const [store_x, store_y] = stores[i];
      if (
        Math.abs(store_x - x) + Math.abs(store_y - y) <= 1000 &&
        !visited[i]
      ) {
        queue.push([store_x, store_y]);
        visited[i] = true;
      }
    }
  }

  return "sad";
};

const T = +input.shift();

for (let t = 0; t < T; t++) {
  const n = +input.shift();

  const home = input.shift().split(" ").map(Number);
  let stores = [];
  for (let i = 0; i < n; i++) {
    stores.push(input.shift().split(" ").map(Number));
  }
  const festival = input.shift().split(" ").map(Number);

  const res = bfs(home, stores, festival);

  console.log(res);
}
