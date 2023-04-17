function solution(board) {
  var answer = 0;
  const rows = board.length;
  const cols = board[0].length;

  const BFS = (si, sj) => {
    let queue = [];
    queue.push([si, sj, 0]);

    while (queue.length) {
      const [i, j, cnt] = queue.shift();
      visited[i][j] = true;

      // BFS이므로 처음 리턴한 값이 최단 거리
      if (board[i][j] === "G") {
        answer = cnt;
        return;
      }

      // 4방향 탐색하기 & 미끄러지기
      for ([di, dj] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ]) {
        let ni = i + di;
        let nj = j + dj;
        // 벽과 장애물에 닿지 않을 때까지 미끄러진다
        while (
          0 <= ni &&
          ni < rows &&
          0 <= nj &&
          (nj < cols) & (board[ni][nj] !== "D")
        ) {
          ni += di;
          nj += dj;
        }
        // 이미 닿은 상태이므로 한칸 이전으로 되돌려주기
        ni -= di;
        nj -= dj;
        // 방문하지 않은 위치일때
        if (!visited[ni][nj]) {
          // 큐에 삽입
          queue.push([ni, nj, cnt + 1]);
        }
      }
    }
  };

  // 방문처리를 할 배열 생성
  let visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
  // 시작점 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "R") {
        BFS(i, j);
        break;
      }
    }
  }

  return answer ? answer : -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
