function solution(tickets) {
  var answer = [];
  const len = tickets.length;
  const visited = new Array(len).fill(false);

  tickets.sort();

  let result = [];
  function dfs(str, depth) {
    result.push(str);

    if (depth === len) {
      console.log(depth)
      answer = result
      return
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && str === tickets[i][0]) {
        visited[i] = true;
        dfs(tickets[i][1], depth + 1);
      }
    }
  }

  dfs("ICN", 0);
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
