function solution(priorities, location) {
  var answer = 0;

  let queue = priorities.map((v, i) => [v, i]);
  while (queue.length) {
    const task = queue.shift();

    let later = false;
    // 우선순위가 높은 프로세스 찾기
    for (let [p, i] of queue) {
      if (p > task[0]) {
        later = true;
        break;
      }
    }

    if (later) queue.push(task);
    else {
      answer++;
      if (location === task[1]) return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
