# 미로 최단거리
'''
깊이 우선으로 구현할 경우에는 최단 거리를 구하기 위해서 모든 경로를 찾아야 한다.
-> 다 구하기 전까지는 최단이라는 사실이 보장이 안되는것 같네,,,뭐,, 당욘한거겟지

최단거리 찾기
-> 이전까지 지나온 칸수 + 1하면서 구해주기
'''
def dfs(i, j ,N):
    # 3에 도착하는 개수 = 경로의 개수
    if maze[i][j] == 3:
        return
    else:
        visited[i][j] = 1
        for di, dj in [[0, 1], [1, 0], [-1, 0], [0, -1]]:
            ni, nj = i + di, j + dj
            # 인덱스를 벗어나지 않고 벽(1)이 아니며 방문한 적이 없는 노드이면
            if 0 <= ni < N and 0 <= nj < N and maze[ni][nj] != 1 and visited[ni][nj] == 0:
                dfs(ni, nj, N)
        # 방문여부 다시 지워줘야해,,,
        visited[i][j] = 1
        return

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    maze = [list(map(int, input())) for _ in range(N)]

    sti = -1
    stj = -1

    # 시작점 찾기
    for i in range(N):
        for j in range(N):
            if maze[i][j] == 2:
                sti = i
                stj = j
                break
        if sti != -1:
            break

    visited = [[0]*N for _ in range(N)]
    dfs(sti, stj, N)
