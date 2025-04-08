const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, w, l] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);

let time = 1;
let curWeight = 0;
let bridge = [];
while (trucks.length || bridge.length) {
  // 트럭 태우기
  if (trucks[0] + curWeight <= l && bridge.length < w) {
    // 무게를 넘지 않으며, 다리길이도 넘지 않는 경우
    const truck = trucks.shift();
    curWeight += truck;
    bridge.push([truck, time + w]);
    time++;
  } else {
    // 트럭 내리기
    const [truck, passedTime] = bridge.shift();
    if (time < passedTime) {
      time = passedTime;
    }
    curWeight -= truck;
  }
}

console.log(time);
