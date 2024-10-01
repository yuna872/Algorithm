N, M = map(int, input().split())

A = list(map(int, input().split()))

m = 0
while m < M:

    A.sort()

    sumV = sum(A[:2])

    for i in range(2):
        A[i] = sumV

    m += 1

print(sum(A))