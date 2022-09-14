import sys
sys.stdin = open("input.txt","r")

# for test_case in range(1, 11):
#     t = int(input())
#
#     # 사다리 입력 받기
#     ladder = [list(map(int, input().split())) for _ in range(100)]
#
#     # 오른쪽, 왼쪽, 위 방향 순서대로
#     dx = [0, 0, -1]
#     dy = [1, -1, 0]
#
#     # 처음 시작하는 점 찾기
#     for i in range(100):
#         if ladder[99][i] == 2:
#             col = i
#
#     #오왼위 순서대로 찔러보고 1이면 이동해,,,벽에 닿았을 때는 달라져야함,,,,
#     row = 99
#     while row > 0:
#         for d in range(3):
#             if 0 <= row + dx[d] <= 99 and 0 <= col + dy[d] <= 99:
#                 if ladder[row+ dx[d]][col + dy[d]] == 1:
#                     # 지나온 자리는 2로 변경
#                     ladder[row][col] = 2
#                     row = row + dx[d]
#                     col = col + dy[d]
#
#     print(f'#{test_case} {col}')

T = 10
for t in range(T):
    case = int(input())
    arr = [list(map(int, input().split())) for i in range(100)]
    # 도착지점의 인덱스 찾기
    col, row = 0, 0
    for end in range(100):
        if arr[99][end] == 2:
            col = 99
            row = end
            print(row)
            break

    # 출발점에 도착할 때까지 진행
    while col != 0:     # col == 0: 시작점
        # 왼쪽에 길이 있을 때
        while row-1 >= 0 and arr[col][row-1] == 1:   # 왼쪽에 길이 없을 때까지 전진
                row -= 1

        # 오른쪽에 길이 있을 때

        while row+1 < 100 and arr[col][row+1] == 1:   # 오른쪽에 길이 없을 때까지 전진
            row += 1

        # 위 조건에 해당하지 않을 때 위로 이동
        col -= 1
        # print(col)
    print(f"#{t+1}", row, col)








