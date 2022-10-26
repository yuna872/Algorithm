N = int(input())

arr = []
for _ in range(N):
    arr.append(int(input()))
arr.sort()
p = [i for i in range(1, N+1)]

sumV = 0
for i in range(N):
    sumV += abs(p[i]-arr[i])
print(sumV)


