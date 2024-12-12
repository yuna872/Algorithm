function solution(game_board, table) {
  var answer = -1;
  let n = game_board.length;

  let pieces = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1) pieces.push(bfsTable(n, i, j));
    }
  }

  function bfsTable(n, i, j) {
    let res = [[i, j]];
    let queue = [[i, j]];

    while (queue.length) {
      let [ii, jj] = queue.shift();
      for (let [di, dj] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]) {
        let ni = ii + di;
        let nj = jj + dj;
        if (ni >= 0 && ni < n && nj >= 0 && nj < n && table[ni][nj] === 1) {
          table[ni][nj] = 0;
          queue.push([ni, nj]);
          res.push([ni, nj]);
        }
      }
    }

    return res;
  }

  let spaces = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] === 0) spaces.push(bfsBoard(n, i, j));
    }
  }

  function bfsBoard(n, i, j) {
    let res = [[i, j]];
    let queue = [[i, j]];

    while (queue.length) {
      let [ii, jj] = queue.shift();
      for (let [di, dj] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]) {
        let ni = ii + di;
        let nj = jj + dj;
        if (
          ni >= 0 &&
          ni < n &&
          nj >= 0 &&
          nj < n &&
          game_board[ni][nj] === 0
        ) {
          game_board[ni][nj] = 1;
          queue.push([ni, nj]);
          res.push([ni, nj]);
        }
      }
    }

    return res;
  }

  spaces.forEach((space) => {
    let i = 0;
    let isEqual = false;
    while (i < pieces.length && !isEqual) {
      if (
        checkShapesEqual(space, pieces[i]) ||
        checkShapesEqual(space, rotate90(pieces[i])) ||
        checkShapesEqual(space, rotate180(pieces[i])) ||
        checkShapesEqual(space, rotate270(pieces[i]))
      ) {
        isEqual = true;
        break;
      }

      i++;
    }

    if (isEqual) {
      pieces.splice(i, 1);
      space.forEach(([x, y]) => {
        game_board[x][y] = 1;
        answer++;
      });
    }
  });

  return answer;
}

function checkShapesEqual(shape1, shape2) {
  // 도형의 크기가 같지 않으면 다른 도형
  if (shape1.length !== shape2.length) return false;
  console.log(shape1, shape2);

  let diffX = shape1[0][0] - shape2[0][0];
  let diffY = shape1[0][1] - shape2[0][1];
  for (let i = 1; i < shape1.length; i++) {
    if (
      diffX !== shape1[i][0] - shape2[i][0] ||
      diffY !== shape1[i][1] - shape2[i][1]
    )
      return false;
  }

  return true;
}

function rotate90(shape) {
  return shape
    .map(([x, y]) => [y, -x])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[1]));
}

function rotate180(shape) {
  return shape
    .map(([x, y]) => [-x, -y])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[1]));
}

function rotate270(shape) {
  return shape
    .map(([x, y]) => [-y, x])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[1]));
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
