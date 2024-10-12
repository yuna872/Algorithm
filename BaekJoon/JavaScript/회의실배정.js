const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();

let meetings = input.map((line) => {
  return line.split(" ").map(Number);
});

meetings.sort((a, b) => {
  if(a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0]
});

let cur = 0;
let cnt = 0;
meetings.forEach((meeting) => {
    let [start, end] = meeting

    // 현재 시간이 다음 회의 시작 시간 보다 이르다면
    if(start >= cur) {
        // 회의실 배정하기
        cur = end
        cnt++
    }
})

console.log(cnt);
