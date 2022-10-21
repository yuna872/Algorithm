def rollDice(m):
    a, b, c, d, e, f = dice
    # 동
    if m == 1:
        return
    if m == 2 :
        return [d, b, c, f, a, e]

    # 서

    # 남
    # 북




    return

N, M, x, y, K = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(N)]
move = list(map(int, input().split()))

# 1번 부터 동, 서, 북, 남
D = [(), (0, 1), (0, -1), (-1, 0), (1, 0)]
dice = [0] * 6



