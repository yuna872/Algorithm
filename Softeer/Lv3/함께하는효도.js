const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let farm = new Array(N);
for (let n = 0; n < N; n++) {
  farm[n] = input[n + 1].split(" ").map(Number);
}
let friends = [];
for (let m = 0; m < M; m++) {
  friends[m] = input[m + N + 1].split(" ").map(Number);
}

let permutations = getPermetations(friends);

permutations.forEach((permutation) => {
  let answer = [];
  let visited = new Array(N).fill().map(() => new Array(N).fill(false));
  permutation.forEach((friend) => {
    dfs(friend[0], friend[1], 0, farm[friend[0]][friend[1]], visited);
  });

  console.log(Math.max(...answer));
});

solution(N, M, farm, friends);

function dfs(i, j, depth, sumV, visited) {
  if (depth === 4) {
    answer.push(sumV);
    return;
  }

  for (let [di, dj] of [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]) {
    let ni = i + di;
    let nj = j + dj;
    if (ni >= 0 && ni < N && nj >= 0 && nj < N && !visited[ni][nj]) {
      visited[ni][nj] = true;
      dfs(ni, nj, depth + 1, sumV + farm[ni][nj], visited);
      visited[ni][nj] = false;
    }
  }
}

function getPermetations(arr) {
  if (arr.length === 1) return [arr];
  const res = [];

  arr.forEach((v, idx, arr) => {
    // 현재 인덱스에 해당하는 원소 제외, 나머지 원소로 이루어진 배열 생성
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    // rest 배열의 조합 구하기
    const permutations = getPermetations(rest);
    // 현재 인덱스를 배열의 가장 앞쪽에 붙이기
    const temp = permutations.map((p) => [v, ...p]);
    // 완성된 순열 res에 저장
    res.push(...temp);
  });

  return res;
}
