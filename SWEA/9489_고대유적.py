# import sys
# sys.stdin = open('input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())
    board = [list(map(int, input().split())) for _ in range(N)]
    longest = 0

    # 가로방향
    for i in range(N):
        cnt = 0
        for j in range(M):
            if board[i][j] == 1:
                cnt += 1
                if cnt > longest:
                    longest = cnt
            else:
                cnt = 0

    # 세로방향
    for j in range(M):
        cnt = 0
        for i in range(N):
            if board[i][j] == 1:
                cnt += 1
                if cnt > longest:
                    longest = cnt
            else:
                cnt = 0

    print(f'#{test_case} {longest}')
