function solution(storey) {
  var answer = Infinity;
  const str = String(storey)

  const DFS = (i, offset, curCnt) => {
    if (i === -1) {
      answer = Math.min(answer, curCnt + offset);
      return;
    }

    const num = Number(str[i]) + offset
    DFS(i-1, 0, curCnt + num)
    DFS(i-1, 1, curCnt + 10 - num)

  };

  DFS(str.length-1, 0, 0)

  return answer;
}

console.log(solution(678));
console.log(solution(2554));
console.log(solution(1111));
console.log(solution(95));
