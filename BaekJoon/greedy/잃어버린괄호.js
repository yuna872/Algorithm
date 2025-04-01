const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const expressions = input[0].split("-");

let result = 0;
for (let i = 0; i < expressions.length; i++) {
  const expression = expressions[i];

  const tmp = expression
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  if (i === 0) result += tmp;
  else result -= tmp;
}

console.log(result)
