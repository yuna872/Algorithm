function solution(stones, k) {
  let min = 1;
  let max = 200000000;

  while (min <= max) {
    const mid = ((min + max) / 2) >> 0; // 2로 나누고 소숫점이하 버림
    const copy = stones.slice();

    let zeroCnt = 0; // 0이 3번 반복되면 탈출할거야

    for (let i = 0; i < copy.length; i++) {
      copy[i] -= mid; // 돌의 수 - 현재 검사할 친구들의 수
      zeroCnt = copy[i] <= 0 ? zeroCnt + 1 : 0; // 연속되는 0의 개수를 세어 줌
      // 연속되는 0의 개수가 k개가 되는 순간
      if (zeroCnt === k) {
        break;
      }
    }

    // 연속되는 0의 개수가 k개이면 min값을 조작하고 아니면 max을 조작한다.
    if(zeroCnt===k) {
      max = mid - 1
    } else {
      min = mid + 1
    }
  }
  return min; // 최솟값은 min에 저장
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
