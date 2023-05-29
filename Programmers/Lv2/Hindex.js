function solution(citations) {
    var answer = 0;
    const n = citations.length
    
    citations.sort((a, b) => b - a)
    
    const maxV = citations[0]

    for(let i = maxV; i >= 0; i--) {
        // i번 이상 인용된 논문의 수
        let cnt = citations.filter((h) => h >= i).length
        if(i <= cnt && n-cnt <= i) {
            answer = i
            break
        }
    }
    
    return answer;
}

console.log(solution([3,5,1,0,6]))