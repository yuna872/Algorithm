const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 회전 초밥 벨트에 놓인 접시의 수 N, 초밥의 가짓수 d, 연속해서 먹는 접시의 수 k, 쿠폰 번호 c
const [n, d, k, c] = input.shift().split(" ").map(Number);
let sushiBelt = input.map(Number);

let sushis = new Map(); // 윈도우 내의 초밥 정보
let cntKind = 0; // 윈도우 내의 초밥 종류 수

// 초기 윈도우 설정
for (let i = 0; i < k; i++) {
  const curSushi = sushiBelt[i];
  // 없는 종류의 초밥이라면
  if (!sushis.has(curSushi)) {
    sushis.set(curSushi, 1); // 추가하기
    cntKind++;
  } else sushis.set(curSushi, sushis.get(curSushi) + 1);
}

let maxCnt = 0;
// 슬라이딩 윈도우
for (let i = 0; i < n; i++) {
  let prev = sushiBelt[i]; // 제거할 초밥
  let next = sushiBelt[(i + k) % n]; // 새로 추가해야 할 초밥

  // 초밥 제거
  sushis.set(prev, sushis.get(prev) - 1);
  if (sushis.get(prev) === 0) {
    cntKind--;
  }
  // 초밥 추가
  if (sushis.get(next) > 0) sushis.set(next, sushis.get(next) + 1);
  else {
    sushis.set(next, 1);
    cntKind++;
  }

  // console.log(sushis, cntKind)
  let curCnt = cntKind;
  if (!sushis.has(c) || sushis.get(c) === 0) {
    curCnt += 1
  }

  maxCnt = Math.max(maxCnt, curCnt);
}

console.log(maxCnt);
