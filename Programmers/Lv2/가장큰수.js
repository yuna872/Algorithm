function solution(numbers) {
  var answer = '';
  let tmp = []
  
  for(let num of numbers) tmp.push(num.toString())

  tmp.sort((a,b) => (a+b)-(b+a))
  
  for(let i = numbers.length-1;i >=0; i--) {
    answer += tmp[i]
  }
  return answer;
}

console.log(solution([6,10,2]))
console.log(solution([3,30,34,5,9]))