function solution(board) {
    var answer = 1;
    
    let O = 0
    let X = 0
    
    for(let i =0; i<3; i++) {
        for(let j =0; j<3; j++) {
             if(board[i][j] === '.') continue
            else if(board[i][j] === 'O') O++
            else X++
        }
    }
    
    // o가 한개 더 많거나 같아야해
    if(!(O === X+1 || O === X)) return 0
    
    let winO = false
    let winX = false
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3;j++) {
            // 세로방향 탐색하기
            if(i === 0) {
                let str = ''
                for(let k = i; k < 3; k++) str += board[k][j]
                if(str === 'XXX') winX = true
                if(str === 'OOO') winO = true
            }
            // 가로방향 탐색
            if(j === 0) {
                if(board[i] === 'XXX') winX = true
                if(board[i] === 'OOO') winO = true
            }           
        }
    }
    
    // 3개의 연속하는 문자가 있는 경우 - 대각선 방향
    let tmp1 = board[0][0] + board[1][1] + board[2][2]
    if(tmp1 === 'XXX') winX = true
    if(tmp1 === 'OOO') winO = true
    
    let tmp2 = board[0][2] + board[1][1] + board[2][0]
    if(tmp2 === 'XXX') winX = true
    if(tmp2 === 'OOO') winO = true
    
    // 둘다 이길 수는 없어
    if(winX && winO) return 0
    // x가 이겼을때는 무조건 둘의 턴수가 같을때
    if(winX && O !== X) return 0 
    if(winO && O !== X+1) return 0 
    
    return answer;
}