function solution(land) {
  var answer = 0;

  const n = land.length;
  const m = land[0].length;

  // 각 땅의 oilId를 저장할 2차원 배열
  let oil = Array(m)
    .fill()
    .map(() => Array(n).fill(-1));
  // 석유가 있는 각 영역의 id
  let oilId = 0;
  // { oilId : 영역의 크기(cnt) } 를 저장할 map
  let oilData = new Map();

  // 방문 기록
  let visited = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  // 너비 우선 탐색
  const BFS = (i, j, oilId) => {
    let queue = [];

    // 처음 좌표 방문 처리 및 queue 삽입
    visited[i][j] = true;
    queue.push([i, j]);
    let cnt = 1;

    while (queue.length) {
      const [i, j] = queue.shift();

      // 현재 좌표에 해당하는 oilId 저장
      oil[i][j] = oilId;

      // 4방향 탐색
      for (let [di, dj] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]) {
        const ni = i + di;
        const nj = j + dj;

        if (
          0 <= ni &&
          ni < n &&
          0 <= nj &&
          nj < m && // ni, nj의 값이 영역을 벗어나지 않으며
          !visited[ni][nj] && // 방문한 적이 없고
          land[ni][nj] === 1 // 석유가 있는 땅인 경우
        ) {
          queue.push([ni, nj]); // 다음 탐색을 위해 queue에 삽입
          visited[ni][nj] = true; // 방문 처리
          cnt++; // 석유가 있는 땅의 수 카운트
        }
      }
    }
    // 더 이상 방문할 수 있는 땅이 없는 경우(탈출조건 : while문 종료) 카운트 된 땅의 수 return
    return cnt;
  };

  // 모든 영역 너비우선 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 방문한 적이 없고 석유가 있는 땅이면 BFS 탐색
      if (!visited[i][j] && land[i][j] === 1) {
        const cnt = BFS(i, j, oilId);
        // 석유가 있는 땅의 고유한 id와 그 영역의 넓이 저장
        oilData.set(oilId, cnt);
        // 다음 석유 영역을 탐색하기 위해 oilId + 1
        oilId++;
      }
    }
  }

  // -> 방향으로 땅을 한 줄씩 탐색
  for (let j = 0; j < m; j++) {
    let tmp = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
      // 현재 땅의 oilId를 파악하여 처음 마주친 석유 영역인 경우
      if (oil[i][j] >= 0 && !tmp.includes(oil[i][j])) {
        const id = oil[i][j]; 
        tmp.push(id); // tmp 배열에 id 삽입 -> 같은 영역을 중복으로 더하지 않기 위함
        sum += oilData.get(id); // 미리 저장해 둔 "oilId : 땅의 크기"를 참조하여F 합산
      }
    }

    // 뽑을 수 있는 석유량이 가장 많은 경우를 answer에 저장
    answer = answer < sum ? sum : answer;
  }

  return answer;
}
