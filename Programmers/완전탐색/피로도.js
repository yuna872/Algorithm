function solution(k, dungeons) {
  var answer = -1;
  const n = dungeons.length;

  let visited = new Array(n).fill(false);
  const dfs = (i, curPower, depth) => {
    visited[i] = true;
    curPower -= dungeons[i][1];

    for (let ni = 0; ni < n; ni++) {
      if (!visited[ni] && curPower >= dungeons[ni][0]) {
        dfs(ni, curPower, depth + 1);
      }
    }
    answer = answer < depth ? depth : answer;
    visited[i] = false;
  };

  for (let i = 0; i < n; i++) {
    if (k >= dungeons[i][0]) dfs(i, k, 1);
  }

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
