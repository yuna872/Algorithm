const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split("");

const pairs = {
  "]": "[",
  ")": "(",
};

const solution = () => {
  let stack = [];
  for (let s of arr) {
    if (s === "(" || s === "[") stack.push(s);
    else if (s === "]" || s === ")") {
      const point = s === "]" ? 3 : 2;
      let tmp = 0;

      while (true) {
        const pop = stack.pop();
        if (typeof pop === "number") {
          tmp += pop;
        } else if (pop === pairs[s]) {
          tmp = tmp > 0 ? tmp * point : point;
          stack.push(tmp);
          break;
        } else {
          return 0;
        }
      }
    }
  }

  // 남은 게 모두 숫자여야 함
  for (let s of stack) {
    if (typeof s !== "number") return 0;
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution());
