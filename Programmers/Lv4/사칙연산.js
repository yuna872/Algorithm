function solution(arr) {
  var answer = -1;
  let N = arr.length;
  const operandsCount = Math.ceil(N / 2);

  const maxDp = new Array(operandsCount)
    .fill()
    .map(() => new Array(operandsCount).fill(-Infinity));
  const minDp = new Array(operandsCount)
    .fill()
    .map(() => new Array(operandsCount).fill(Infinity));

  return answer;
}

console.log(solution(["1", "-", "3", "+", "5", "-", "8"]));
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]));
