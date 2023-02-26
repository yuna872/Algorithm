function solution(num) {
  var answer = '';
  if (num % 2) {
    answer = 'Odd'
  } else {
    answer = 'Even'
  }
  return answer;
}

console.log(solution(3))
console.log(solution(4))