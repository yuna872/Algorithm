from collections import deque

N, M, K = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]

TREE = [[[] for _ in range(N)] for _ in range(N)]
for _ in range(M):
    # 나무의 위치 (x, y)와 나이 z
    x, y, z = map(int, input().split())

    TREE[x-1][y-1].append(z)

# 양분이 담긴 배열
nutri = [[5] * N for _ in range(N)]

# grow(0)

year = 0
while year < K:
    for i in range(N):
        for j in range(N):
            if TREE[i][j] != []:
                TREE[i][j].sort()

                # 봄
                for idx in range(len(TREE[i][j])):
                    old = TREE[i][j][idx]
                    # 나무가 살아있는지 확인
                    if TREE[i][j][idx] <= 0:
                        continue
                    # 양분을 먹을 수 있는 조건이라면
                    if nutri[i][j] >= old:
                        # 양분 먹기
                        nutri[i][j] -= old
                        # 나이도 먹기
                        TREE[i][j][idx] += 1
                    else:
                        # 여름
                        # 죽은 나무에 추가하기
                        nutri[i][j] += old//2
                        # 나이를 0으로 변경 (죽음)
                        TREE[i][j][idx] = 0

    # 가을
    for i in range(N):
        for j in range(N):
            for t in TREE[i][j]:
                if t > 0 and t % 5 == 0:
                    for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]:
                        nx, ny = i + dx, j + dy
                        # 상도의 땅을 벗어나지 않는 경우에
                        if 0 <= nx < N and 0 <= ny < N:
                            # 나이가 1인 나무가 생김
                            TREE[nx][ny].append(1)

            # 겨울
            nutri[i][j] += arr[i][j]

    year += 1

cnt = 0
for i in range(N):
    for j in range(N):
        cnt += ( len(TREE[i][j]) - TREE[i][j].count(0))
print(cnt)