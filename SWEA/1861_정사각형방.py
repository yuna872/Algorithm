import sys
sys.stdin = open('1861_input.txt', 'r')
from collections import deque


def bfs(i, j):
    dq = deque([])
    visited = [[0] * N for _ in range(N)]
    d = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    cnt = 1

    dq.append((i, j))
    visited[i][j] = 1

    while dq:
        i, j = dq.popleft()

        for di, dj in d:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < N and rooms[ni][nj] == rooms[i][j] + 1 and visited[ni][nj] == 0:
                dq.append((ni, nj))
                visited[ni][nj] = 1
                cnt += 1

    return cnt


T = int(input())

for test_case in range(1, T + 1):
    N = int(input())

    rooms = [list(map(int, input().split())) for _ in range(N)]

    memo = [[0] * N for _ in range(N)]
    maxV = 0
    roomN = -1
    for i in range(N):
        for j in range(N):
            memo[i][j] = bfs(i, j)
            if memo[i][j] >= maxV:
                maxV = memo[i][j]
                if roomN > rooms[i][j]:
                    roomN = rooms[i][j]


    print(f'#{test_case} {roomN} {maxV}')

