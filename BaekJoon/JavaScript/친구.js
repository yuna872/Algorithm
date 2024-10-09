const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

let board = [];
input.forEach((line) => {
  board.push(line.split(""));
});

let maxV = 0;
for (let i = 0; i < N; i++) {
  let freinds = new Set();

  board[i].forEach((v, idx) => {
    if (v === "Y") {
      // 당장 친구
      freinds.add(idx);

      // 친구의 친구
      board[idx].forEach((k, j) => {
        if (k === "Y") {
          freinds.add(j);
        }
      });
    }
  });

  freinds.delete(i)

  maxV = maxV < freinds.size ? freinds.size : maxV;
}

console.log(maxV);
