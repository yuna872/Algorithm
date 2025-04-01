const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const cranes = input[1].split(" ").map(Number);

const m = +input[2];
const boxes = input[3].split(" ").map(Number);

function solution(n, cranes, m, boxes) {
  cranes.sort((a, b) => b - a);
  boxes.sort((a, b) => b - a);

  let strong = Math.max(...cranes);
  for (let w of boxes) {
    if (w > strong) return -1;
  }

  let day = 0;
  while (boxes.length) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (cranes[i] >= boxes[j]) {
          boxes.splice(j, 1);
          break;
        }
      }
    }
    day++;
  }

  return day;
}

console.log(solution(n, cranes, m, boxes));
