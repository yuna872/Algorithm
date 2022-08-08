# for test_case in range(1, 11):
#     test_case_num = int(input())
ladder = [list(map(int, input().split())) for _ in range(100)]

row = 99
col = ladder[99].index(2)

while row > 0:

    if 0 < col < 99:
        # 왼쪽 방향
        if ladder[row][col - 1] == 1:
            while ladder[row][col - 1] == 1:
                col -= 1
            # 오른쪽 방향
        elif ladder[row][col + 1] == 1:
            while ladder[row][col + 1] == 1:
                col += 1
        else:
            if row > 0:
                row -= 1

    elif col == 0:
        if ladder[row][col + 1] == 1:
            while ladder[row][col + 1] == 1:
                col += 1
        else:
            row -= 1
    elif col == 9:
        if ladder[row][col - 1] == 1:
            while ladder[row][col - 1] == 1:
                col -= 1
        else:
            row -= 1

        ladder[row][col] = 2

print(ladder)

print(f'#{1} {ladder[0].index(2)}')