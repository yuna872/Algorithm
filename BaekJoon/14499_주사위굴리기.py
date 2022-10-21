def rollDice(m):
    a, b, c, d, e, f = dice
    '''
    주사위 굴리기
    첫번째 원소 - 굴려진 주사위의 윗면
    마지막 원소 - 굴려진 주사위의 아랫면
    '''
    # 동
    if m == 1:
        return [d, b, c, f, a, e]
    # 서
    if m == 2 :
        return [e, b, c, a, f, d]
    # 북
    if m == 3:
        return [b, f, a, d, e, c]
    # 남
    if m == 4:
        return [c, a, f, d, e, b]


def solve(x, y):
    global dice

    for m in move:
        # 좌표 이동
        x += D[m][0]
        y += D[m][1]

        # 범위 안에 있을 때만 작업 수행, 아니면 무시하기
        if 0 <= x < N and 0 <= y < M:
            # 주사위 굴리기
            dice = rollDice(m)
            # 윗면의 값 출력
            print(dice[0])
            # 주사위를 굴렸을 때, 이동한 칸에 쓰여있는 수가 0이면
            if not board[x][y]:
                # 주사위의 바닥면이 칸에 복사된다.
                board[x][y] = dice[-1]
            else:
                # 주사위 아랫면에 복사하기
                dice[-1] = board[x][y]
                # 칸에 쓰여있는 수는 0이 된다.
                board[x][y] = 0
        # 범위 안에 있지 않은 경우에는 무시하기
        else:
            # 좌표 원래대로 돌려주기
            x -= D[m][0]
            y -= D[m][1]


    return

N, M, x, y, K = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(N)]
move = list(map(int, input().split()))

# 1번 부터 동, 서, 북, 남
D = [(), (0, 1), (0, -1), (-1, 0), (1, 0)]
# 주사위
dice = [0] * 6

solve(x, y)



