const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let answer = "";
for(let line of input) {
    let [S,T] = line.toLocaleUpperCase().split(" ");
    answer += T[S.indexOf('X')]
}

console.log(answer);
