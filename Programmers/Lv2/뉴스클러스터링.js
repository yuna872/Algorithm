function solution(str1, str2) {    
    let arr1 = []
    let arr2 = []
    for(let i = 0; i< str1.length-1; i++) {
        let tmp = str1.slice(i, i+2)
        if(tmp.length === 2 && isAlphabetOnly(tmp)) arr1.push(tmp.toUpperCase())
    }
    for(let i = 0; i<str2.length-1; i++) {
        let tmp = str2.slice(i, i+2)
        if(tmp.length === 2 && isAlphabetOnly(tmp)) arr2.push(tmp.toUpperCase())
    }
    const set = new Set([...arr1, ...arr2])
    let intersection = 0
    let union = 0
    set.forEach((item) => {
        const len1 = arr1.filter((str) => str === item).length
        const len2 = arr2.filter((str) => str === item).length
        intersection += Math.min(len1, len2)
        union += Math.max(len1, len2)
    })

    if(!intersection && !union) return 65536
    return Math.floor((intersection/union)*65536);
}

const isAlphabetOnly = (str) => {
    return /^[A-Za-z]+$/.test(str);
}

console.log(solution('FRANCE', 'french'))
console.log(solution('handshake', 'shake hands'))
console.log(solution('aa1+aa2', 'AAAA12'))
console.log(solution('E=M*C^2', 'e=m*c^2'))