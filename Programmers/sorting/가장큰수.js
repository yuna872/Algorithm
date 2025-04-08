function solution(numbers) {
  var answer = "";

  const sorted = numbers.map(String).sort((a, b) => b + a - (a + b));

  return Number(sorted.join("")) ? sorted.join("") : "0";
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
