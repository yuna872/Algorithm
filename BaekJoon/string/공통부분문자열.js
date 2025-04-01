const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
    .split("\n");
  
const s = input[0]
const t = input[1]
for (let i = 0; i < s.length-1; i++) {
    for (let j = i + 1; j < s.length; i++) {
        
    }
}
