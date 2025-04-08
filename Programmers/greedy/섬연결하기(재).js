function solution(n, costs) {
  var answer = 0;

  const parents = new Array(n).fill().map((_, i) => i);

  costs.sort((a, b) => a[2] - b[2]);

  const getParents = (parents, a) => {
    if (parents[a] === a) return a;
    return (parents[a] = getParents(parents, parents[a]));
  };

  const union = (parents, x, y) => {
    const px = getParents(parents, x);
    const py = getParents(parents, y);
    if (px < py) parents[py] = px;
    else parents[px] = py;
  };

  const find = (parents, x, y) => {
    const px = getParents(parents, x);
    const py = getParents(parents, y);
    if (px === py) return true;
    return false;
  };

  // 크루스칼 알고리즘
  for (let [from, to, cost] of costs) {
    // 사이클을 이루지 않는,,
    if (!find(parents, from, to)) {
      union(parents, from, to);
      answer += cost;
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
