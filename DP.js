// 재귀
function fibonacci1(n) {
  if (n == 0 || n == 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
}

// 동적 프로그래밍 - 메모이제이션
/*
메모이제이션은 해결하기 힘든 문제를 하향식으로 접근하고 더 많은 메모리를 사용한다.
재귀가 직관적으로 보여야하는 문제일 때 사용한다.
 */
function fibonacci2(n, memo) {
  if (n == 0 || n == 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
}

// 동적 프로그래밍 - 타뷸레이션
function fibonacci3(n) {
  if (n <= 1) return n;

  let table = [0, 1];

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }

  return table[n];
}

let start = new Date();
console.log(fibonacci1(40));
let end = new Date();
console.log(`fibonacci 1 함수 실행 시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, {}));
end = new Date();
console.log(`fibonacci 2 함수 실행 시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci3(40));
end = new Date();
console.log(`fibonacci 3 함수 실행 시간: ${end - start}ms`);
