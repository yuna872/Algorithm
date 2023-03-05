function solution(A, B) {
  var answer = 0;
  const len = A.length;

  const sortedA = A.sort((a, b) => a - b);

  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
