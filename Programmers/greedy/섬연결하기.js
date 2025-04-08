const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  const p1 = getParent(parent, a);
  const p2 = getParent(parent, b);
  if (p1 < p2) return (parent[p2] = p1);
  else parent[p1] = p2;
};

const findParent = (parent, a, b) => {
  const p1 = getParent(parent, a);
  const p2 = getParent(parent, b);
  if (p1 === p2) return true;
  return false;
};

function solution(n, costs) {
  var answer = 0;

  let parent = [];
  for (let i = 0; i < n; i++) parent[i] = i;

  costs.sort((a, b) => a[2] - b[2]);

  // 크루스칼 알고리즘
  // 선택되지 않은 간선 중 비용이 가장 적은 간선 선택
  for (let i = 0; i < costs.length; i++) {
    const [a, b, cost] = costs[i];
    // 부모가 같지 않은  = 사이클을 이루지 않는 경우
    if (!findParent(parent, a, b)) {
      unionParent(parent, a, b);
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
