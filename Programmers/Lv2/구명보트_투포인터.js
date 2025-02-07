function solution(people, limit) {
  var answer = 0;
  // 정렬
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] > limit) {
      right--;
      answer++;
    } else {
      right--;
      left++;
      answer++;
    }
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
