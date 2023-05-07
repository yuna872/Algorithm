function solution(numbers) {
    var answer = [];
    
    let stack =[]
    
    for(let i = numbers.length-1; i >=0;i--) {
        while(true) {
            if(stack.length === 0) {
                answer.push(-1)   
                break;
            }
            if(stack[stack.length-1] > numbers[i]) {
                answer.push(stack[stack.length-1])
                stack.num
                break;
            } else {
                stack.pop()
            }
        }
        stack.push(numbers[i])
    }
    return answer.reverse();
}