import sys
sys.stdin = open('input.txt', 'r')

for test_case in range(1, 11):
    testN = int(input())

    ladder = [list(map(int,input().split())) for _ in range(100)]

    # 좌, 우, 위
    dy = [-1, 1, 0]
    dx = [0, 0, -1]

    row = 99
    col = ladder[99].index(2)
    while row > 0:
        for d in range(3):
            if 0 <= col+dy[d] < 100 and 0 <= row+dx[d] < 100:
                if ladder[row+dx[d]][col+dy[d]] == 1:
                    col += dy[d]
                    row += dx[d]
                    ladder[row][col] = 2
            else:
                continue
    print(f'#{test_case} {col}')