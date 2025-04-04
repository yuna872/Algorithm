const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const t = +input[idx++];

const check = (n, nums) => {
  for (let j = 1; j < n; j++) {
    const str1 = nums[j - 1];
    const str2 = nums[j];

    // str1이 str2의 접두어인지 확인
    let k = 0;
    while (k < str1.length) {
      if (str1[k] !== str2[k]) break;
      else k++;
    }

    // 접두어인 경우
    if (k === str1.length) {
      return "NO";
    } else continue;
  }

  return "YES";
};

for (let i = 0; i < t; i++) {
  const n = +input[idx++];

  let nums = new Array(n);
  for (let j = 0; j < n; j++) {
    nums[j] = input[idx++];
  }

  nums.sort();

  console.log(check(n, nums));
}
