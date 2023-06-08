function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach((tree) => {
        // skill에 포함되어 있지 않은 문자는 제거
        const str = tree.split('').filter((a) => skill.includes(a)).join('')
        
        // 가능한 스킬 트리인지 확인
        let i = 0;
        let j = 0
        while(j < str.length) {
            if(skill[i] === str[j]) i++
            j++
        }
        if(i === str.length) answer++
    }) 
    
    return answer;
}