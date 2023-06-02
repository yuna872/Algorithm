
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

let N = 0
let rocks = []
rl.on('line', (line) => {
    if(!N) N = parseInt(line)
    else rocks = line.split(' ').map(Number)
}).on('close', () => {
    let res = new Array(N).fill(1)

    rocks.forEach((rock, now) => {
        let maxV = 0
        let i = now - 1
        while(i >= 0) {
            if(rock > rocks[i]) maxV = Math.max(maxV, res[i])
            i--
        }
        res[now] = maxV + 1
    })

    console.log(Math.max(...res))
})