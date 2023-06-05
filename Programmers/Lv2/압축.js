function solution(msg) {
  var answer = [];
  let dict = new Map();

  for (let i = 1; i < 27; i++) {
    dict.set(String.fromCharCode(i + 64), i);
  }

  let idx = 0
  while(idx < msg.length) {
    let str = ''

    while(dict.has(str + msg[idx])) {
        str += msg[idx]
        idx++
    }
    answer.push(dict.get(str))
    
    dict.set(str+msg[idx], dict.size+1)

  }

  return answer;
}

console.log(solution("KAKAO"));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))
console.log(solution('ABABABABABABABAB'))
