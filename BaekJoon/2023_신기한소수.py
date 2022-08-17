n = int(input())

# 에라토스테네스
isprime = [False, False] + [True]*(10**8-1)
primes = []

for i in range(2,10**8+1):
    if isprime[i] == True:
        primes.append(i)
        for j in range(2*i, 10**8+1, i):
            isprime[j] = False


# 신기한 숫자 판별
def singi(n):
    for i in range(10**(n-1),10**n):
        while i > 0:





