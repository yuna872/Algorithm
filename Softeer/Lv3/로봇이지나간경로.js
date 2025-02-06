const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [H, W] = input.shift().split(" ").map(Number);
let board = new Array(H);
for (let h = 0; h < H; h++) {
  board[h] = input[h].split("");
}

// 0 상 1 우 2 하 3 좌
const direction = {
  0: "^",
  1: ">",
  2: "v",
  3: "<",
};
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let firstDirection = "";
let answer = "";
const bfs = (y, x) => {
  let visited = new Array(H).fill().map(() => new Array(W).fill(false));
  let queue = [[y, x]];
  let curDirection = -1;

  visited[y][x] = true;

  while (queue.length) {
    let [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      // 찔러보고 갈 수 있으면
      if (
        ny >= 0 &&
        ny < H &&
        nx >= 0 &&
        nx < W &&
        !visited[ny][nx] &&
        board[ny][nx] === "#"
      ) {
        // 출발할 때 방향 세팅
        if (curDirection === -1) {
          curDirection = i;
          firstDirection = direction[i];
        }

        // 방향 전환
        if (curDirection + 1 === i || curDirection + 3 === i) {
          answer += "L";
        } else if (curDirection - 1 === i || curDirection - 3 === i) {
          answer += "R";
        }

        // 방향 재설정
        curDirection = i;
        visited[ny][nx] = true;
        visited[ny + dy[i]][nx + dx[i]] = true;
        answer += "A";
        queue.push([ny + dy[i], nx + dx[i]]);
        break;
      }
    }
  }
};

const getStartPosition = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "#") {
        let cnt = 0;
        for (let [di, dj] of [
          [0, 1],
          [1, 0],
          [-1, 0],
          [0, -1],
        ]) {
          let ni = i + di;
          let nj = j + dj;
          if (ni >= 0 && ni < board.length && nj >= 0 && nj < board[0].length) {
            if (board[ni][nj] === "#") cnt++;
            else continue;
          }
        }

        if (cnt === 1) return [i, j];
      }
    }
  }
};

const [sy, sx] = getStartPosition(board);

bfs(sy, sx);
console.log(sy + 1 + " " + (sx + 1));
console.log(firstDirection);
console.log(answer);
