function solution(numbers, target) {
  var answer = 0;

  const dfs = (i, sumV) => {
    if (i === numbers.length) {
      if (sumV === target) answer++;
      return;
    }

    dfs(i + 1, sumV - numbers[i]);
    dfs(i + 1, sumV + numbers[i]);
  };

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
