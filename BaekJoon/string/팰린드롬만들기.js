const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// const str = input[0];
// const reverse = str.split("").reverse().join("");

// const n = str.length;

// const isPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] === str[right]) {
//       left++;
//       right--;
//     } else return false;
//   }

//   return true;
// };

// const solution = (str) => {
//   for (let i = 0; i < n; i++) {
//     const subStr = str.substring(i);
//     if (isPalindrome(subStr)) {
//       return i + n;
//     }
//   }

//   return 2 * n;
// };

// console.log(solution(str))

function isPalindrome(str) {
  let l= 0;
  let r = str.length - 1
  while (l < r) {
    if (str[r] !== str[l]) return false
    l++
    r--
  }

  return true
}

const str = input[0]
const n = str.length
let minV = n * 2;
for (let i = 0; i < n; i++) {
  const subStr = str.substring(i)
  if (isPalindrome(subStr)) {
    minV = Math.min(i + n , minV)
  }
}

console.log(minV)