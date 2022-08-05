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

    if N == 0 :
        break

    print(isprime(2*N)[N+1:2*N+1].count(True))
        