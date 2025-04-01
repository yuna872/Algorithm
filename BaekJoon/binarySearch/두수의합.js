const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input.shift();

for (let i = 0; i < t; i++) {
  const [n, k] = input.shift().split(" ").map(Number);
  const nums = input.shift().split(" ").map(Number);

  nums.sort((a, b) => a - b);

  let minV = Infinity;
  let answer = 0;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let diff = k - (nums[left] + nums[right]);

    // 최솟값 갱신
    if (Math.abs(diff) < minV) {
      minV = Math.abs(diff);
      answer = 1;
    } else if (Math.abs(diff) === minV) {
      answer++;
    }

    if (diff < 0) right--;
    else left++;
  }

  console.log(answer);
}
