import sys
sys.stdin = open('2105_input.txt', 'r')

D = [(1, 1), (1, -1), (-1, -1), (-1, 1)]

def solve(n, r, c, d):
    global maxV

    if d == 3 and stR == r and stC == c:
        if maxV < n:
            maxV = n
        return

    if 0 > r or 0 > c or N <= r or N <= c or dessert[r][c] in result[:n]:
        return

    # 디저트 정보 저장
    result[n] = dessert[r][c]

    newR, newC = r + D[d][0], c + D[d][1]
    solve(n+1, newR, newC, d)

    # 방향 전환
    d = (d+1) % 4
    newR, newC = r + D[d][0], c + D[d][1]
    solve(n+1, newR, newC, d)

    # 다시 시작 좌표에 돌아왔을때

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    dessert = [list(map(int, input().split())) for _ in range(N)]
    maxV = 0

    for r in range(N):
        for c in range(N):
            stR, stC = r, c
            d = 0
            result = [-1] * (4*N)
            solve(0, r, c, d)

    if maxV:
        print(f'#{test_case} {maxV}')
    else:
        print(f'#{test_case} -1')