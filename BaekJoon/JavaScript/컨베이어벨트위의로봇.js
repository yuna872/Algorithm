const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);

let durabilities = input.shift().split(" ").map(Number);
let robots = new Array(2 * N).fill(false);

let rotation = () => {
  // 내구성 로테이션
  durabilities.unshift(durabilities.pop());
  // 로봇 위치 로테이션
  robots.unshift(robots.pop());
  // 내리는 위치에 로봇이 있다면 내리기
  if (robots[N - 1]) robots[N - 1] = false;
};

let moveRobots = () => {
  let i = 2 * N - 1;
  while (i > 0) {
    if (!robots[i]) {
      i--;
      continue;
    }

    let next = (i + 1) % (2 * N);
    if (durabilities[next] && !robots[next]) {
      durabilities[next] = durabilities[next] -1; // 내구도 감소
      // 로봇 이동하기
      robots[next] = true;
      robots[i] = false;
    }

    i--;
  }

  // 내리는 위치에 로봇이 있다면 내리기
  if (robots[N - 1]) robots[N - 1] = false;
};

let putUpRobot = () => {
  if (!robots[0] && durabilities[0]) {
    robots[0] = true;
    durabilities[0] = durabilities[0] - 1;
  }
};

let step = 1;
while (true) {
  rotation();

  moveRobots();

  putUpRobot();

  let cnt = durabilities.filter((v) => v === 0).length;
  if (cnt >= K) break;

  step++;
}

console.log(step);
