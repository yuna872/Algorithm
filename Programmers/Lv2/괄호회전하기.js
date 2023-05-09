function solution(s) {
  var answer = 0;
  const pair = { "[": "]", "{": "}", "(": ")" };

  // 문자열 하나씩 이동하기
  for (let i = 0; i < s.length; i++) {
    // 괄호 회전 시키기
    let first = s[0];
    s = s.slice(1, s.length) + first;

    // 올바른 문자열인지 확인하는 과정
    let stack = [];
    let flag = true;
    for (let str of s) {
      // 열리는 괄호인 경우에는 스택에 삽입
      if (Object.keys(pair).includes(str)) {
        stack.push(str);
      } else {
        // 아닌 경우에는
        const top = stack.pop();
        // 짝이 맞지 않으면
        if (pair[top] !== str) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }
    // 
    if (flag && stack.length === 0) {
        answer++;
    }
  }

  return answer;
}

console.log(solution("[](){}"));
