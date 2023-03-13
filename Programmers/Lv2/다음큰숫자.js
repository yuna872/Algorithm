function solution(n) {
  var answer = n;
  let flag = false

  let oneCnt = 0;
  while (n > 0) {
    if (n % 2) oneCnt++;
    n = Math.floor(n / 2);
  }
  // console.log(oneCnt)

  for (let i = answer + 1;i>n; i++) {
    let count = 0;
    let copy = i

    while (copy > 0) {
      if (copy % 2) count++;
      copy = Math.floor(copy / 2);
    }

    if (oneCnt === count) {
      answer = i
      flag = true
      break
    }

    if(flag) break
  }

  return answer;
}

console.log(solution(78))
console.log(solution(15))
