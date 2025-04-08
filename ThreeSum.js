/*
3 Sum
- 배열에서 세 숫자의 합이 0이 되는 조합 찾기
- 정렬, 투포인터 사용
 */
// function solution(nums) {
//   const result = [];
//   // 배열 정렬하기
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     // 중복된 값 건너뛰기
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);
//         left++;
//         right--;

//         // 중복값 건너뛰기
//         while (left < right && nums[left] === nums[left + 1]) left++;
//         while (left < right && nums[right] === nums[right - 1]) right--;
//       } else if (sum > 0) right--;
//       else left++;
//     }
//   }

//   return result;
// }

// console.log(solution([-4, 2, -1, -1, 1, 0]));

function threeSum(arr) {
  let result = [];
  arr.sort((a, b) => a - b);

  const n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let lower = i + 1;
    let upper = n - 1;
    while (lower < upper) {
      const sumV = arr[i] + arr[lower] + arr[upper];

      if (sumV === 0) {
        result.push([arr[i], arr[lower], arr[upper]]);
        lower++;
        upper--;

        while (lower < upper && arr[lower] === arr[lower - 1]) lower++;
        while (lower < upper && arr[upper] === arr[upper + 1]) upper--;
      } else if (sumV > 0) upper--;
      else lower++;
    }
  }

  return result;
}

console.log(threeSum([-4, 2, -1, -1, 1, 0]));
