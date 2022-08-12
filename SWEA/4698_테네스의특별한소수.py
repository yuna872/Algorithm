# 에라토스테네스의 체
# 다시 구하지 않고 한번만 만들어서 사용하자
n = 1000000
primes = [False, False] + [True] * (n-1)

for i in range(2, int(n ** 0.5) + 1):
    if primes[i]:
        for j in range(2 * i, n + 1, i):
            primes[j] = False

T = int(input())

for test_case in range(1, T+1):
    D, A, B = map(int, input().split())
    cnt = 0

    for i in range(A, B+1):
        if primes[i] and str(D) in str(i):
            cnt += 1

    print(f'#{test_case} {cnt}')

