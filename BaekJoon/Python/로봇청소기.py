D = [(-1, 0), (0, 1), (1, 0), (0, -1)]

N, M = map(int, input().split())

i, j, d = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]

# 현재 자리 청소하기
visited[i][j] = 1
cnt = 1

while 1:

    # 4방향 회전
    check = 0
    for _ in range(4):
        ni = i + D[(d+3) % 4][0]
        nj = j + D[(d+3) % 4][1]

        d = (d+3) % 4
        # 청소하지 않은 공간이 존재한다면
        if not visited[ni][nj] and arr[ni][nj] == 0:
            # 한 칸 전진
            i, j = ni, nj
            # 청소 횟수 추가
            cnt += 1
            check = 1
            visited[i][j] = 1
            break

    # 네 방향 모두 청소가 되어있거나 벽인 경우
    if not check:
        # 후진했을때 벽인 경우
        if arr[i-D[d][0]][j-D[d][1]] == 1:
            print(cnt)
            break
        else:
            # 후진했을 때 벽이 아닌 경우에는 후진만 한다
            i, j = i - D[d][0], j - D[d][1]






