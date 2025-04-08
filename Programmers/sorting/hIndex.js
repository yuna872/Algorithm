function solution(citations) {
  var answer = 0;
  const n = citations.length;

  citations.sort((a, b) => a - b);

  let h = citations[n - 1];

  while (h > 0) {
    let i = 0;
    while (citations[i] < h) {
      i++;
    }

    if (i <= h && n - i >= h) {
      answer = h;
      break;
    }
    h--;
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
