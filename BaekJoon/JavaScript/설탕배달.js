const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let N = Number(input);

let cnt = 0;
while (true) {
  if (N === 0) break;
  else if (N < 0) {
    cnt = -1;
    break;
  }

  if (N % 5) N -= 3;
  else N -= 5;

  cnt++;
}

console.log(cnt);
