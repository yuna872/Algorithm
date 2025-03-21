function solution(game_board, table) {
  var answer = -1;

  const n = game_board.length;

  // 가지고 있는 퍼즐 조각 찾기
  const puzzles = [];
  let visited = new Array(n).fill().map(() => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1 && !visited[i][j]) {
        let queue = [[i, j]];
        let puzzle = [[i, j]];

        visited[i][j] = true;
        while (queue.length) {
          const [ii, jj] = queue.shift();

          for (let [di, dj] of [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
          ]) {
            const ni = ii + di;
            const nj = jj + dj;
            if (
              ni >= 0 &&
              ni < n &&
              nj >= 0 &&
              nj < n &&
              table[ni][nj] &&
              !visited[ni][nj]
            ) {
              queue.push([ni, nj]);
              puzzle.push([ni, nj]);
              visited[ni][nj] = true;
            }
          }
        }
        puzzles.push(puzzle);
      }
    }
  }

  console.log(puzzles);

  // 빈 공간 모양 찾기
  const spaces = [];
  visited = new Array(n).fill().map(() => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] === 0 && !visited[i][j]) {
        let queue = [[i, j]];
        let space = [[i, j]];

        visited[i][j] = true;
        while (queue.length) {
          const [ii, jj] = queue.shift();

          for (let [di, dj] of [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
          ]) {
            const ni = ii + di;
            const nj = jj + dj;
            if (
              ni >= 0 &&
              ni < n &&
              nj >= 0 &&
              nj < n &&
              !game_board[ni][nj] &&
              !visited[ni][nj]
            ) {
              queue.push([ni, nj]);
              space.push([ni, nj]);
              visited[ni][nj] = true;
            }
          }
        }
        spaces.push(space);
      }
    }
  }

  const rotate = (board) => {
      const rotated = new Array(n).fill().map(() => new Array(n));
      
      for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
              rotated[j][n-1-i] = board[i][j]
          }
      }

    return rotated
  };

  const checkEqualShape = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    for (let i = 0; i < s1.length; i++) {
      if (s2[0] - s1[0] !== s2[1] - s1[1]) return false;
    }
    return true;
  };

  while (puzzles.length) {
    let puzzle = puzzles.pop();
    let visited = new Array(spaces.length).fill(false);
    
  }

  console.log(spaces);

  return answer;
}

console.log(
  solution(
    [
      [1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 0],
    ],
    [
      [1, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0],
    ]
  )
);

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
      [0, 0, 0],
    ]
  )
);
