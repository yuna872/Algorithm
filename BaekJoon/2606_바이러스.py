# 노드의 갯수
N = int(input())

E = int(input())
G = [[] for _ in range(N+1)]

# 인접 리스트 생성하기
for e in range(E):
    p1, p2 = map(int, input().split())

    # 양방향 그래프
    G[p1].append(p2)
    G[p2].append(p1)

def dfs(v):
    visited = [False] * (N+1)
    stack = []

    visited[v] = True
    stack.append(v)

    while stack:
        v = stack.pop()
        for w in G[v]:
            if visited[w] == False:
                stack.append(w)
                v = w
                visited[w] = True
    cnt = -1
    for v in visited:
        if v == True:
            cnt += 1

    return cnt

print(dfs(1))



