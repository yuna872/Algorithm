const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

const solution = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      if (
        isPalindrome(str, left + 1, right) ||
        isPalindrome(str, left, right - 1)
      ) {
        return 1;
      } else return 2;
    }
  }

  return 0;
};

const t = +input.shift();
for (let i = 0; i < t; i++) {
  const str = input[i];

  console.log(solution(str));
}

