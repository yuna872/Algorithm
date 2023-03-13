function solution(n) {
  var answer = 0;
  let start = 1;

  while (start <= n) {
    let copy = n;
    for (let i = start; i < n + 1; i++) {
      copy -= i;
      if (copy <= 0) {
        if(copy===0) answer++;
        start++;
        break
      }
    }
  }
  return answer;
}

console.log(solution(15))
