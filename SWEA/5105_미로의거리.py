# import sys
# sys.stdin = open('5015_input.txt')

def bfs(i, j, N):
    global minV
    visited = [[0]*N for _ in range(N)]
    Q = []

    # 첫째 노드 방문하기
    Q.append((i, j))
    visited[i][j] = 1

    while Q:
        i, j = Q.pop(0)
        # 노드에 방문해서 할일 -> visit(v)
        # 이 문제에서는 현재 노드가 3번인지 확인 해야함

        if maze[i][j] == 3:
            return visited[i][j]
        for di, dj in [[0, 1], [1, 0], [-1, 0], [0, -1]]:
            ni, nj = i+di, j+dj
            # 인덱스를 벗어나지 않고 벽(1)이 아니며 방문한 적이 없는 노드이면
            if 0 <= ni < N and 0 <= nj < N and maze[ni][nj] != 1 and visited[ni][nj] == 0:
                Q.append((ni, nj))
                visited[ni][nj] = visited[i][j] + 1
    return 0


T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    maze = [list(map(int, input())) for _ in range(N)]
    minV = 9999999

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

    # 시작점 끝점 제외해주기,
    if bfs(sti, stj, N) == 0:
        print(f'#{test_case} {bfs(sti, stj, N)}')
    else:
        print(f'#{test_case} {bfs(sti, stj, N)-2}')
