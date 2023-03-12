function solution(str) {
  let round = 0; // 회차
  let zeroCnt = 0; // 제거한 0의 개수

  // s가 '1'이 될 때까지 반복
  while (str !== "1") {
    round++; // 회차 + 1

    let oneCnt = 0; // 0을 제거한뒤 남아있는 1의 갯수 == 남은 문자열의 길이
    for (let s of str) {
      if (s === "0") zeroCnt++;
      else oneCnt++;
    }

    // 이진수로 변환하기
    let newStr = "";
    while (oneCnt > 0) {
      newStr += String(oneCnt % 2); // 이진수 만들기
      oneCnt = Math.floor(oneCnt / 2); // 몫을 oneCnt에 저장
    }
    str = newStr; // 이진수로 변환한 문자열을 다시 str에 저장
  }

  return [round, zeroCnt];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
