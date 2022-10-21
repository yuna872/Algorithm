def rollDice(m):
    a, b, c, d, e, f = dice
    # 동
    if m == 1:
        return [e, b, c, a, f, d]
    if m == 2 :
        return [d, b, c, f, a, e]
    if m == 3:
        return [b, f, a, d, e, c]
    if m == 4:
        return [c, a, f, d, e, b]

def solve(x, y):
    for m in move:
        dice = rollDice(m)
        print(dice[0])
        if dice
    return

N, M, x, y, K = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(N)]
move = list(map(int, input().split()))

# 1번 부터 동, 서, 북, 남
D = [(), (0, 1), (0, -1), (-1, 0), (1, 0)]
dice = [0] * 6



