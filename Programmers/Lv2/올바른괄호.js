function solution(s) {
  var answer = true;

  let stack = [];
  for (let i of s) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        // 짝이 맞지 않을 때도 false처리 해주어야함
        answer = false;
      }
    }
  }

  // 순회가 모두 끝났을 때 stack의 길이 확인
  if (stack.length > 0) {
    answer = false;
  }
  return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
