function solution(maps) {
  var answer = [];
  const row = maps.length;
  const col = maps[0].length;
  let visited = Array(row)
    .fill()
    .map(() => Array(col).fill(false));

  // 4방향 탐색
  const dirX = [0, 0, 1, -1];
  const dirY = [1, -1, 0, 0];

  const DFS = (i, j) => {
    let queue = [];
    let day = 0;

    queue.push([i, j]);

    while (queue.length > 0) {
      const [curi, curj] = queue.shift();
      day += Number(maps[curi][curj]);
      visited[curi][curj] = true;

      for (let i = 0; i < 4; i++) {
        const ni = curi + dirX[i];
        const nj = curj + dirY[i];
        if (
          ni >= 0 &&
          ni < row &&
          nj >= 0 &&
          nj < col &&
          maps[ni][nj] !== "X" &&
          !visited[ni][nj]
        ) {
          visited[ni][nj] = true;
          queue.push([ni, nj]);
        }
      }
    }
    answer.push(day);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        DFS(i, j);
      }
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
