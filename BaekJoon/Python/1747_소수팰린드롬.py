import sys

n = 1004000
a = [False, False] + [True] * (n - 1)

for i in range(2, int(n**0.5) + 1):
    if a[i]:
        for j in range(2 * i, n + 1, i):
            a[j] = False


N = int(sys.stdin.readline())

for i in range(N,n+1):
    if str(i) == str(i)[::-1]:
        if a[i]:
            print(i)
            break


