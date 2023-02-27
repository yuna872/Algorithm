function solution(n, works) {
  var answer = 0;

  const sumV = works.reduce((sum, work) => {
    return sum + work;
  }, 0);

  if (sumV < n) return 0;

  const sorted = works.sort((a, b) => a - b);

  while (n) {
    sorted[-1] -= 1;
    n--;
    sorted = sorted.sort((a, b) => a - b);
  }

  for (let i of works) {
    answer += i ** 2;
  }

  return answer;
}

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
