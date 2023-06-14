function solution(queue1, queue2) {
  var answer = -2;
  const target =
    (queue1.reduce((a, sum) => a + sum, 0) +
      queue2.reduce((a, sum) => a + sum, 0)) /
    2;


  const DFS = (q1, q2, depth) => {
    // console.log(q1, q2, '------', depth)
    
    if(depth > 10) return
    const check = queue1.length? q1.reduce((a, sum) => a + sum, 0) : q2.reduce((a, sum) => a + sum, 0)
    if ( check === target) {
      answer = Math.min(answer, depth);
      return;
    }

    DFS(q1.slice(1).concat([q1[0]]), q2, depth+1 )
    DFS(q1.slice(1), q2.concat([q1[0]]), depth+1 )
    DFS(q1.concat([q2[0]]), q2.slice(1), depth+1 )
    DFS(q1, q2.slice(1).concat([q2[0]]), depth+1 )

  };

  DFS(queue1, queue2, 0)

  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
