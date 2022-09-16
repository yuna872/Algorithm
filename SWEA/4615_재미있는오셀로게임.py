import sys
sys.stdin = open('4615_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())
    board = [[0] * N for _ in range(N)]
    d = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]

    # 보드의 초기 배치
    board[N // 2 - 1][N // 2 - 1] = 2
    board[N // 2 - 1][N // 2] = 1
    board[N // 2][N // 2 - 1] = 1
    board[N // 2][N // 2] = 2


    for m in range(M):
        i, j, color = map(int, input().split())
        i -= 1
        j -= 1

        # 돌 놓기
        board[i][j] = color

        # 현재위치를 기준으로 색이 바뀔 돌이 있는지 탐색하면서 색 변경
        for di, dj in d:
            ni = i + di
            nj = j + dj
            cnt = 0

            while 0 <= ni < N and 0 <= nj < N and board[ni][nj] != 0 and board[ni][nj] != color:
                ni += di
                nj += dj
                cnt += 1

            # 영역 안이면
            if 0 <= ni < N and 0 <= nj < N and board[ni][nj] == color:
                # 새로운 좌표까지 board의 값을 변경
                for _ in range(cnt):
                    ni -= di
                    nj -= dj
                    board[ni][nj] = color


    black, white = 0, 0
    for i in range(N):
        for j in range(N):
            if board[i][j] == 1:
                black += 1
            if board[i][j] == 2:
                white += 1

    print(f'#{test_case} {black} {white}')