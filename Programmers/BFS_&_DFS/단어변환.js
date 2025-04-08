function solution(begin, target, words) {
  var answer = Infinity;

  const getCntDiff = (word1, word2) => {
    let cnt = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) cnt++;
    }
    return cnt;
  };

  const bfs = (i, visited) => {
    let queue = [[i, 1]];
    visited[i] = true;

    while (queue.length) {
      const [ii, cnt] = queue.shift();
      if (words[ii] === target) {
        answer = Math.min(answer, cnt);
      }

      for (let ni = 0; ni < words.length; ni++) {
        if (getCntDiff(words[ii], words[ni]) === 1 && !visited[ni]) {
          queue.push([ni, cnt + 1]);
          visited[ni] = true;
        }
      }
    }
  };

  for (let i = 0; i < words.length; i++) {
    let visited = new Array(words.length).fill(false);
    if (getCntDiff(begin, words[i]) === 1) {
      bfs(i, visited);
    }
  }

  return answer === Infinity ? 0 : answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
