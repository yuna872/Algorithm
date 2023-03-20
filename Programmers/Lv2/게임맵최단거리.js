function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  let visited = new Array(n);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(m).fill(false);
  }
  visited[0][0] = true;

  let queue = [[0, 0, 1]];

  const D = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  while (queue.length > 0) {
    let [i, j, depth] = queue.shift();

    if (i === n - 1 && j === m - 1) {
      return depth;
    }

    for (let d = 0; d < 4; d++) {
      let ni = i + D[d][0];
      let nj = j + D[d][1];
      if (
        0 <= ni &&
        ni < n &&
        0 <= nj &&
        nj < m &&
        maps[ni][nj] === 1 &&
        !visited[ni][nj]
      ) {
        visited[ni][nj] = true;
        queue.push([ni, nj, depth + 1]);
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
