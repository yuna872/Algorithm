// up down 게임이라고 생각하자

let N = 5;
const arr = [6, 3, 2, 10, -10];
const numbers = [10, 9, -5, 2, 3, 4, 5, -10];

arr.sort((a, b) => a - b);

for (const number of numbers) {
  let start = 0;
  let end = N - 1;
  let flag = false

  while (start <= end) {
    // 교차되지 않은 동안
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === number) {
      flag = true
      break;
    } else if (arr[mid] < number) {
      start = mid + 1;
    } else if (arr[mid] > number) {
      end = mid - 1;
    }
  }

  console.log(flag ? 1 : 0)
}
