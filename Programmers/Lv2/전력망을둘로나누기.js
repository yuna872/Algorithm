function solution(n, wires) {
  var answer = -1;
  let graph = {};
  for (let i = 1; i < n + 1; i++) {
    graph[i] = [];
  }

  for (let wire of wires) {
    // console.log(graph[wire[0]])
    graph[`${wire[0]}`].push(wire[1]);
    graph[`${wire[1]}`].push(wire[0]);
  }

  const DFS = (node, depth) => {

  };

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
