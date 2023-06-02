function solution(user_id, banned_id) {    
    const bannedList = {}
    for(let banned of banned_id) {
        const len = banned.length
        for(let user of user_id) {
            // 문자열 길이가 같지 않은 경우
            if(len !== user.length) continue
            // 문자열 길이가 같은 경우 확인
            let flag = true
            for(let i = 0;i< len;i++) {
                if(banned[i] ==='*') continue
                if(banned[i] !== user[i]) {
                    flag = false
                    break
                }
            }
            if(flag) {
                if(bannedList[banned]) bannedList[banned].push(user)
                else bannedList[banned] = [user]
            }
        }
    }

    const keys = Object.keys(bannedList)
    
    let res = new Set();
    const DFS = (i, arr) => {
        if(arr.length === banned_id.length) {
            console.log(arr,'---------')
            arr.sort()
            res.add(JSON.stringify(arr))
            return
        }

        for(let key of keys.slice(i, keys.length)) {
            for(let value of bannedList[key]) {
                if(!arr.includes(value)) {
                    console.log(arr)
                    DFS(i+1, arr.concat([value]))
                }
            }
        }
    }
    console.log(bannedList)

    DFS(0, [])
    console.log(res)
    
    return res.size;
}

// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "abc1**"]))
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["*rodo", "*rodo", "******"]))
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]))