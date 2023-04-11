function solution(maps) {
  let answer = 0;
  const row = maps.length;
  const col = maps[0].length;

  const di = [0, 0, 1, -1];
  const dj = [1, -1, 0, 0];

  // 너비우선 탐색
  const BFS = (i, j, goal) => {
    // 시작점에서 레버, 레버에서 도착점 각각 구해야 하므로 visited는 각각의 BFS가 실행될 때 초기화 되어야 함
    let visited = Array(row)
      .fill()
      .map(() => Array(col).fill(false));

    let queue = [];
    // 시작점의 방문 처리, 그리고 큐에 넣어주기
    visited[i][j] = true;
    // [행 번호, 열 번호, 지금까지의 누적 거리]
    queue.push([i, j, 0]);

    while (queue.length > 0) {
      const [ii, jj, cnt] = queue.shift();
      // 탈출조건
      if (maps[ii][jj] === goal) {
        // BFS이므로 가장 처음 값이 최단 거리
        return cnt;
      }

      // 4방향 모두 탐색
      for (let i = 0; i < 4; i++) {
        const ni = ii + di[i];
        const nj = jj + dj[i];
        if (
          ni >= 0 &&
          ni < row &&
          nj >= 0 &&
          nj < col && // 새로운 인덱스가 맵의 범위를 넘지 않으면서
          maps[ni][nj] !== "X" && // 벽이 아닌 경우
          !visited[ni][nj] // 방문한 적이 없는 경우
        ) {
          visited[ni][nj] = true; // 방문처리 해주기
          queue.push([ni, nj, cnt + 1]); // 새로운 인덱스와 거리를 큐에 삽입
        }
      }
    }
  };

  // 시작지점을 찾아서 너비우선탐색
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // S to L
      if (maps[i][j] === "S") {
        answer += BFS(i, j, "L");
      }
      // L to E
      else if (maps[i][j] === "L") {
        answer += BFS(i, j, "E");
      } else continue;
    }
  }

  return answer ? answer : -1;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
