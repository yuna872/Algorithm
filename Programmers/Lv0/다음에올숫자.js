function solution(common) {
  var answer = 0;
  // 등차수열인 경우
  if (common[1] === (common[0]+common[2])/2) {
    answer = common.slice(-1)[0] + common[1]-common[0]
  } else { // 등비수열인 경우
    answer = common.slice(-1)[0] * common[1]/common[0]
  }
  
  return answer;
}

console.log(solution([1,2,3,4]))
console.log(solution([2,4,8]))