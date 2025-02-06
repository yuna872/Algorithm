const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

let str = input.shift();
const key = input.shift().split("");

// 키 변환하기
let alphabets = [];
key.forEach((v) => {
  if (!alphabets.includes(v)) alphabets.push(v);
});

let restAlphabets = [];
let alphabetCode = alphabets.map((v) => v.charCodeAt(0));
for (let i = 65; i < 65 + 26; i++) {
  if (i === 74) continue;
  if (!alphabetCode.includes(i)) restAlphabets.push(String.fromCharCode(i));
}

let keys = [...alphabets, ...restAlphabets].slice(0, 25);
let keyMap = [];
for (let i = 0; i < 5; i++) {
  keyMap[i] = keys.slice(i * 5, (i + 1) * 5);
}

// 메시지 두글자씩 나누기
let i = 0;
while (true) {
  if (i >= str.length) break;
  if (i === str.length - 1) {
    str += "X";
    break;
  } else if (i < str.length - 1) {
    if (str[i] !== str[i + 1]) {
      i = i + 2;
      continue;
    } else if (str[i] === str[i + 1]) {
      if (str[i] === "X") {
        let newStr = str.slice(0, i + 1) + "Q" + str.slice(i + 1);
        str = newStr;
      } else {
        let newStr = str.slice(0, i + 1) + "X" + str.slice(i + 1);
        str = newStr;
      }
      i = i + 2;
    }
  }
}

const getPosition = (board, str) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j] === str) return [i, j];
    }
  }
};

// 암호화 하기
let password = "";
for (let i = 0; i < str.length; i += 2) {
  // 행, 열 찾기
  let [i1, j1] = getPosition(keyMap, str[i]);
  let [i2, j2] = getPosition(keyMap, str[i + 1]);
  // 같은 행에 있으면
  if (i1 === i2) {
    password += keyMap[i1][(j1 + 1) % 5];
    password += keyMap[i2][(j2 + 1) % 5];
  }
  // 같은 열에 있으면
  else if (j1 === j2) {
    password += keyMap[(i1 + 1) % 5][j1];
    password += keyMap[(i2 + 1) % 5][j2];
  } else {
    password += keyMap[i1][j2];
    password += keyMap[i2][j1];
  }
}

console.log(password);
