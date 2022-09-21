import sys
sys.stdin = open('17070_input.txt', 'r')


def bfs(i, j):

    # 0: 가로, 1: 세로, 2: 대각선
    state = 0

    Q = []

    Q.append((i, j))
    visited[i][j] = 1

    while Q:
        i, j = Q.pop(0)

        if i == N-1 and j == N-1:
            return

        for di, dj in d[state]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < N and ARR[ni][nj] != 1 and visited[ni][nj] == 0:
                Q.append((ni, nj))
                visited[ni][nj] = 1
                memo[ni][nj] += memo[i][j]

                # 놓여진 상태 변경해주기
                if (di, dj) == (0, 1):
                    state = 1
                elif (di, dj) == (1, 0):
                    state = 2
                else:
                    state = 3



N = int(input())

ARR = [list(map(int, input().split())) for _ in range(N)]
# 각 원소로 갈 수 있는 경로 수를 담을 배열
memo = [[0]*N for _ in range(N)]
visited = [[0] * N for _ in range(N)]
# 파이프를 밀 수 있는 방향, 그리고 놓여진 위치 1: 가로 ,2:
d = [
    [(0, 1), (1, 1)],
    [(1, 0), (1, 1)],
    [(0, 1), (1, 0)]
]


# 현재 놓인 파이프의 끝
s = 0

for i in range(N):
    for j in range(1, N):
        if ARR[i][j] != 1:
            for di, dj in d[s]:
                if 0<= i+di < N and 0<=j+dj < N and ARR[i+di][j+dj] != 1:
                    memo[i+di][j+dj] += 1
                    
                    if (di, dj) == (0, 1):
                        s = 0
                    elif (di, dj) == (1, 0):
                        s = 1
                    else:
                        s = 2


bfs(0, 1)
print(memo)
# print(bfs(i, j))
