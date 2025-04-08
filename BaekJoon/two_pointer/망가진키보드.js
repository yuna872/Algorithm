const { rmdir } = require("fs");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
while (input[idx] !== 0) {
  const n = +input[idx++];

  if (n === 0) break;
  const str = input[idx++].split("");

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let strMap = new Map();
  while (right < str.length) {
    let rStr = str[right];

    if (strMap.has(rStr)) strMap.set(rStr, strMap.get(rStr) + 1);
    else {
      strMap.set(rStr, 1);

      // left 한칸
      while (strMap.size > n) {
        let lStr = str[left];

        strMap.set(lStr, strMap.get(lStr) - 1);
        if (strMap.get(lStr) === 0) strMap.delete(lStr);
        left++;
      }
    }

    maxLen = Math.max(right - left + 1, maxLen);
    right++;
  }

  console.log(maxLen);
}
