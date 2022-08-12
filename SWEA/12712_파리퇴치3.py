# import sys
# sys.stdin = open('input.txt','r')

T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    board = [list(map(int, input().split())) for _ in range(N)]
    maxV = 0

    dx = [-1, 1, 0, 0, 1, 1, -1, -1]
    dy = [0, 0, 1, -1, 1, -1, 1, -1]

    for i in range(N):
        for j in range(N):

            sumV = board[i][j]
            for m in range(1, M):
                # 십자 모양
                for d in range(4):
                    if 0 <= i+dx[d]*m < N and 0 <= j+dy[d]*m < N:
                        sumV += board[i+dx[d]*m][j+dy[d]*m]
            if sumV > maxV:
                maxV = sumV

            sumV = board[i][j]
            for m in range(1, M):
                # 엑스 모양
                for d in range(4, 8):
                    if 0 <= i+dx[d]*m < N and 0 <= j+dy[d]*m < N:
                        sumV += board[i+dx[d]*m][j+dy[d]*m]
            if sumV > maxV:
                maxV = sumV

    print(f'#{test_case} {maxV}')




