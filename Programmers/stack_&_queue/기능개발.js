function solution(progresses, speeds) {
  var answer = [];

  const n = progresses.length;

  let i = 0;
  while (i < n) {
    // 기능 개발
    for (let i = 0; i < n; i++) {
      progresses[i] += speeds[i];
    }

    // 배포
    let cnt = 0;
    while (progresses[i] >= 100) {
      cnt++;
      i++;
    }

    if (cnt > 0) answer.push(cnt);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
