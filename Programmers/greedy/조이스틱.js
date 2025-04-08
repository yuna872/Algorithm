function solution(name) {
  var answer = 0;

  let move = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    const char = name[i];

    // 상하 조이스틱
    answer += Math.min(char.charCodeAt() - 65, 90 - char.charCodeAt() + 1);

    // 좌우 조이스틱
    // 연속된 A의 길이 찾기
    let idx = i + 1;
    while (idx < name.length && name[idx] === "A") {
      idx++;
    }

    // 1. 단방향
    // 2. 오, 왼 -> 왼
    // 3. 왼 , 오 -> 오
    move = Math.min(
      move,
      i * 2 + name.length - idx,
      2 * (name.length - idx) + i
    );
  }

  return answer + move;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
