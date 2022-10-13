from collections import deque
import copy

def bfs():
    global maxV

    dq = deque()
    tmp_arr = copy.deepcopy(arr)
    visited = [[0] * M for _ in range(N)]

    for i in range(N):
        for j in range(M):
            if arr[i][j] == 2:
                dq.append((i, j))
                visited[i][j] = 1

    while dq:
        i, j = dq.popleft()

        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < M and not tmp_arr[ni][nj]:
                tmp_arr[ni][nj] = 2
                dq.append((ni, nj))

    cnt = 0
    for i in range(N):
        for j in range(M):
            if not tmp_arr[i][j]:
                cnt += 1

    if maxV < cnt:
        maxV = cnt
    return

def make_wall(cnt):
    if cnt == 3:
        bfs()
        return
    else:
        for i in range(N):
            for j in range(M):
                if arr[i][j] == 0:
                    arr[i][j] = 1
                    make_wall(cnt+1)
                    arr[i][j] = 0


N, M = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]
maxV = 0

make_wall(0)
print(maxV)