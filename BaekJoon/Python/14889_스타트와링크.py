def nCr(n, r, s):
    global minV

    if r == 0:
        player1 = 0
        player2 = 0
        comb2 = [x for x in A if x not in comb1]

        for i in comb1:
            for j in comb1:
                if i != j and power[i][j]:
                    player1 += power[i][j]

        for i in comb2:
            for j in comb2:
                if i != j and power[i][j]:
                    player2 += power[i][j]

        if abs(player1-player2) < minV:
            minV = abs(player1-player2)

    else:
        for i in range(s, n-r+1):
            comb1[r-1] = A[i]
            nCr(n, r-1, i+1)

N = int(input())

A = [i for i in range(N)]
power = [list(map(int, input().split())) for _ in range(N)]
comb1 = [0] * (N//2)

minV = 9999999

player1 = 0
player2 = 0

nCr(N, N//2, 0)

print(minV)
