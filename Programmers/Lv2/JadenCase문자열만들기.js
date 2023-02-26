function solution(s) {
  var answer = "";
  let flag = true;

  for (let i of s) {
    let tmp = i.toLowerCase();

    if (flag) {
      if (i !== " ") {
        flag = false;
        if (isNaN(i)) {
          // 숫자가 아닌 경우에만
          tmp = tmp.toUpperCase();
        }
      }
    }

    if (i === " ") {
      // 공백문자이면 flag를 true로
      flag = true;
    }
    answer += tmp;
  }
  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
