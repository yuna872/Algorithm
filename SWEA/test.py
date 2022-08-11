a = [False, False] + [True] * (1000000-1)
primes = []
for i in range(2, 1000000+1):
    if a[i]:
        primes.append(i)
        for j in range(2*i, 1000000+1, i):
            a[j] = False

n = int(input())

for i in primes:
    lst = []
    if i >= 10 and i >= n:
        for j in str(i):
            lst.append(j)
        if lst == lst[::-1]:
            print(i)
            break