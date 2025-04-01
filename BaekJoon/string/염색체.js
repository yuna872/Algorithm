const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const alphabets = ["A", "B", "C", "D", "E", "F"];
const isStartWithAlphabet = (str) => {
  if (alphabets.includes(str[0])) return true;
  return false;
};

const hasAFC = (strObj) => {
  // 그 다음에는 A가 하나 또는 그 이상 있어야 한다.
  // 그 다음에는 F가 하나 또는 그 이상 있어야 한다.
  // 그 다음에는 C가 하나 또는 그 이상 있어야 한다.

  if (strObj["A"] >= 1 && strObj["F"] >= 1 && strObj["C"] >= 1) return true;
  return false;
};

const noOthers = (strObj) => {
  // 그 다음에는 {A, B, C, D, E, F} 중 0개 또는 1개가 있으며, 더 이상의 문자는 없어야 한다
  for (let [key, value] of Object.entries(strObj)) {
    if (!alphabets.includes(key)) return false;
  }
  return true;
};

for (let n = 0; n < N; n++) {
  const str = input[n];

  const strObj = {};

  for (let s of str) {
    if (strObj[s]) strObj[s] += 1;
    else strObj[s] = 1;
  }

  if (isStartWithAlphabet(str) && hasAFC(strObj) && noOthers(strObj))
    console.log("Infected!");
  else console.log("Good");
}
