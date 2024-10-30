const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let board = new Array(N);
for (let n = 0; n < N; n++) {
  board[n] = input.shift().split("");
}

function solution(N, M, board) {
  let ghost = getNearestGhost(N, M, board);
  let nam;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 아무것도 없거나 출구인 경우 continue
      if (board[i][j] === "." || board[i][j] === "#" || board[i][j] === "D")
        continue;
      // 남우 이동
      if (board[i][j] === "N") {
        nam = moveNamwoo(i, j, board);
      }
    }
  }

  if (nam === -1) console.log("No");
  else if (ghost === -1) {
    console.log("Yes");
  } else {
    console.log(nam > ghost ? "No" : "Yes");
  }
}
// 출구 좌표 구하기
function getDestination(N, M, board) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "D") return [i, j];
    }
  }
}

// 출구로부터 가장 가까운 유령 구하기
function getNearestGhost(N, M, board) {
  let [di, dj] = getDestination(N, M, board);
  let distance = Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "G") {
        distance = Math.min(distance, Math.abs(di - i) + Math.abs(dj - j));
      }
    }
  }
  return distance === Infinity ? -1 : distance;
}

// 남우 이동
function moveNamwoo(i, j, board) {
  let queue = [[i, j, 0]];
  let visited = new Array(N).fill().map(() => new Array(M).fill(false));
  visited[i][j] = true;

  while (queue.length > 0) {
    let [ci, cj, step] = queue.shift();

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      let ni = ci + di;
      let nj = cj + dj;
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M && // 격자를 벗어나지 않으면서
        board[ni][nj] !== "G" && // 유령도 아니고
        board[ni][nj] !== "#" && // 벽도 아니고
        !visited[ni][nj] // 방문하지 않았다면 방문하기
      ) {
        if (board[ni][nj] === "D") return step + 1;
        queue.push([ni, nj, step + 1]);
        visited[ni][nj] = true;
      }
    }
  }

  return -1;
}

solution(N, M, board);
