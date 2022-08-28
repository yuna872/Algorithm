board = [[''] * 1001 for _ in range(1001)]

N = int(input())

for n in range(N):
    x, y, w, h = map(int, input().split())

    for i in range(x, x+w):
        for j in range(y, y+h):
            if board[i][j] != n:
                board[i][j] = n

for n in range(N):
    cnt = 0
    for i in range(1001):
        for j in range(1001):
            if board[i][j] == n:
                cnt += 1
    print(cnt)

