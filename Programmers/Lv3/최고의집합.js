function solution(n, s) {
  var answer = [];
  const share = (s / n) >> 0; // 소숫점 뒷자리 버림
  const rest = s % n;

  if (!share) return [-1]; // 몫이 1보다 작으면 집합 생성 불가능

  answer = new Array(n).fill(share);

  for (let i = n - 1; i > n-1-rest; i--) {
    answer[i] += 1;
  }
  return answer;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
