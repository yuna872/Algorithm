import sys
sys.stdin = open('5209_input.txt', 'r')

T = int(input())

def f(i, k, midSum):
    global minV

    if midSum > minV:
        return

    # 깊이가 k이면 리턴
    if i == k:
        if midSum < minV:
            minV = midSum
        return
    else:
        for j in range(i, k):
            res[i], res[j] = res[j], res[i]
            f(i+1, k, midSum + ARR[i][res[i]])
            # 다시 복원시켜 주기
            res[i], res[j] = res[j], res[i]

for test_case in range(1, T+1):
    N = int(input())

    ARR = [list(map(int, input().split())) for _ in range(N)]
    res = [i for i in range(N)]

    minV = 9999999999
    sumV = 0

    f(0, N, 0)

    print(f'#{test_case} {minV}')