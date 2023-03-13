function solution(brown, yellow) {
  var answer = [];

  for (let h = 1; h < brown + yellow; h++) {
    if ((brown + yellow) % h) continue;
    let w = (brown + yellow) / h;
    if (w * 2 + h * 2 - 4 === brown) return [w, h];
  }
  return [0, 0];
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
