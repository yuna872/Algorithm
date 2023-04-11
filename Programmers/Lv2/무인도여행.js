function solution(maps) {
  var answer = [];
  const row = maps.length;
  const col = maps[0].length;

  console.log(maps[0][0]);
  const dirX = [0, 0, 1, 1];
  const dirY = [1, 1, 0, 0];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] !== "X") {
        let day = 0;
        let queue = [];
        queue.push([i, j]);

        while (queue.length > 0) {
          const [curI, curJ] = queue.shift();
          if (maps[curI][curJ] === "X") break;

          day += Number(maps[curI][curJ]);
          maps[curI][curJ] = "X";

          for (let k = 0; k < 4; k++) {
            const nextI = curI + dirX[k];
            const nextJ = curJ + dirY[k];
            if (nextI < row && nextJ < col && maps[nextI][nextJ])
              queue.push([nextI, nextJ]);
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
