function solution(n, computers) {
  var answer = 0;

  let visited = new Array(n).fill(false);

  const bfs = (x) => {
    let queue = [x];

    while (queue.length) {
      const ci = queue.shift();
      visited[ci] = true;

      for (let i = 0; i < n; i++) {
        if (i !== x && computers[ci][i] && !visited[i]) {
          queue.push(i);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
