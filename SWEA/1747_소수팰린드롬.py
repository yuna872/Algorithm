import sys

def prime(n):
    a = [False, False] + [True] * (n - 1)
    primes = []

    for i in range(2, n + 1):
        if a[i]:
            primes.append(i)
            for j in range(2 * i, n + 1, i):
                a[j] = False
    return a[n]

N = int(sys.stdin.readline())

while True:
    if str(N) == str(N)[::-1]:
        if prime(int(N)):
            print(N)
            break

    N += 1


