for test_case in range(1, 11):
    test_case_num = int(input())
    ladder = [list(map(int, input().split())) for _ in range(100)]

    row = 99
    col = ladder[99].index(2)  # 맨 마지막 행 2에서 시작

    #첫번째 줄에 닿을때까지
    while row > 0:
        # 양 쪽 벽에 닿지 않는 경우
        if 0 < col < 99:
            # 왼쪽이 1 이면 이동하면서 지나온 자리 2로 변경
            if ladder[row][col-1] == 1:
                while ladder[row][col-1]:
                    col -= 1
                    ladder[row][col] = 2
            elif ladder[row][col+1] == 1:
                while ladder[row][col+1]:
                    col += 1
                    ladder[row][col] = 2
            else:
                row -= 1
                ladder[row][col] = 2
        # 왼쪽 벽에 닿을 경우
        elif col == 0:
            if ladder[row][col+1] == 1:
                while ladder[row][col+1]:
                    col += 1
                    ladder[row][col] = 2
            else:
                row -= 1
                ladder[row][col] = 2

        # 오른쪽 벽에 닿을 경우
        elif col == 99:
            if ladder[row][col-1] == 1:
                while ladder[row][col-1]:
                    col -= 1
                    ladder[row][col] = 2
            else:
                row -= 1
                ladder[row][col] = 2

        if row == 0:
            break
            
    print(ladder)
    print(f'#{test_case_num} {ladder[0].index(2)}')
