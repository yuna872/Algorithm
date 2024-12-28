const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let board = new Array(N);
for (let n = 0; n < N; n++) {
  board[n] = input.shift();
}

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const getCntWithWhite = (board) => {
  let cnt = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== white[i][j]) cnt++;
    }
  }
  return cnt;
};

const getCntWithBlack = (board) => {
  let cnt = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== black[i][j]) cnt++;
    }
  }
  return cnt;
};

let minV = Infinity;
for (let i = 0; i < N - 8 + 1; i++) {
  for (let j = 0; j < M - 8 + 1; j++) {
    let newBoard = board.slice(i, i + 8).map((str) => str.slice(j, j + 8));
    let whiteCnt = getCntWithWhite(newBoard);
    let blackCnt = getCntWithBlack(newBoard);

    minV = Math.min(whiteCnt, blackCnt, minV);
  }
}

console.log(minV);
