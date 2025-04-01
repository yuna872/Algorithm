const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const distances = input[1].split(" ").map(BigInt);
const prices = input[2].split(" ").map(BigInt);

let cost = 0n;
let curPrice = prices[0];
for (let i = 0; i < N - 1; i++) {
  // 현재 위치한 주유소보다 더 저렴한 가장 가까운 주유소를 찾는다.
  // 더 저렴한 곳까지만 갈 수 있는 연료를 구매한다.
  // 이 과정을 반복한다
  cost += curPrice * distances[i];
  if (curPrice > prices[i + 1]) curPrice = prices[i + 1];
}

console.log(String(cost));
