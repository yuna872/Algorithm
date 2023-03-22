function solution(priorities, location) {
  var answer = 0;

  // 각 문서의 인덱스를 저장하는 배열 map
  let map = [];
  for (let i = 0; i < priorities.length; i++) map.push(i);

  // 가장 높은 우선순위
  let maxValue = Math.max(...priorities);
  // 모든 문서를 프린트 할 때까지 반복
  while (priorities.length > 0) {
    // 맨 앞의 문서 꺼내기
    let priority = priorities.shift();
    // 우선순위가 가장 높은 문서인 경우
    if (maxValue === priority) {
      // 지금까지 프린트한 문서의 수 카운트
      answer++;
      // 최대 우선순위 갱신
      maxValue = Math.max(...priorities);
      // 인쇄한 문서가 내가 찾는 문서이면 answer return
      if (map.shift() === location) return answer;
    } else {
      // 아직 프린트 할 수 없는 경우
      // 인덱스와 우선순위 둘 다 맨 뒤로 보내기
      map.push(map.shift());
      priorities.push(priority);
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
