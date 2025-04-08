function solution(routes) {
  var answer = 1;

  routes.sort((a, b) => a[1] - b[1]);

  let curEnd = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    const [nextStart, nextEnd] = routes[i];

    if (nextStart > curEnd) {
      // 설치
      answer++;
      curEnd = nextEnd;
    }
  }
  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
