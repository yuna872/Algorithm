const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const strArr = input;

const strObj = {};
for (let i = 0; i < N; i++) {
  const word = strArr[i];

  const len = word.length;
  if (strObj[len]) strObj[len].add(word);
  else strObj[len] = new Set([word]);
}

Object.values(strObj).map((set) => {
  const setArr = Array.from(set);
  setArr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  for (let word of setArr) {
    console.log(word);
  }
});
