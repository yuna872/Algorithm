function solution(brown, yellow) {
  var answer = [];

  let tmp = (brown + 4) / 2;
  for (let i = tmp - 2; i > 2; i--) {
    let w = i;
    let h = tmp - i;
    if ((w - 2) * (h - 2) === yellow) answer = [i, tmp - i];
  }
  return answer.sort((a, b) => b - a);
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
