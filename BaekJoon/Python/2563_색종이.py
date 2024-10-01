board = [[0] * 101 for _ in range(101)]
cnt = 0

N = int(input())

for n in range(N):
    stX, stY = map(int, input().split())

    for i in range(stX, stX + 10):
        for j in range(stY, stY + 10):
            if board[i][j] == 0:
                board[i][j] = 1
                cnt += 1

print(cnt)

