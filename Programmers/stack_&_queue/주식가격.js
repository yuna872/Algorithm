function solution(prices) {
  var answer = [];
  const n = prices.length;
  for (let i = 0; i < n; i++) {
    let price = prices[i];
    let j = i;
    while (j < n && price <= prices[j]) {
      j++;
    }

    answer.push(j === n ? j - i - 1 : j - i);
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
