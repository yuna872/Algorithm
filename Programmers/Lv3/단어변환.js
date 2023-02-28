function solution(begin, target, words) {
  var answer = 0;
  const queue = []
  const len = words.length
  const visited = {}

  queue.push(begin);
  visited[begin] = 0;

  while(queue.length) {
    const node = queue.shift()

    if(node ===)
  }


  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
