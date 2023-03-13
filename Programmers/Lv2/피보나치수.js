function solution(n) {
  const arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }

  return arr[n] % 1234567;
}

console.log(solution(3));
console.log(solution(5));
