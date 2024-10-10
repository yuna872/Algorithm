const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let trees = input.shift().split(" ").map(Number);

// 1. 정렬
trees.sort((a, b) => a - b);

function solution(trees, target) {
  // 2. mid 값 구하기
  let start = 0;
  let end = trees[trees.length - 1];
  let answer = 0;
  while (start <= end) {
    // 3. mid 값 기준으로 잘린 나무 길이의 합 구하기
    let mid = Math.floor((start + end) / 2);
    let rest = 0;
    for (let h of trees) {
      if (h > mid) rest += h - mid;
    }

    // 4-1. 나무 길이의 합이 M 보다 작으면 start를 mid +1로 (키가 작은 나무는 탐색할 필요 없어짐)
    if (rest >= target) {
      answer = mid > answer ? mid : answer;

      start = mid + 1;
    }
    // 4-2. 나무 길이의 합이 M 보다 크면 end를 mid-1로 (키 큰 나무는 탐색할 필요 없어짐)
    else end = mid - 1;
  }

  return answer;
}

console.log(solution(trees, M));
