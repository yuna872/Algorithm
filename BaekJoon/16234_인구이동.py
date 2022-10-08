from collections import deque

def bfs(i, j):
    dq = deque()

    dq.append((i, j))
    visited[i][j] = 1

    # 모든 연합 국가를 담을 배열
    U = [(i, j)]
    sumV = arr[i][j]


    while dq:
        i, j = dq.popleft()

        # 상하좌우 탐색하기
        for di, dj in [(0, 1), (1, 0), (-1, 0), (0, -1)]:
            ni, nj = i + di, j + dj

            # 범위 밖을 나가지 않고,
            if 0 <= ni < N and 0 <= nj < N and visited[ni][nj] == 0:
                # L <= 인구 수의 차이 <=R 인 경우
                if L <= abs(arr[i][j]-arr[ni][nj]) <= R:
                    # 방문처리
                    visited[ni][nj] = 1
                    dq.append((ni, nj))

                    # 연합 국가에 추가해주기
                    U.append((ni, nj))

                    # 인구 이동을 위한 인구의 합
                    sumV += arr[ni][nj]

    '''
    이미 방문 했지만 어느 국경선도 열리지 않은 경우(= 연합국가의 수가 1)에는 
    visited를 2로 변경해 주어야 같은 날 밤 또 방문하지 않음
    '''
    if len(U) == 1:
        visited[i][j] = 2
    else:
        # 국경선이 열린 부분에 대한 인구를 이동시켜줌
        for x, y in U:
            # 인구이동 sumV // 연합국가의 수
            arr[x][y] = sumV//len(U)
    return


N, L, R = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]
day = 0

while True:
    visited = [[0] * N for _ in range(N)]
    check = 1

    # 이중 포문을 다 수행해야 하루가 지난 것!
    for i in range(N):
        for j in range(N):
            # 정말정말 방문하지 않은 경우에 탐색하러 가기
            if not visited[i][j]:
                bfs(i, j)

    # 하루가 다 지나고 나서 어느 국경선도 열리지 않은 경우에는 check = 1로 변경
    for i in range(N):
        for j in range(N):
            if visited[i][j] != 2:
                check = 0

    if check:
        break

    day += 1





print(day)


