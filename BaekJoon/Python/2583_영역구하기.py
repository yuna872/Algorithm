import sys
sys.stdin = open('2583_input.txt', 'r')

# 너비 우선 탐색
def bfs(i, j):
    Q = []
    cnt = 1

    Q.append((i, j))
    # 방문 표시
    board[i][j] = 1

    while Q:
        i, j = Q.pop(0)

        for di, dj in d:
            ni, nj = i + di, j + dj
            if 0 <= ni < M and 0 <= nj < N and board[ni][nj] == 0:
                Q.append((ni, nj))
                board[ni][nj] = 1
                cnt += 1
    return cnt


M, N, K = map(int, input().split())

board = [[0] * N for _ in range(M)]
d = [[0, 1], [0, -1], [1, 0], [-1, 0]]


# 직사각형 그리기
for k in range(K):
    x1, y1, x2, y2 = map(int, input().split())

    for i in range(y1, y2):
        for j in range(x1, x2):
            board[i][j] = 1

ans = []
for i in range(M):
    for j in range(N):
        # 직사각형이 그려지지 않은 원소를 탐색 시작
        if board[i][j] == 0:
            ans.append(bfs(i, j))

print(len(ans))
ans.sort()

for a in ans:
    print(a, end=' ')







