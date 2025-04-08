function solution(maps) {
  var answer = 0;

  const n = maps.length;
  const m = maps[0].length;

  let queue = [[0, 0, 1]];
  let visited = new Array(n).fill().map(() => new Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [i, j, cnt] = queue.shift();

    if (i === n - 1 && j === m - 1) {
      return cnt;
    }

    for (let [di, dj] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (
        ni >= 0 &&
        ni < n &&
        nj >= 0 &&
        nj < m &&
        !visited[ni][nj] &&
        maps[ni][nj]
      ) {
        queue.push([ni, nj, cnt + 1]);
        visited[ni][nj] = true;
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
