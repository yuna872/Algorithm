function solution(tickets) {
  var answer = [];

  tickets.sort();

  let visited = new Array(tickets.length).fill(false);
  const dfs = (city, route) => {
    if (route.length === tickets.length + 1) {
      answer.push(route);
      return;
    }

    tickets.forEach((ticket, idx) => {
      const [from, to] = ticket;
      if (!visited[idx] && from === city) {
        visited[idx] = true;
        dfs(to, [...route, to]);
        visited[idx] = false;
      }
    });
  };

  dfs("ICN", ["ICN"]);

  return answer[0];
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
