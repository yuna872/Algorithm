import sys
input = sys.stdin.readline

N, M = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]

for i in range(N):
    for j in range(N):
        if 0 <= i-1 < N and 0 <= j-1 < N:
            arr[i][j] -= arr[i-1][j-1]
        if 0 <= i-1 < N:
            arr[i][j] += arr[i-1][j]
        if 0 <= j-1 < N:
            arr[i][j] += arr[i][j - 1]
print(arr)

for m in range(M):
    x1, y1, x2, y2 = map(int, input().split())

    result = arr[x2-1][y2-1]
    if 0 <= y1 - 2 < N:
        result -= arr[x2-1][y1-2]
    if 0 <= x1 - 2 < N:
        result -= arr[x1-2][y2-1]
    if 0 <= y1 - 2 < N and 0 <= x1 - 2 < N:
        result += arr[x1-2][y1-2]

    print(result)
