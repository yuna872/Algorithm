# 에라토스테네스의 체
def isprime(n):
    a = [False,False] + [True]*(n-1)
    primes=[]

    for i in range(2,n+1):
        if a[i]:
            primes.append(i)
            for j in range(2*i, n+1, i):
                a[j] = False
    return a

while True:
    N = int(input())
    count = 0

    # 0일때 탈출
    if N == 0 :
        break

    # N초과 2N 이하 범위의 소수 카운트
    print(isprime(2*N)[N+1:2*N+1].count(True))
        