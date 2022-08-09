for test_case in range(1, 11):
    test_case_num = int(input())
    ladder = [list(map(int, input().split())) for _ in range(100)]

    row = 99
    col = ladder[99].index(2)  # 맨 마지막 행 2에서 시작

    dx = [-1, 1, 0]
    dy = [0, 0, -1]

    while True:
        ladder[row][col] = 2

        for i in range(3):
            nx = row + dx[i]
            ny = col + dy[i]

            if 0 <= nx <= 99 and 0 <= ny <= 99:
                if ladder[nx][ny] == 1:
                    row = nx
                    col = ny

            if row == 0:
                break

    print(col)

