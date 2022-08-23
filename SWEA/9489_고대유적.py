import sys
sys.stdin = open('input.txt', 'r')

# T = int(input())
#
# for test_case in range(1, T+1):
#     N, M = map(int, input().split())
#     board = [list(map(int, input().split())) for _ in range(N)]
#     longest = 0
#
#     # 가로방향
#     for i in range(N):
#         cnt = 0
#         for j in range(M):
#             if board[i][j] == 1:
#                 cnt += 1
#                 if cnt > longest:
#                     longest = cnt
#             else:
#                 cnt = 0
#
#     # 세로방향
#     for j in range(M):
#         cnt = 0
#         for i in range(N):
#             if board[i][j] == 1:
#                 cnt += 1
#                 if cnt > longest:
#                     longest = cnt
#             else:
#                 cnt = 0
#
#     print(f'#{test_case} {longest}')
T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    board = [list(map(int,input().split())) for _ in range(N)]
    longest = 0

    # 가로방향 검사
    for i in range(N):
        j = 0
        while j < M:
            cnt_one = 0
            if board[i][j] == 0:
                j += 1

            while j < M and board[i][j] == 1:
                j += 1
                cnt_one += 1

            if cnt_one > longest:
                longest = cnt_one

    for j in range(M):
        i = 0
        while i < N:
            cnt_one = 0
            if board[i][j] == 0:
                i += 1

            while i < N and board[i][j] == 1:
                i += 1
                cnt_one += 1

            if cnt_one > longest:
                longest = cnt_one

    print(f'#{test_case} {longest}')
