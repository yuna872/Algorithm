/**
 플로이드 와샬 알고리즘
 - 모든 정점에서 다른 모든 지점까지의 최단 경로를 모두 구하는 알고리즘
 */

// 정점의 개수
let N = 6;
let costs = [
  // [시작점, 도착점, 가중치]를 원소로 가지는 데이터
  [3, 0, 10],
  [2, 4, 24],
  [4, 5, 2],
  [2, 0, 41],
  [4, 0, 24],
  [3, 5, 50],
  [1, 3, 66],
  [1, 2, 22],
  [0, 5, 25],
];
// 최소비용이 담길 2차원 배열
let dp = new Array(N).fill().map(() => new Array(N).fill(Infinity));

// 1. 정점간의 간선과 그에 대한 가중치를 2차원 배열에 저장한다.
for (let i = 0; i < N; i++) {
  // 자기 자신으로 가는 비용은 0으로 설정
  dp[start][end] = 0;
}
costs.forEach(([start, end, weight]) => {
  dp[start][end] = weight;
  dp[end][start] = weight;
});

// 2. 3차원 반복문으로 최소값을 갱신해 나간다.
// k는 거쳐가는 기준이 되는 정점
for (let k = 0; k < N; k++) {
  // i는 시작 정점
  for (let i = 0; i < N; i++) {
    // j는 도착 정점
    for (let j = 0; j < N; j++) {
      // i -> j 곧장 가는것보다 i -> k -> j로 가는 방법이 더 작다면 최소값 갱신
      dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
    }
  }
}

// 3. dp[시작점][도착점]을 최소 비용으로 사용한다.
