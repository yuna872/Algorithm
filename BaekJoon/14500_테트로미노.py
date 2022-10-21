def dfs(i, j, depth, midSum):
    global maxV

    # 백트래킹 - 아무리 큰 수가 앞으로 더해지더라도 maxV 보다 작은 경우에는 리턴
    if depth < 3:
        if maxV > midSum + best*(3-depth):
            return

    # 테트로미노 완성되었을 때
    if depth == 3:
        # 최대합 갱신해주기
        if midSum > maxV:
            maxV = midSum
    else:
        depth += 1
        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < M and not visited[ni][nj]:
                # 방문처리 해주기
                visited[ni][nj] = 1

                # 뽁큐 모양 탐색하기 위해서 제자리에서 3 방향 더 탐색하기
                dfs(i, j, depth, midSum + board[ni][nj])

                # 뽁큐를 제외한 나머지 테트로미노 탐색
                dfs(ni, nj, depth, midSum + board[ni][nj])

                # 다음 탐색을 위해서 visited 원복 시켜주기
                visited[ni][nj] = 0
    return

N, M = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(N)]
visited = [[0]*M for _ in range(N)]

# 이차원 배열의 최대값 구하기 - 백트래킹
best = 0
for arr in board:
    best = max(max(arr), best)

maxV = 0
for i in range(N):
    for j in range(M):
        # 시작 인덱스 방문처리 해주기
        visited[i][j] = 1
        # 처음 midSum 값은 시작인덱스의 값
        dfs(i, j, 0, board[i][j])
        visited[i][j] = 0

print(maxV)