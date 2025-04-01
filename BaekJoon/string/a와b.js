const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const s = input[0];
const t = input[1];

let str = t.split("");
let answer = 0;
while (str.length) {
  let last = str[str.length - 1];
  if (last === "A") {
    str.pop();
  } else if (last === "B") {
    str.pop();
    str = str.reverse();
  }

  if (s === str.join("")) {
    answer = 1;
    break;
  }
}

console.log(answer);
