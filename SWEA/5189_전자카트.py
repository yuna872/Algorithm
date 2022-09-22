import sys
sys.stdin = open('5189_input.txt', 'r')

T = int(input())

# k-> 원소의 개수, n -> 지금까지 선택된 원소의 개수
def perm(n, k):
    global sumV
    global minV

    if n == k:
        lst = [0] + p + [0]

        for i in range(len(lst)-1):
            sumV += arr[lst[i]][lst[i+1]]
        if sumV < minV:
            minV = sumV
        sumV = 0
        return
    else:
        for j in range(n, k):
            p[n], p[j] = p[j], p[n]
            perm(n+1, k)
            p[j], p[n] = p[n], p[j]


for test_case in range(1, T+1):
    N = int(input())

    arr = [list(map(int, input().split())) for _ in range(N)]

    p = [i for i in range(1, N)]
    sumV = 0
    minV = 99999999

    perm(0, N-1)
    print(f'#{test_case} {minV}')