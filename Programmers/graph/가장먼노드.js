function solution(n, edges) {
  var answer = 0;

  let graph = {};

  edges.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [to];
    else graph[from].push(to);

    if (!graph[to]) graph[to] = [from];
    else graph[to].push(from);
  });

    let queue = [[1, 0]]
    let visited = new Array(n + 1).fill(false)
    visited[1] = true

    let maxDepth = 0;
    while (queue.length) {
        const [i, depth] = queue.shift()

        if (depth > maxDepth) {
            maxDepth = depth
            answer = 1
        }
        else if (depth === maxDepth) answer++
        
        for (let next of graph[i]) {
            if (!visited[next]) {
                queue.push([next, depth + 1])
                visited[next] = true
            }
        }
    }

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
