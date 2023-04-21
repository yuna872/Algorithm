function solution(plans) {
  var answer = [];

  plans.forEach((plan) => {
    plan[1] = stringToTime(plan[1]);
    plan[2] = Number(plan[2]);
  });

  plans.sort((a, b) => a[1] - b[1]);

  let now = plans[0][1]
  let stack = []
  let done = 0
  while(done < plans.length) {
    
  }

  return answer;
}

const stringToTime = (str) => {
  const [hour, minute] = str.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
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
