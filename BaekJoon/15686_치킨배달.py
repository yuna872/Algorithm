def nCr(n, r, s):
    global minV, sumV

    if r == 0:
        sumV = 0
        for h in house:
            mini = 1e9
            for c in comb:
                if mini > abs(c[0]-h[0]) + abs(c[1]-h[1]):
                    mini = abs(c[0]-h[0]) + abs(c[1]-h[1])

            sumV += mini

        if sumV < minV:
            minV = sumV

        return

    else:
        for i in range(s, n-r+1):
            comb[r-1] = chicken[i]
            nCr(n, r-1, i+1)

N, M = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]

chicken = []
house = []
for i in range(N):
    for j in range(N):
        if arr[i][j] == 1:
            house.append((i, j))
        elif arr[i][j] == 2:
            chicken.append((i, j))

n = len(chicken)
comb = [0] * M
minV = 1e9
sumV = 0
nCr(n, M, 0)
print(minV)



