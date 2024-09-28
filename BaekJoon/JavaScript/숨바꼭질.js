const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let [N, K] = input.split(" ").map(Number);

let visited = new Array(100000+1).fill().map(() => false);
const bfs = () => {
  let queue = [[N, 0]];
  visited[N] = true;

  while (queue.length) {
    const [cur, seconds] = queue.pop();

    if (cur === K) {
        console.log(seconds)
        return
    };

    if (cur + 1 >= 0 && cur + 1 <= 100000 && !visited[cur + 1]) {
      queue.unshift([cur + 1, seconds + 1]);
      visited[cur + 1] = true;
    }

    if (cur - 1 >= 0 && cur - 1 <= 100000 && !visited[cur - 1]) {
      queue.unshift([cur - 1, seconds + 1]);
      visited[cur - 1] = true;
    }

    if (cur * 2 >= 0 && cur * 2 <= 100000 && !visited[cur * 2]) {
      queue.unshift([cur * 2, seconds + 1]);
      visited[cur * 2] = true;
    }
  }
};

bfs()
