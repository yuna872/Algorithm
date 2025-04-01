function solution(nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let answer = [];
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let sumV = nums[i] + nums[left] + nums[right];
      if (sumV === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
      }

      if (sumV > 0) right--;
      else left++;
    }
  }

  return answer;
}

console.log(solution([-4, 2, -1, -1, 1, 0]));
