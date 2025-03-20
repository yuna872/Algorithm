const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("");

const stack = [];
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  const val = input[i];

  // 레이저 발사
  if (val === "(" && input[i + 1] === ")") {
    cnt += stack.length;
    i++;
  }
  // 막대가 끝난 경우
  else if (val === ")") {
    stack.pop();
    cnt++;
  }
  // 막대가 시작하는 경우
  else if (val === "(") {
    stack.push(val);
  }
}

console.log(cnt);
