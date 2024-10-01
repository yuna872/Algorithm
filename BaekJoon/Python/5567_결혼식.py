from collections import deque

def bfs(v):
    visited = [0] * (N+1)

    dq = deque()
    dq.append((v, 0))
    visited[v] = 1
    res = 0

    while dq:
        t, cnt = dq.popleft()
        for i in friends[t]:
            if not visited[i] and cnt < 2:
                visited[i] = 1
                dq.append((i, cnt+1))
                res += 1

    return res

# 상근이의 동기 수
N = int(input())

# 리스트의 길이
M = int(input())

friends = [[] * (N+1) for _ in range(N+1) ]
for _ in range(M):
    a, b = map(int, input().split())
    friends[a].append(b)
    friends[b].append(a)


res = bfs(1)
print(res)


