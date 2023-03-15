function solution(maps) {
  var answer = 10000;
  let visited = new Array(5);
  for (let i = 0; i < 5; i++) {
    visited[i] = new Array(5).fill(false);
  }
  visited[0][0] = true

  const D = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  function DFS(x, y, depth) {
 
    if (x === 4 && y === 4) {
      if (answer > depth) answer = depth;
      return;
    }

    for (let i = 0; i < 4; i++) {
      let ni = x + D[i][0];
      let nj = y + D[i][1];
      if (
        0 <= ni &&
        ni < 5 &&
        0 <= nj &&
        nj < 5 &&
        maps[ni][nj] === 1 &&
        !visited[ni][nj]
      ) {
        visited[ni][nj] = true
        DFS(ni, nj, depth + 1);
        visited[ni][nj] = false
      }
    }
  }

  DFS(0, 0, 1);

  return answer === 10000 ? -1 : answer;
}

console.log(
  solution(
    [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ],
    11
  )
);
console.log(
  solution(
    [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ],
    -1
  )
);
