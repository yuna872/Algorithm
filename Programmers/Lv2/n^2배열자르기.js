function solution(n, left, right) {
  var answer = [];

  for (let i = left; i < right + 1; i++) {
    answer.push(Math.max(parseInt(i/n), i % n)+1);
  }

  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
