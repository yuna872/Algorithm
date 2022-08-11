import sys
sys.stdin = open('input (13).txt', 'r')

T = int(input())

for t in range(1, T+1):
    H, W = map(int, input().split())
    # 필드 입력 받기
    field = [input().split() for _ in range(H)]
    N = int(input())
    action = input().split()

    # 내 위치 찾기
    for i in range(W):
        for j in range(H):
            if field[i][j] in ['^','v','<','>']:
                curR = i
                curC = j

    for act in action:
        if act == 'U':
            field[curR][curC] = '^'
            # 범위 안에 있고, 위가 평지이면 바꿔
            if 0 <= curR-1 <= H and 0 <= curC <= W:
                if field[curR-1][curC] == '.':
                    field[curR][curC], field[curR-1][curC] = field[curR-1][curC], field[curR][curC]
                    curR = curR-1
        elif act == 'D':
            field[curR][curC] = 'v'
            # 범위 안에 있고, 아래가 평지이면 바꿔
            if 0 <= curR + 1 <= H and 0 <= curC <= W:
                if field[curR + 1][curC] == '.':
                    field[curR][curC], field[curR + 1][curC] = field[curR + 1][curC], field[curR][curC]
                    curR = curR + 1
        elif act == 'L':
            field[curR][curC] = '<'
            # 범위 안에 있고, 왼쪽이 평지이면 바꿔
            if 0 <= curR <= H and 0 <= curC-1 <= W:
                if field[curR][curC-1] == '.':
                    field[curR][curC], field[curR][curC-1] = field[curR][curC-1], field[curR][curC]
                    curC = curC - 1
        elif act == 'R':
            field[curR][curC] = '>'
            # 범위 안에 있고, 오른쪽이 평지이면 바꿔
            if 0 <= curR <= H and 0 <= curC + 1 <= W:
                if field[curR][curC + 1] == '.':
                    field[curR][curC], field[curR][curC + 1] = field[curR][curC + 1], field[curR][curC]
                    curC = curC + 1
        # 포탄 발사
        else :









