import sys
sys.stdin = open('input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    board = [list(input()) for _ in range(5)]

    # 가장 긴 문자열 길이 구하기
    max_l = 0
    for i in range(5):
        if len(board[i]) > max_l:
            max_l = len(board[i])

    for i in range(5):
        while len(board[i]) < max_l:
            board[i].append('')

    print(f'#{test_case}', end=' ')
    for col in range(max_l):
        for row in range(5):
            print(board[row][col], end='')
    print()



