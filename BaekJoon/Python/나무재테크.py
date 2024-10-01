N, M, K = map(int, input().split())

# 겨울에 줄 양분 배열
arr = [list(map(int, input().split())) for _ in range(N)]

TREE = [[[] for _ in range(N)] for _ in range(N)]
for _ in range(M):
    # 나무의 위치 (x, y)와 나이 z
    x, y, z = map(int, input().split())
    TREE[x-1][y-1].append(z)

# 양분이 담긴 배열
nutri = [[5] * N for _ in range(N)]


for _ in range(K):
    for i in range(N):
        for j in range(N):
            if TREE[i][j]:
                # 나이가 어린 나무 부터 양분을 먹자
                TREE[i][j].sort()

                # 봄
                live, dead = [], 0
                for old in TREE[i][j]:
                    # 양분을 먹을 수 있는 조건이라면
                    if nutri[i][j] >= old:
                        # 양분 먹기
                        nutri[i][j] -= old
                        # 나이도 먹기
                        old += 1
                        live.append(old)
                    else:
                        # 여름
                        # 죽은 나무는 양분이된다
                        dead += old//2
                # 양분을 다 먹고 죽은 나무가 여름에 양분이 된다. for문 이후에 양분으로 추가해주기
                nutri[i][j] += dead

                TREE[i][j].clear()
                TREE[i][j].extend(live)

    # 가을
    for i in range(N):
        for j in range(N):
            for t in TREE[i][j]:
                if t % 5 == 0:
                    for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]:
                        ni, nj = i + di, j + dj
                        # 상도의 땅을 벗어나지 않는 경우에
                        if 0 <= ni < N and 0 <= nj < N:
                            # 나이가 1인 나무가 생김
                            TREE[ni][nj].append(1)
            # 겨울
            nutri[i][j] += arr[i][j]

cnt = 0
for i in range(N):
    for j in range(N):
        cnt += len(TREE[i][j])

print(cnt)