function solution(nums) {
  const set = new Set(nums)

  if(set.size < Math.floor(nums.length/2)) return set.size
  else return Math.floor(nums.length/2)
}

console.log(solution([3, 1, 2, 3]));
