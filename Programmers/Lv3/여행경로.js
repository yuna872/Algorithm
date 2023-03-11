function solution(tickets) {
  var answer = [];
  const len = tickets.length;
  const visited = new Array(len).fill(false);

  // 티켓 정렬 -> 여러 경로가 있을 때 첫번째 나온 결과를 정답으로 선택
  tickets.sort();

  function dfs(str, path, depth) {
    // answer의 길이가 0 == 처음 완성된 경로
    if (depth === len && answer.length === 0) {
      // 지금까지의 경로를 answer에 저장
      answer = path
      return;
    }

    for (let i = 0; i < len; i++) {
      // 방문한 적이 있다면 continue
      if (visited[i]) continue;
      // 방문한 적이 없고 현재 지역와 출발 지역이 같은 티켓을 선택
      if (!visited[i] && str === tickets[i][0]) {
        // 방문처리 해주기
        visited[i] = true;
        dfs(tickets[i][1], [...path, tickets[i][1]], depth+1);
        // 여러 경로가 존재할 수 있기 때문에 다시 false로 복원 시켜줌
        visited[i] = false;
      }
    }
  }

  // 인천 공항에서 출발
  dfs("ICN",["ICN"] ,0);

  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
