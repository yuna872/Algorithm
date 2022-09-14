import sys
sys.stdin = open('2667_input.txt', 'r')

def bfs(i, j):
    Q = []
    cnt = 1

    Q.append((i, j))
    # 방문 표시를 2로 해주기로
    board[i][j] = 2

    while Q:
        i, j = Q.pop()

        for di, dj in d:
            ni = i + di
            nj = j + dj
            if 0 <= ni < N and 0 <= nj < N and board[ni][nj] == 1:
                Q.append((ni, nj))
                board[ni][nj] = 2
                # 단지 내 집의 수 카운트
                cnt += 1

    return cnt


N = int(input())

board = [list(map(int, input())) for _ in range(N)]
d = [[0, 1], [0, -1], [1, 0], [-1, 0]]

ans = []
for i in range(N):
    for j in range(N):
        # 값이 1인 포인트를 영역으로 주변 탐색
        if board[i][j] == 1:
            ans.append(bfs(i, j))

print(len(ans))
ans.sort()
for a in ans:
    print(a)


