function solution(number, k) {
    let stack = []
    let cnt = k
    
    for(let i = 0 ;i< number.length;i++) {
        while(stack.length && stack[stack.length-1] < number[i]) {
            if(cnt > 0) {
                cnt--
                stack.pop()
            } else break
        }
        stack.push(number[i])
    }

    const str = stack.join('')
    return cnt ? str.slice(0, str.length-cnt) : str;
}

console.log(solution("1924", 2))
console.log(solution("1231234", 3))
console.log(solution("4177252841", 4))
console.log(solution("987654321", 4))