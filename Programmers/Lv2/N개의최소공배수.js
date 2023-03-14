function solution(arr) {
  const len = arr.length;
  let flag = false;
  arr.sort();

  let num = 1;
  while (true) {
    for (let i = 0; i < len - 1; i++) {
      if ((num * arr[len - 1]) % arr[i]) {
        num++;
        flag = false;
        break;
      } else flag = true;
    }
    if (flag) break;
  }

  return arr[len - 1] * num;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
