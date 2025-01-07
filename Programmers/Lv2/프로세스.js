function solution(priorities, location) {
  var answer = 0;

  let queue = priorities.map((v, idx) => [idx, v]);
  while (queue.length) {
    // 1. 실행 대기 큐에서 대기중인 프로세스 꺼내기
    let process = queue.shift();

    // 2. 우선순위가 더 높은 프로세스가 있다면 꺼내고 기존 프로세스는 큐에 집어넣기
    let prior = queue.some(([idx, v]) => v > process[1]);
    if (prior) {
      queue.push(process);
    } else {
      // 3. 그런 프로세스가 없다면 방금 꺼낸 프로세스 실행
      answer++;
      if (location === process[0]) return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
