const { statSync } = require("fs");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [s, p] = input[0].split(" ").map(Number);
const dna = input[1].split("");
const [a, c, g, t] = input[2].split(" ").map(Number);

let password = new Map();
let rule = {
  A: a,
  C: c,
  G: g,
  T: t,
};
for (let [key, val] of Object.entries(rule)) {
  password.set(key, 0);
}

// 가능한 패스워드인지 확인
const checkValidation = (password) => {
  for (let [key, val] of Object.entries(rule)) {
    if (password.get(key) < val) return false;
  }
  return true;
};

let cnt = 0;

// 윈도우 초기 세팅
for (let i = 0; i < p; i++) {
  if (!password.has(dna[i])) password.set(dna[i], 1);
  else password.set(dna[i], password.get(dna[i]) + 1);
}

if (checkValidation(password)) cnt++;

let start = 0;
let end = start + p;
while (end < s) {
  let prev = dna[start]; // 제거할 문자열
  let next = dna[end]; // 다음에 포함할 문자열

  // 제거
  password.set(prev, password.get(prev) - 1);

  // 추가
  password.set(next, password.get(next) + 1);

  const validation = checkValidation(password);

  if (validation) cnt++;

  start++;
  end++;
}

console.log(cnt);
