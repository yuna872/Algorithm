function solution(answers) {
  var answer = []
  var score = new Array(3).fill(0);

  const stu1 = [1, 2, 3, 4, 5];
  const stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if(answers[i] === stu1[s1]) score[0]++
    if(answers[i] === stu2[s2]) score[1]++
    if(answers[i] === stu3[s3]) score[2]++
    s1++;
    if (s1 === 5) s1 = 0;
    s2++;
    if (s2 === 8) s2 = 0;
    s3++;
    if (s3 === 10) s3 = 0;
  }

  const max = Math.max(...score)
  for(let i = 0; i < 3;i++) {
    if(max === score[i]) answer.push(i+1)
  }

  return answer;
}

console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))