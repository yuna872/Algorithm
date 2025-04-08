function solution(people, limit) {
  var answer = 0;
  const n = people.length;

  people.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
