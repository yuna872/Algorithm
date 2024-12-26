const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let N = Number(input);
let cnt = 0;
while (N > 0) {
  if (N % 5) N -= 3;
  else N -= 5;

  cnt++;
}

if (N < 0) {
  cnt = -1;
}
console.log(cnt);
