import sys
sys.stdin = open('2468_input.txt', 'r')

def bfs(i, j):
    Q = []
    cnt = 1

    Q.append((i, j))
    visited[i][j] = 1

    while Q:
        # pop(0) 까먹지 말자,,,
        i, j = Q.pop(0)

        for di, dj in d:
            ni = i + di
            nj = j + dj
            # 안전 영역일때만 방문하기
            if 0 <= ni < N and 0 <= nj < N and arr[ni][nj] > h and visited[ni][nj] == 0:
                Q.append((ni, nj))
                visited[ni][nj] = 1
                cnt += 1
    return cnt


N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]
d = [[0, 1], [0, -1], [1, 0], [-1, 0]]

# 지역의 최대 높이 구하기
maxV = 0
for i in range(N):
    for j in range(N):
        if arr[i][j] > maxV:
            maxV = arr[i][j]

ans = []
for h in range(maxV+1):
    visited = [[0] * N for _ in range(N)]
    res = []

    for i in range(N):
        for j in range(N):
            # 강수량보다 높다면 안전 영역 -> 탐색
            if arr[i][j] > h and visited[i][j] == 0:
                res.append(bfs(i, j))

    # 영역의 개수를 구하는 것이므로 len값을 따로 저장해 두자.
    ans.append(len(res))

# 안전 영역의 최대 개수
print(max(ans))