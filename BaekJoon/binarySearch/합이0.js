const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let cnt = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] > 0) break;
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    let threeSum = arr[i] + arr[left] + arr[right];

    // 0이 만들어 졌을 때
    if (threeSum === 0) {
      let l = 1;
      let r = 1;

      // 마지막 수까지 겹친 경우
      if (arr[left] === arr[right]) {
        const n = right - left + 1;
        cnt += (n * (n - 1)) / 2;
        break; // 루프 종료
      }

      while (arr[left] === arr[left + 1]) {
        left++;
        l++;
      }
      while (arr[right] === arr[right - 1]) {
        right--;
        r++;
      }

      cnt += l * r;
    }

    if (threeSum > 0) right--;
    else left++;
  }
}

console.log(cnt);
