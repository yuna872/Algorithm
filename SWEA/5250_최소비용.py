from collections import deque

import sys
sys.stdin = open('5250_input.txt', 'r')

def solve(i, j):
    dq = deque()

    dq.append((i, j))

    while dq:
        i, j = dq.popleft()

        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < N:
                # 더 높은 곳으로 이동하는 경우 추가비용이 발생한다
                extra = 0
                if G[ni][nj] > G[i][j]:
                    extra = G[ni][nj] - G[i][j]

                if res[ni][nj] > res[i][j] + extra + 1:
                    res[ni][nj] = res[i][j] + extra + 1
                    dq.append((ni, nj))

# def solve(i, j):
#     if i == N-1 and j == N-1:
#         return
#
#     else:
#         for di, dj in [(0, 1), (1, 0), (-1, 0), (0, 1)]:
#             if 0 <= i + di < N and 0 <= j + dj < N:
#                 extra = 0
#                 # 더 높은 곳으로 이동하는 경우에는 추가비용이 발생
#                 if G[i+di][j+dj] > G[i][j]:
#                     extra = G[i+di][j+dj] - G[i][j]
#
#                 # 최단 거리 갱신
#                 if res[i + di][j + dj] > res[i][j] + 1 + extra:
#                     res[i + di][j + dj] = res[i][j] + 1 + extra
#
#                     solve(i+di, j+dj)
#     return

T = int(input())

for test_case in range(1, T+1):
    # N x N 행렬 만들 것임
    N = int(input())

    minV = 99999999

    G = [list(map(int, input().split())) for _ in range(N)]
    # 비용 정보를 저장할 배열
    res = [[10000] * N for _ in range(N)]

    res[0][0] = 0

    solve(0, 0)

    print(f'#{test_case} {res[N-1][N-1]}')