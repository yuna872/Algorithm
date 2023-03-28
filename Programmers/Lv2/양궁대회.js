function solution(n, info) {
  var answer = [];
  let maxDiff = 0;
  let visited = new Array(11).fill(0);
  
  const DFS = (i, arrow, ryan, peach, visited) => {
    if (i === -1) {
      // 라이언과 어피지 점수를 비교해서 가장 큰 값으로 갱신한다.
      let diff = ryan - peach;
      if (diff > maxDiff) {
        // 남은 화살은 가장 낮은 점수의 과녁에 처리해준다.
        visited[10] = arrow
        // 최댓값 갱신
        maxDiff = diff;
        // 라이언의 과녁을 answer에 저장
        answer = visited;
      }
      return;
    }

    // 1. 화살을 쏠 수 있는 경우
    if (arrow > info[i]) {
      let tmp = [...visited];
      tmp[i] = info[i] + 1;
      // 화살 사용 - 무조건 이겨야하니까 한발 더 쏴준다.
      // 라이언은 과녁판의 점수를 획득한다.
      DFS(i - 1, arrow - info[i] - 1, ryan + 10 - i, peach, tmp);
    }

    // 2. 쏠 수 없거나 그냥 쏘지 않는 경우

    // 어피치의 화살이 있을 때에는 어피치가 점수를 획득한다.
    if (info[i] > 0) DFS(i - 1, arrow, ryan, peach + 10 - i, visited);
    // 둘 다 쏘지 않은 경우에는 누구도 점수를 획득하지 않는다.
    else DFS(i - 1, arrow, ryan, peach, visited);
  };

   // 점수가 낮은 영역부터 탐색한다.
    DFS(10, n, 0, 0, visited);

  return maxDiff ? answer: [-1];
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
