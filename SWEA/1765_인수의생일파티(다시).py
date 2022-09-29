import sys
sys.stdin = open('1795_input.txt', 'r')

def dijk(s, CITY):
    U = []
    D = [1000000] * (N+1)

    D[s] = 0

    while len(U) < N+1:
        minV = 1000000
        for i in range(N+1):
            if i in U: continue
            if minV > D[i]:
                minV = D[i]
                curV = i

        U.append(curV)

        for i in range(N+1):
            if i in U : continue
            # 연결되어 있고
            if CITY[curV][i] and D[i] > D[curV] + CITY[curV][i]:
                D[i] = D[curV] + CITY[curV][i]
    return D

T = int(input())

for test_case in range(1, T+1):
    # X : 목적지가 되는 집의 번호
    N, M, X = map(int, input().split())

    c1 = [[0] * (N+1) for _ in range(N+1)]
    c2 = [[0] * (N+1) for _ in range(N+1)]


    for _ in range(M):
        x, y, c = map(int, input().split())

        c1[x][y] = c
        c2[y][x] = c


    dout = dijk(X, c1)
    din = dijk(X, c2)

    maxV = 0
    for i in range(1, N+1):
        if maxV < dout[i] + din[i]:
            maxV = dout[i] + din[i]

    print(f'#{test_case} {maxV}')
