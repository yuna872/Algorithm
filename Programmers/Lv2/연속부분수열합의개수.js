function solution(elements) {
  var answer = new Set();
  const n = elements.length

  for(let i = 0;i < n; i++){
    let sum = 0
    for(let j = 0; j < n;j++) {
        const index = (i+j)%n
        sum += elements[index]
        answer.add(sum)
    }
  }
  return answer.size;
}

console.log(solution([7, 9, 1, 1, 4]));
