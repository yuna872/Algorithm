function solution(tickets) {
  var answer = ["ICN"];
  const len = tickets.length;
  const visited = new Array(len).fill(false);
  tickets.sort()
  console.log(tickets);
  const queue = [tickets[0]];
  visited[0] = true;

  while (queue.length) {
    const curPoint = queue.shift();

    if (answer.length === len) {
      answer.push(curPoint[1]);
      return answer;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && curPoint[1] === tickets[i][0]) {
        answer.push(curPoint[1]);
        visited[i] = true;
        queue.push(tickets[i]);
      }
    }
  }
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
