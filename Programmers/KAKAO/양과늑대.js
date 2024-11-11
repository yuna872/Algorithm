function solution(info, edges) {
  let bTree = new Array(info.length).fill().map(() => []);

  edges.forEach(([parent, child]) => {
    bTree[parent].push(child);
  });

  let maxV = 0;
  function dfs(idx, sheep, wolf, possible) {
    if (sheep <= wolf) return;

    if (maxV < sheep) {
      maxV = sheep;
    }

    let newPossible = [...possible];
    newPossible.splice(possible.indexOf(idx), 1);
    newPossible.push(...bTree[idx]);
    newPossible.forEach((node) => {
      !info[node]
        ? dfs(node, sheep + 1, wolf, newPossible)
        : dfs(node, sheep, wolf + 1, newPossible);
    });
  }

  dfs(0, 1, 0, [0]);

  return maxV;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
