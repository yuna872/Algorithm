import sys
sys.stdin = open('16236_input.txt', 'r')

N = int(input())

def bfs(i, j):
    # 아기상어 사이즈
    size = 2
    second = 0
    cnt = 2

    Q = []

    Q.append((i, j))

    while Q:
        curR, curC = Q.pop(0)

        for dR, dC in d:
            newR, newC = curR+dR, curC+dC

            if 0 <= newR < N and 0 <= newC < N and sea[newR][newC] <= size and visited[newR][newC] == 0:
                Q.append((newR, newC))
                # 크기가 작은 물고기를 만났을때 먹자
                if sea[newR][newC] < size:
                    visited[newR][newC] = 1
                    if sea[newR][newC] == 0:
                        # 성장하기까지 남은 물고기
                        cnt -= 1
                        # 물고기는 먹으면 사라져
                        sea[newR][newC] = 0
                        if cnt == 0:
                            size += 1
                            cnt = size
                # 이동시간 +1
                second += 1
    if size == 2:
        return 0
    else:
        return second

sea = [list(map(int, input().split())) for _ in range(N)]

# 상하좌우
d = [[-1, 0], [1, 0], [0, -1], [0, 1]]
visited = [[0]*N for _ in range(N)]

# 아기상어 시작위치
for i in range(N):
    for j in range(N):
        if sea[i][j] == 9:
            sea[i][j] = 0
            print(bfs(i, j))
            break