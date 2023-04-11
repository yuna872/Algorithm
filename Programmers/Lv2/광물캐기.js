function solution(picks, minerals) {
  var answer = 1e9;
  const key = { diamond: 0, iron: 1, stone: 2 };
  const tired = [
    [1, 1, 1],
    [5, 1, 1],
    [25, 5, 1],
  ];

  let queue = [];
  // 캘 광물의 순번, 현재까지의 피로도,  남은 곡괭이들
  queue.push({ idx: 0, curTired: 0, curPicks: picks });

  while (queue.length > 0) {
    const { idx, curTired, curPicks } = queue.shift();

    // 현재 피로도가 현재 까지의 최소 피로도보다 크면 return - 백트래킹
    if (curTired > answer) return;

    // 더이상 캘 광물이 없는 경우
    if (idx >= minerals.length) {
      if (curTired < answer) {
        console.log(curTired)
        answer = curTired;
      }
      return answer;
    }

    // 곡괭이 선택
    let pick = -1;
    for (let i = 0; i < 3; i++) {
      if (curPicks[i] > 0) {
        curPicks[i] -= 1;
        pick = i;
        break;
      }
    }

    // 선택할 곡괭이가 없는 경우
    if (pick === -1) {
      if (curTired < answer) {
        answer = curTired;
      }
      return answer;
    }

    // 피로도 누적시키기
    let tmpTired = curTired;
    for (let i = idx; i < i + 5; i++) {
      if (i === minerals.length) break;
      tmpTired += tired[pick][key[minerals[i]]];
    }

    queue.push({
      idx: idx + 5,
      curTired: tmpTired,
      curPicks: curPicks.map((v) => v),
    });
  }

  return answer;
}

console.log(
  solution(
    [1, 3, 2],
    [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ]
  )
);
console.log(
  solution(
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ]
  )
);
