const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let board = input.map((v) => v.split(" ").map(Number));

const getCheezeArea = () => {
  let cheeze = 0;
  board.forEach((arr) => {
    cheeze += arr.reduce((acc, cur) => acc + cur, 0);
  });

  return cheeze;
};

// 치즈 녹이기
const melting = (arr) => {
  arr.forEach(([i, j]) => {
    board[i][j] = 0;
  });
};

const getMeltingPos = () => {
  let meltingPos = [];
  let queue = [[0, 0]];
  let visited = new Array(n).fill().map(() => new Array(m).fill(false));

  visited[0][0] = true;
  while (queue.length) {
    const [i, j] = queue.shift();

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < n && nj >= 0 && nj < m && !visited[ni][nj]) {
        if (!board[ni][nj]) queue.push([ni, nj]);
        else meltingPos.push([ni, nj]);
        visited[ni][nj] = true;
      }
    }
  }

  return meltingPos;
};

let answer = [0, getCheezeArea()];
while (getCheezeArea()) {
  answer[0]++;

  const meltingPos = getMeltingPos();
  melting(meltingPos);

  const cheezeArea = getCheezeArea();
  if (cheezeArea) answer[1] = cheezeArea;
  else break;
}

console.log(answer.join("\n"));
