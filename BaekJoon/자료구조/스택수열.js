const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const nums = input.map(Number);

const solution = () => {
  const stack = [0];
  const answer = [];

  let i = 1;
  for (let j = 0; j < N; j++) {
    const num = nums[j];

    // 현재 숫자가 마지막 원소가 될때 까지 push
    while (stack[stack.length - 1] < num) {
      stack.push(i);
      answer.push("+");
      i++;
    }

    if (stack[stack.length - 1] === num) {
      stack.pop();
      answer.push("-");
    } else {
      return "NO";
    }
  }

  return answer.join('\n');
};

console.log(solution());
