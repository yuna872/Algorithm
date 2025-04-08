const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const classes = input.map((v) => v.split(" ").map(Number));

let times = [];
for (let [start, end] of classes) {
  times.push([start, 1]);
  times.push([end, -1]);
}

times.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

let maxRoom = 0;
let room = 0;
for (let time of times) {
  room += time[1];
  maxRoom = maxRoom < room ? room : maxRoom;
}

console.log(maxRoom);
