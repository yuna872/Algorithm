from collections import deque

# 모든 원소에 대해서 최단 거리 구하기
def bfs(curi, curj):
    dq = deque()
    visited = [[-1]*N for _ in range(N)]

    dq.append((curi, curj))
    visited[curi][curj] = 0

    while dq:
        i, j = dq.popleft()

        for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < N:
                # 아기상어보다 큰 물고기가 있는 영역은 지나갈 수 없어..
                if water[ni][nj] <= size and visited[ni][nj] == -1:
                    # 최단 거리를 구하기 위함 => 현재 원소의 visited = 이전 원소의 visited + 1
                    visited[ni][nj] = visited[i][j] + 1
                    dq.append((ni, nj))

    # 최단 경로의 정보가 담긴 배열 리턴하기
    return visited

def meal(visited):
    global size

    minD = 1e9
    x, y = -1, -1
    for i in range(N):
        for j in range(N):
            # 아기상어가 먹을 수 있는 크기인지 확인
            if 0 < water[i][j] < size and visited[i][j] != -1:
                # 현재 저장된 최단 거리보다 짧은 거리라면
                if visited[i][j] < minD:
                    minD = visited[i][j]
                    x, y = i, j

    return x, y, minD

N = int(input())
water = [list(map(int, input().split())) for _ in range(N)]

# 아기 상어가 출발하는 지점 찾기
for i in range(N):
    for j in range(N):
        if water[i][j] == 9:
            curi, curj = i, j
            water[curi][curj] = 0

# 상어의 크기
size = 2
# 먹은 물고기의 개수
cnt = 0
# 시간
time = 0
while True:
    # 현재 위치를 기준으로 모든 원소까지의 최단거리 구하기
    visited = bfs(curi, curj)
    # 물고기 먹기
    curi, curj, minD = meal(visited)

    # 탐색했을 때 최단 거리가 갱신된 적이 없다면 먹을 물고기가 없음
    if minD == 1e9:
        break
    else:
        # 먹은 물고기 처리해주기
        water[curi][curj] = 0
        # 물고기 수 카운트
        cnt += 1
        # 이동거리 = 몇초
        time += minD

        # 크기 만큼의 물고기를 먹었다면 아기 상어의 크기 +1
        if cnt >= size:
            cnt = 0
            size += 1

print(time)