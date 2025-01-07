function solution(prices) {
  var answer = new Array(prices.length).fill(0);

  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    // 현재 인덱스의 가격이 스택의 마지막 가격보다 떨어졌다면
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  while (stack.length) {
    const top = stack.pop();
    answer[top] = prices.length - top - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
