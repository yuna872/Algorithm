from collections import deque

def bfs():
    cnt = 0
    dq = deque()
    visited = [[0] * M for _ in range(N)]

    dq.append((0, 0))
    visited[0][0] = 1

    while dq:
        i, j = dq.popleft()

        for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            ni, nj = i+di, j+dj
            if 0 <= ni < N and 0 <= nj < M and not visited[ni][nj]:
                if cheeze[ni][nj] == 1:
                    cheeze[ni][nj] = 0
                    cnt += 1
                else:
                    dq.append((ni, nj))

                visited[ni][nj] = 1

    day.append(cnt)
    return cnt


# 세로 : N, 가로 : M
N, M = map(int, input().split())

cheeze = [list(map(int, input().split())) for _ in range(N)]
day = []

ans = 0
while True:
    rest = bfs()

    if rest == 0:
        break

    ans += 1

print(ans)
print(day[-2])
