function solution(s) {
  var answer = "";
  let arr = s.split(" ").map(function (item) {
    return Number(item);
  });

  let max = -9999;
  let min = 9999;
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });
  answer = `${min} ${max}`
  return answer;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
