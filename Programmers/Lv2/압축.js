function solution(msg) {
    var answer = [];
    let dict = new Map();

    for(let i = 1; i < 27; i++) {
        dict.set(String.fromCharCode(i + 64), i)
    }

    let lastCode = 27   
    for(let i = 0; i < msg.length;i++) {
        let str = msg[i]
        let cnt = 1
        // 단어가 있으면 다음단어 확인
        while(true) {
            console.log(str)
            if(dict.has(str)) {
                str += msg[i+cnt]
                cnt++;
            } else {
                answer.push(dict.get(str))
                dict.set(str, ++lastCode)
                break
            }
            if(i+cnt === msg.length) break
        }
    }

    return answer;
}

console.log(solution('KAKAO'))
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))
console.log(solution('ABABABABABABABAB'))