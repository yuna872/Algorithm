function solution(people, limit) {
  let boat = 0;
  people.sort((a,b) => a-b);

  let minIdx = 0;
  let maxIdx = people.length - 1;
  while (minIdx < maxIdx) {
    // 탈 수 있으면
    if (people[minIdx] + people[maxIdx] <= limit) {
      minIdx++;
    }
    boat++;
    maxIdx--;
  }

  return minIdx === maxIdx ? boat + 1 : boat;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
