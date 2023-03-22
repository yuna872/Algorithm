function solution(progresses, speeds) {
  var answer = [];

  let restDay = [];
  for (let i = 0; i < progresses.length; i++) {
    restDay.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let day = restDay.shift();
  let cnt = 1;
  while (restDay.length > 0) {
    let tmp = restDay.shift();
    
    if (day < tmp) {
      day = tmp;
      answer.push(cnt)
      cnt = 1
    } else {
      cnt++
    }
  }
  answer.push(cnt)

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
