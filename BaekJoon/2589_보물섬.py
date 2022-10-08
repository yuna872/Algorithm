def dfs(i, j, depth):
    global maxV

    if maxV < depth:
        maxV = depth

    for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
        ni, nj = i+di, j+dj
        if 0 <= ni < N and 0 <= nj < M and not visited[ni][nj] and island[ni][nj] != 'W':
            # print(ni, nj)
            visited[ni][nj] = 1
            dfs(ni, nj, depth+1)
            visited[ni][nj] = 0

    return

N, M = map(int, input().split())

island = [list(input()) for _ in range(N)]
# print(island)

visited = [[0] * M for _ in range(N)]
maxV = 0
for i in range(N):
    for j in range(M):
        # 육지인 경우에 탐색

        if island[i][j] == 'L':

            visited[i][j] = 1
            dfs(i, j, 0)

print(maxV + 1)
# print(maxV)