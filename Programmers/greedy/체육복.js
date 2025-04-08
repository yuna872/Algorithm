function solution(n, lost, reserve) {
  var answer = 0;

  const realLost = lost.filter((v) => !reserve.includes(v));
  const realReserve = reserve.filter((v) => !lost.includes(v));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let i = 0; i < realLost.length; i++) {
    let lostIdx = realLost[i];

    for (let j = 0; j < realReserve.length; j++) {
      let reserveIdx = realReserve[j];

      if (reserveIdx - 1 === lostIdx || reserveIdx + 1 === lostIdx) {
        answer += 1;
        realReserve[j] = -1;
        break;
      }
    }
  }

  return answer + n - realLost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
