from collections import deque

def bfs(v):
    global maxV
    dq = deque()

    # 방문 처리, append((현재노드, 현재까지의 거리))
    dq.append((v, 0))
    visited[v] = 1

    while dq:
        node, dist = dq.popleft()

        # 최댓값 갱신해주기
        if dist > maxV :
            maxV = dist

        for next_node, next_dist in CITY[node]:
            # 이미 방문한 노드이면 continue
            if visited[next_node]:
                continue
            # 아니면 방문
            else:
                visited[next_node] = 1
                dq.append((next_node, dist+next_dist))
    return

# 입력이 있을 때 까지만 받기
inputV = []
while True:
    try:
        u, v, l = map(int, input().split())
        inputV.append((u, v, l))

    except:
        break

# 노드의 수 = 간선의 수 + 1
N = len(inputV) + 1

# 인접 리스트 CITY 선언
CITY = [[] for _ in range(10001)]
for a, b, c in inputV:
    CITY[a].append((b, c))
    CITY[b].append((a, c))

maxV = 0

# 모든 노드로부터 탐색 하기
for s in range(1, N+1):
    visited = [0] * (N+1)
    bfs(s)


print(maxV)


