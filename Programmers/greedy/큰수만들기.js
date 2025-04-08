function solution(number, k) {
  var answer = "";

  let stack = [];
  let cnt = 0;
  for (let i = 0; i < number.length; i++) {
    const num = parseInt(number[i]);
    while (cnt < k && stack[stack.length - 1] < num) {
      stack.pop();
      cnt++;
    }

    stack.push(num);
  }

  return stack.join("").slice(0, stack.length - k + cnt);
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("3333222211", 5));
