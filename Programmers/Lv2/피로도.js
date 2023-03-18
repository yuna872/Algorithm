function solution(k, dungeons) {
  var max = 0;
  const len = dungeons.length;
  let visited = new Array(len).fill(false);

  const DFS = (cur, power, depth) => {
    // 방문 처리
    visited[cur] = true;
    // 피로도 감소
    power -= dungeons[cur][1];

    for (let i = 0; i < len; i++) {
      // 방문한 적이 없고, 최소 피로도 조건을 만족하는 경우에 방문해주기
      if (!visited[i] && dungeons[i][0] <= power) {
        DFS(i, power, depth + 1);
      }
    }
    // depth의 최대 값을 저장
    max = Math.max(max, depth);
    // 다음 방문을 위한 방문 기록 복원
    visited[cur] = false;
  };

  // 모든 시작점을 고려해야 하기 때문에 순회하며 탐색
  for (let i = 0; i < len; i++) {
    // 방문할 수 있는 던전인지 확인해주기
    if (dungeons[i][0] <= k) DFS(i, k, 1);
  }

  return max;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
