function solution(n, words) {
  var answer = [0, 0];

  let res = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const pre_word = words[i-1]
    if(pre_word[pre_word.length-1] !== words[i][0] || res.includes(words[i])) {
        answer = [(i%n)+1, Math.floor(i/n)+1]
        break
    }
    res.push(words[i])
  }

  return answer;
}

console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
