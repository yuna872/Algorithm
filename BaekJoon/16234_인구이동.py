from collections import deque

def bfs(i, j):
    dq = deque()

    dq.append((i, j))
    visited[i][j] = n
    cnt = 1
    sumV = arr[i][j]

    while dq:
        i, j = dq.popleft()

        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < N and not visited[ni][nj] and L <= abs(arr[ni][nj]-arr[i][j]) <= R:
                visited[ni][nj] = n
                dq.append((ni, nj))
                cnt += 1
                sumV += arr[ni][nj]

    for i in range(N):
        for j in range(N):
            if visited[i][j]:
                arr[i][j] = sumV // cnt


def check(arr1, arr2):
    for i in range(N):
        for j in range(N):
            if L <= abs(arr1[i][j] - arr2[i][j]) <= R:
                return False
    return True


N, L, R = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]

ans = 0
flag = 0
n = 1
while flag == 0:
    ans += 1
    tmp = arr
    for i in range(N):
        for j in range(N):
            n += 1
            visited = [[0] * N for _ in range(N)]
            bfs(i, j)

    if check(tmp, arr):
        flag = 1
        break

print(ans)



