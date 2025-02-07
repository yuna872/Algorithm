const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, B] = input[0].split(" ").map(Number);
let P = input[1].split(" ").map(Number);

const bSearch = (P, B) => {
  let result = 0;
  let start = 1;
  let end = 4 * 10 ** 9;

  P.sort((a, b) => a - b);

  while (start <= end) {
    // 가장 낮은 성능의 컴퓨터 성능
    let mid = Math.floor((start + end) / 2);

    let cost = 0;
    for (let i = 0; i < N; i++) {
      if (P[i] < mid) cost += (mid - P[i]) ** 2;
      else continue;
    }

    if (cost <= B) {
      result = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  console.log(result);
};

bSearch(P, B);
