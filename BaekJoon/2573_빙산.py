from collections import deque

def bfs(i, j):
    dq = deque()
    seaLst = []

    dq.append((i, j))
    visited[i][j] = 1

    while dq:
        i, j = dq.popleft()

        sea = 0
        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < M :
                # 물이랑 닿으면 녹아
                if arr[ni][nj] == 0:
                    sea += 1
                elif arr[ni][nj] and not visited[ni][nj]:
                    visited[ni][nj] = 1
                    dq.append((ni, nj))
        seaLst.append((i, j, sea))

    for ii, jj, sea in seaLst:
        arr[ii][jj] = max(0, arr[ii][jj]-sea)

    return 1



N, M = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]

ice = []
for i in range(N):
    for j in range(M):
        if arr[i][j] != 0:
            ice.append((i, j))

year = 0
while ice:
    visited = [[0] * M for _ in range(N)]
    delLst = []
    group = 0

    for i, j in ice:
        if arr[i][j] and not visited[i][j]:
            group += bfs(i, j)
        if arr[i][j] == 0:
            delLst.append((i, j))

    if group >= 2:
        break

    ice = sorted(list(set(ice)-set(delLst)))
    year += 1

if group < 2:
    print(0)
else:
    print(year)
