import sys
sys.stdin = open('1249_input.txt', 'r')

from collections import deque

d = [(1, 0), (0, 1), (-1, 0), (0, -1)]

def dijk(i, j):
    D = [[1e9] * N for _ in range(N)]
    dq = deque()

    D[i][j] = 0
    dq.append((i, j))

    while dq:
        i, j = dq.popleft()

        for di, dj in d:
            ni, nj = i+di, j + dj

            if not (0 <= ni < N and 0 <= nj < N):
                continue

            if D[ni][nj] > D[i][j] + G[ni][nj]:
                D[ni][nj] = D[i][j] + G[ni][nj]
                dq.append((ni, nj))

    return D[-1][-1]


T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    G = [list(map(int, input())) for _ in range(N)]

    print(f'#{test_case} {dijk(0, 0)}')


# from collections import deque
#
#
# dx = [1, 0, -1, 0]
# dy = [0, 1, 0, -1]
#
#
# def daijkstra(x, y):
#     dist = [[1000000 for _ in range(n)] for _ in range(n)]
#     dist[x][y] = 0
#     q = deque()
#     q.append((x, y))
#     while q:
#         now = q.popleft()
#         for i in range(4):
#             nx = now[0] + dx[i]
#             ny = now[1] + dy[i]
#             if not (0 <= nx < n and 0 <= ny < n):
#                 continue
#             if dist[nx][ny] > dist[now[0]][now[1]] + grid[nx][ny]:
#                 dist[nx][ny] = dist[now[0]][now[1]] + grid[nx][ny]
#                 q.append((nx, ny))
#     return dist[-1][-1]
#
# t = int(input())
# for c in range(1, t + 1):
#     n = int(input())
#     grid = [list(map(int, input())) for _ in range(n)]
#     print(f'#{c} {daijkstra(0, 0)}')

