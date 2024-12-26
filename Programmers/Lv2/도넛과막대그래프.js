function solution(edges) {
  // 그래프 그리기
  let graph = {};
  edges.forEach(([from, to]) => {
    if (graph[from]) graph[from].sendCnt++;
    else graph[from] = { sendCnt: 1, receiveCnt: 0 };

    if (graph[to]) graph[to].receiveCnt++;
    else graph[to] = { sendCnt: 0, receiveCnt: 1 };
  });

  let startNode = 0;
  let totalGraph = 0;
  let stickGraph = 0;
  let eightGraph = 0;

  Object.entries(graph).forEach(([key, value]) => {
    const { sendCnt, receiveCnt } = value;
    if (sendCnt >= 2 && receiveCnt === 0) {
      startNode = key;
      totalGraph = sendCnt;
    }
    if (sendCnt === 0) stickGraph++;
    if (sendCnt >= 2 && receiveCnt >= 2) eightGraph++;
  });

  return [
    Number(startNode),
    totalGraph - eightGraph - stickGraph,
    stickGraph,
    eightGraph,
  ];
}

console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ])
);
console.log(
  solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ])
);
