function solution(plans) {
  var answer = [];
  let hash = {};

  plans.forEach((plan) => {
    plan[1] = stringToTime(plan[1]);
    plan[2] = Number(plan[2]);
    hash[plan[1]] = [plan[0], plan[2]];
  });

  // 시작 시간이 빠른 순서대로 정렬
  plans.sort((a, b) => a[1] - b[1]);

  let now = plans[0][1]; // 현재 시간
  let stack = []; // 해야하는 과제 목록
  let done = 0;  // 완료한 과제의 수
  // 주어진 과제를 모두 마칠 때까지
  while (done < plans.length) {
    // 해야할 과제가 있다면
    if (stack.length) {
      // 가장 먼저 해야할 과제를 1분씩 수행
      stack[stack.length - 1][1]--;
      // 현재 진행중인 과제가 완료되는 시점에
      if (stack[stack.length - 1][1] === 0) {
        // 완료한 과제의 과목명을 answer에 추가
        answer.push(stack[stack.length - 1][0]);
        stack.pop();
        // 완료한 과제의 수를 1 증가 시키기
        done++;
      }
    }
    // 시작해야하는 과제가 있다면 stack에 삽입
    if (hash[now]) stack.push(hash[now]);
    // 1분씩 증가
    now++;
  }

  return answer;
}

// 시간 문자열을 분단위로 변환
const stringToTime = (str) => {
  const [hour, minute] = str.split(":").map(Number);
  return hour * 60 + minute;
};

console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
);
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
);
