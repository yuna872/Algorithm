def dfs(v, midSum):
    global minV

    if v == e:
        if minV > midSum:
            minV = midSum
        return
    else:
        for i in tree[v]:
            if not visited[i]:
                visited[i] = 1
                dfs(i, midSum + L[v][i])
                visited[i] = 0

N, M = map(int, input().split())

L = [[0] * (N+1) for _ in range(N+1) ]

tree = [[] for _ in range(N+1)]
for _ in range(N-1):
    v1, v2, l = map(int, input().split())

    tree[v1].append(v2)
    tree[v2].append(v1)

    L[v1][v2] = l
    L[v2][v1] = l


for _ in range(M):
    visited = [0] * (N+1)
    minV = 1e9
    s, e = map(int, input().split())

    dfs(s, 0)
    print(minV)

