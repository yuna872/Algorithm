const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0].split("");

const aCnt = str.filter((v) => v === "a").length;

let concatStr = str.concat(str);

// 초기값 설정
let cnt = 0;
for (let i = 0; i < aCnt; i++) {
  if (str[i] === "b") cnt++;
}

let minCnt = cnt;
for (let i = aCnt; i < concatStr.length; i++) {
  let addChar = concatStr[i]; // 추가할 문자열
  let deleteChar = concatStr[i - aCnt]; // 제거할 문자열

  // 문자열 추가
  if (addChar === "b") cnt++;

  // 문자열 제거
  if (deleteChar === "b") cnt--;

  minCnt = Math.min(cnt, minCnt);
}

console.log(minCnt);
