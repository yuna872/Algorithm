import sys
sys.stdin = open('input.txt','r')

# T = int(input())
#
# for test_case in range(1, T+1):
#     N, M = map(int, input().split())
#
#     board = [list(map(int, input().split())) for _ in range(N)]
#     maxV = 0
#
#     dx = [-1, 1, 0, 0, 1, 1, -1, -1]
#     dy = [0, 0, 1, -1, 1, -1, 1, -1]
#
#     # 모든원소 차례대로 에프킬라 중심이 되게 해,,
#     for i in range(N):
#         for j in range(N):
#
#
#             sumV = board[i][j]
#             for m in range(1, M):
#                 # 십자 모양
#                 for d in range(4):
#                     if 0 <= i+dx[d]*m < N and 0 <= j+dy[d]*m < N:
#                         sumV += board[i+dx[d]*m][j+dy[d]*m]
#             if sumV > maxV:
#                 maxV = sumV
#
#             sumV = board[i][j]
#             for m in range(1, M):
#                 # 엑스 모양
#                 for d in range(4, 8):
#                     if 0 <= i+dx[d]*m < N and 0 <= j+dy[d]*m < N:
#                         sumV += board[i+dx[d]*m][j+dy[d]*m]
#             if sumV > maxV:
#                 maxV = sumV
#
#     print(f'#{test_case} {maxV}')

T = int(input())
for test_case in range(1, T+1):
    N, M = map(int, input().split())

    arr = [list(map(int, input().split())) for _ in range(N)]
    result = []

    dy = [-1, 1, 0, 0, -1, 1, -1, 1]
    dx = [0, 0, -1, 1, -1, 1, 1, -1]

    for i in range(N):
        for j in range(N):
            sumV1 = sumV2 = arr[i][j]
            # 십자모양
            for d in range(4):
                for m in range(1, M):
                    if 0 <= i+dy[d]*m < N and 0 <= j+dx[d]*m < N:
                        sumV1 += arr[i+dy[d]*m][j+dx[d]*m]
            result.append(sumV1)

            for d in range(4, 8):
                for m in range(1, M):
                    if 0 <= i+dy[d]*m < N and 0 <= j+dx[d]*m < N:
                        sumV2 += arr[i+dy[d]*m][j+dx[d]*m]
            result.append(sumV2)

    maxV = 0
    for r in result:
        if r > maxV:
            maxV = r

    print(f'#{test_case} {maxV}')





