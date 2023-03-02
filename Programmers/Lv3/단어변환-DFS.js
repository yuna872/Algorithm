function solution(begin, target, words) {
    const stack = [begin];
    const visited = { [begin]: 0 };
  
    if(!words.includes(target)) return 0;
  
    while (stack.length) {
      const curWord = stack.pop();
  
      if (curWord === target) break;
  
      for (let word of words) {
        if (check(word, curWord) && !visited[word]) {
          visited[word] = visited[curWord] + 1;
          stack.push(word);
        }
      }
    }
  
    return visited[target];
  }
  
  const check = (str1, str2) => {
    let cnt = 0;
    const len = str1.length;
  
    for (let i = 0; i < len; i++) {
      // 같지 않을 때만 카운트
      if (str1[i] !== str2[i]) cnt++;
    }
    // 다른 문자열이 하나라면 true
    return cnt === 1 ? true : false;
  };
  
  console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
  console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
  