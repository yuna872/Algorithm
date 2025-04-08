const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, c] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

const solution = () => {
  // 한개의 원소로 충족
  for (let w of arr) {
    if (w === c) return 1;
  }

  // 두 개 조합
  let left = 0;
  let right = n - 1;
  while (left < right) {
    let sumV = arr[left] + arr[right];

    if (sumV === c) return 1;
    else if (sumV < c) left++;
    else right--;
  }

  // 3개의 조합
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      let sumV = arr[i] + arr[l] + arr[r];
      if (sumV === c) return 1;
      else if (sumV < c) l++;
      else r--;
    }
  }

  return 0;
};

console.log(solution());
