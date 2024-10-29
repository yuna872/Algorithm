const str = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim();

let answer = str.replace(/\(\)/g, "(1)").replace(/\)\(/g, ")+(");

console.log(answer);
