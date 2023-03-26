function solution(n, info) {
  var answer = [];
  let maxValue = 0;
  let visited = new Array(11).fill(0)

  const DFS = (i, arrow, score, visited) => {
    if (i === 11) {
      if (score > 0 && score > maxValue) {
        maxValue = score
        answer = visited
    };
      return;
    }

    // 화살을 쏠 수 있는 경우
    if (arrow > info[i]) {
      // 화살을 사용하기 - 무조건 이겨야하니까 한발 더
      arrow -= info[i] + 1;
      // 점수 얻기
      score += 10 - i;
      visited[i] = info[i] + 1
      DFS(i + 1, arrow, score, visited);
    }

    // 그냥 쏘지 않는 경우
    // 점수 깎기
    if (info[i] > 0) score -= 10 - i;
    DFS(i + 1, arrow, score, visited);
  };

  DFS(0, n, 0, visited);

  return maxValue === 0 ? [-1] : answer;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
