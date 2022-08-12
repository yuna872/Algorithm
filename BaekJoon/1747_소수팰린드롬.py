import sys

a = [False, False] + [True] * (1000000+1)

for i in range(2, int(1000000 ** 0.5) + 1):
    if a[i]:
        for j in range(2 * i, 1000000 + 1, i):
            a[j] = False

N = int(sys.stdin.readline())

while True:
    if N < 10:
        if a[N]:
            print(N)
            break
    else:
        if str(N) == str(N)[::-1]:
            if a[N]:
                print(N)
                break
    N += 1

# a = [False, False] + [True] * (1000000-1)
# primes = []
# for i in range(2, 1000000+1):
#     if a[i]:
#         primes.append(i)
#         for j in range(2*i, 1000000+1, i):
#             a[j] = False
#
# n = int(input())
#
# for i in primes:
#     lst = []
#     if i >= 10 and i >= n:
#         for j in str(i):
#             lst.append(j)
#         if lst[0:len(lst)//2] == lst[::-1][:len(lst)//2]:
#             print(i)
#             break


