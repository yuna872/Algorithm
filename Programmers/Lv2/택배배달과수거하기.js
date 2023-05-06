function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  while(deliveries.length || pickups.length) {
    // 배달하거나 수거하지 않아도 되는 부분 제거
    while(deliveries.length && !deliveries[deliveries.length-1]) deliveries.pop()
    while(pickups.length && !pickups[pickups.length-1]) pickups.pop()


    // 왕복 거리 계산하기 - 가장 멀리 나갈 수 있는 곳 까지
    answer += 2 * Math.max(deliveries.length, pickups.length)

    // 출발하면서 최대한 많이 배달하기
    let box = cap
    while(deliveries.length && box) {
        // 배달해야할 상자가 있는 경우에
        if(deliveries[deliveries.length-1]) {
            // 하나씩 배달
            deliveries[deliveries.length-1]--
            box--
        }else {
            // 더이상 배달할 수 있는 상자가 없는 경우에는 한 칸 돌아오기 
            deliveries.pop()
        }
    }

    // 돌아오면서 최대한 많이 수거해오기
    // 배달 상자와 마찬가지의 방법
    let pick = cap
    while(pickups.length && pick) {
        if(pickups[pickups.length-1]) {
            pickups[pickups.length-1]--
            pick--
        }else {
            pickups.pop()
        }
    }
  }
  
  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
