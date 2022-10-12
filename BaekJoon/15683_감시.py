def solve(i, j, direction):
    global maxV
    cnt = 0

    for di, dj in direction:
        ni, nj = i + di, j + dj
        while 0 <= ni < N and 0 <= nj < N and arr[ni][nj] != 6 and not visited[ni][nj]:
            cnt += 1
            visited[ni][nj] = 1
            ni += di
            nj += dj

    if cnt > maxV:
        maxV = cnt

    return maxV

# 세로 크기 N, 가로 크기 M
N, M = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]
camera = 0


for i in range(N):
    for j in range(M):
        if arr[i][j] != 0:
            camera += 1
            if arr[i][j] != 6:
                type = arr[i][j]
                maxV = 0
                if type == 1:
                    for d in [[(0,1)], [(1, 0)], [(-1,0)], [(0, -1)]]:
                        tmp = visited
                        print(solve(i, j, d))
                        visited = tmp
                elif type == 5:
                    solve(i, j, [(0, 1), (1, 0), (-1, 0), (0, -1)])
                elif type == 2:
                    for d in [[(0,1), (0,-1)], [(1, 0), (-1, 0)]]:
                        tmp = visited
                        print(solve(i, j, d))
                        visited = tmp
                elif type == 3:
                    for d in [[(-1, 0), (0, 1)], [(0, 1), (1, 0)], [(1, 0),(0, -1)], [(0,-1), (-1, 0)]]:
                        tmp = visited
                        print(solve(i, j, d))
                        visited = tmp
                elif type == 4:
                    for d in [[(1, 0), (-1, 0), (0, 1)],[(-1,0), (0,-1),(1, 0)],[(0, -1), (-1, 0), (0, 1)],[(1, 0), (0, 1),(0, -1)]]:
                        tmp = visited
                        print(solve(i, j, d))
                        visited = tmp
print(N*M - maxV - camera)




