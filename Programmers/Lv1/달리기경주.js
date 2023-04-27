function solution(players, callings) {
    var answer = new Array(players.length);

    // 선수 이름 - 순위를 저장하는 map
    let map1 = new Map();
    players.forEach((player, i) => {
        map1.set(player, i)
    })

    // 순위 - 선수 이름을 저장하는 map
    let map2 = new Map();
    players.forEach((player, i) => {
        map2.set(i, player)
    })

    callings.forEach((calling) => {
        // 이름이 불린 사람의 현재 등수
        const called_rank = map1.get(calling)

        // 추월당한 사람의 이름
        const other = map2.get(called_rank-1)
        const other_rank = called_rank-1

        map1.set(calling, other_rank)
        map1.set(other, called_rank)
        map2.set(called_rank, other)
        map2.set(other_rank, calling)
    })

    for(let [key, value] of map2.entries()) {
        answer[key] = value
    }

    return answer;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]))