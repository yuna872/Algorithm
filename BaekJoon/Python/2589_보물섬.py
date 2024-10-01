from collections import deque

def bfs(i, j):
    dq = deque()

    dq.append((i, j))
    visited[i][j] = 1
    cnt = 0

    while dq:
        i, j = dq.popleft()

        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < M and not visited[ni][nj]:
                if island[ni][nj] == 'L':
                    dq.append((ni, nj))
                    visited[ni][nj] = visited[i][j] + 1
                    cnt = max(cnt, visited[ni][nj])
    return cnt - 1


N, M = map(int, input().split())

island = [list(input()) for _ in range(N)]

land = []
for i in range(N):
    for j in range(M):
        if island[i][j] == 'L':
            land.append((i, j))

maxV = 0
for i, j in land:
    visited = [[0] * M for _ in range(N)]
    maxV = max(maxV, bfs(i, j))

print(maxV)



