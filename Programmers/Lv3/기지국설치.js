function solution(n, stations, w) {
  var answer = 0;
  const len = stations.length;
  const coverage = 2 * w + 1;

  // 지역의 번호는 1부터 시작한다.
  let cur = 1;
  for (let s of stations) {
    // cur 부터 현재 기지국이 커버하는 구간의 바로 앞 인덱스까지의 길이
    let cnt = s- w - cur;
    // 설치되어야 하는 기지국의 최소 개수
    answer += Math.ceil(cnt / coverage);
    // 현재 기지국이 커버하는 구간의 바로 다음 인덱스로 cur를 갱신
    cur = s + w + 1;
  }

  // 마지막으로 커버된 인덱스가 아직 n보다 작을 경우
  if (cur < n + 1) {
    // 빠짐없이 기지국 설치해주기
    answer += Math.ceil((n - cur + 1) / coverage);
  }

  return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));
