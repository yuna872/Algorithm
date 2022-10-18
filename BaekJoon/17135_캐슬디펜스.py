from collections import deque

def attack(i, j):
    global maxV

    d = [[] * (N+M+1)]
    for ni, nj in enemy:
        t = abs(ni-i) + abs(ni-i)
        d[t].append((ni, nj))


    for tmp in d[1:]:
        if len(tmp) == 1:
            pass

    return

def nCr(n, r, s):
    if r == 0:
        for j in archer:
            attack(N, j)
        return
    else:
        for i in range(s, n-r+1):
            archer[r-1] = A[i]
            #더 작은 단위의 조합 구하기
            nCr(n, r-1, i+1)


N, M, D = map(int, input().split())
A = [i for i in range(M)]

arr = [list(map(int, input().split())) for _ in range(N)]
arr.append([3]*M)

enemy = []
for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            enemy.append((i, j))

archer = [0] * 3
maxV = 0

nCr(M, 3, 0)
