T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    board = [[0 for _ in range(10)] for _ in range(10)]
    purple = 0

    for n in range(N):
        x1, y1, x2, y2, color = map(int, input().split())

    # 색칠하기
        for row in range(x1, x2+1):
            for col in range(y1, y2+1):
                # 아무 색도 칠해져 있지 않다면 색칠하기
                if board[row][col] == 0:
                    board[row][col] = color
                # 어떤 색이 칠해져 있다면 3(보라색)으로
                else:
                    # board[row][col] = 3 생각해보니 칠하지 않고 그냥 카운트만 해줘도,,오키
                    purple += 1

    print(f'#{test_case} {purple}')