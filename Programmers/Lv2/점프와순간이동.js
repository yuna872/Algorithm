function solution(n) {
  var ans = 0;

  while (n > 0) {
    if (n % 2) {
      ans++;
      n--;
    }else {
        n /= 2
    }
  }

  return ans;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
