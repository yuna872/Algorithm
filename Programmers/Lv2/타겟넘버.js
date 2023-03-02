function solution(numbers, target) {
  let answer = 0;
  const len = numbers.length;

  function DFS(curSum, depth) {
    if (depth === len) {
      if (curSum === target) {
        answer++;
      }
      return;
    }
    DFS(curSum + numbers[depth], depth + 1);
    DFS(curSum - numbers[depth], depth + 1);
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
