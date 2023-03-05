function solution(n, stations, w) {
  var answer = 0;
  const apt = new Array(n + 1).fill(false);

  for (let i of stations) {
    for(let j = 1; j < w+1; j++) {
        if(i-j > 0) apt[i-j] = true
        if(i+j < n+1) apt[i+j] = true
    }
  }

  let cnt = w;
  for (let i = 1; i < n + 1; i++) {
    if (!apt[i]) {
      if (cnt === 0) {
        answer++; // 기지국을 설치
        cnt = w;
      } else {
        cnt--;
      }
    }
  }
  return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));
