function solution(arr1, arr2) {
    const n = arr1.length // 3
    const m = arr2[0].length //2
    const l = arr1[0].length
    var answer = new Array(n).fill().map(() => new Array(m));

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let sumV = 0;
            for(let k =0; k < l; k++) {
                sumV += (arr1[i][k] * arr2[k][j])
            }
            answer[i][j] = sumV
        }
    }

    return answer;
}

console.log(solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]]))
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],[[5, 4, 3], [2, 4, 1], [3, 1, 1]]))