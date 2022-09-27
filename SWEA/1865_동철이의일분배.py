import sys
sys.stdin = open('1865_input.txt', 'r')

T = int(input())

def f(i, k, p):
    global maxV

    if i == k:
        if maxV < p:
            maxV = p
        return

    if p == 0 or p < maxV:
        return

    for j in range(i, N):
        # if p * P[i][res[j]] / 100 < maxV:
        #     continue
        res[i], res[j] = res[j], res[i]
        f(i+1, k, p * P[i][res[i]])
        res[i], res[j] = res[j], res[i]


for test_case in range(1, T+1):
    N = int(input())

    P = [list(map(int, input().split())) for _ in range(N)]
    res = [i for i in range(N)]

    for i in range(N):
        for j in range(N):
            P[i][j] /= 100

    maxV = 0
    f(0, N, 1)
    print(f'#{test_case} %.6f' % round(maxV*100, 6))