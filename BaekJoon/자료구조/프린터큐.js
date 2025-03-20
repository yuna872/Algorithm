const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
for (let t = 0; t < T; t++) {
  const [N, M] = input[t * 2].split(" ").map(Number);
  const queue = input[t * 2 + 1].split(" ").map((v, idx) => [Number(v), idx]);

  let cnt = 1;
  while (queue.length) {
    const [priority, idx] = queue.shift();

    let isPrior = true;
    for (let i = 0; i < queue.length; i++) {
      if (priority < queue[i][0]) {
        isPrior = false;
        break;
      }
    }

    if (isPrior) {
      if (idx === M) {
        console.log(cnt);
        break;
      }
      cnt++;
    } else {
      queue.push([priority, idx]);
    }
  }
}
