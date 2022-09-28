from collections import deque

T = int(input())

def bfs(v):
    dq = deque()

    dq.append(v)
    visited[v] = 1

    while dq:
        v = dq.popleft()

        if v == M:
            return

        for i in [v+1, v-1, v*2, v-10]:
            if 0 < i < 1000001 and not visited[i]:
                dq.append(i)
                visited[i] = visited[v] + 1



for test_case in range(1, T+1):
    N, M = map(int, input().split())
    visited = [0] * 1_000_001

    bfs(N)

    print(f'#{test_case} {visited[M]-1}')

