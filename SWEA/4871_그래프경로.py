def dfs(s, e):
    visited = [False] * (V+1)
    stack = []
    stack.append(s)

    visited[s] = True

    while stack:
        s = stack.pop()
        for w in G[s]:
            if visited[w] == False:
                stack.append(w)
                s = w
                visited[w] = True

    # print(visited)
    if visited[e] == True:
        return 1
    return 0

# 테스트 케이스 입력
T = int(input())

for test_case in range(1, T+1):
    V, E = map(int,input().split())
    G = [[] for _ in range(V+1)]

    # 인접 리스트 저장
    for e in range(E):
        p1, p2 = map(int, input().split())
        # 단방향 리스트
        G[p1].append(p2)

    # 출발노드, 도착노드 입력받기
    start, end = map(int, input().split())
    print(f'#{test_case} {dfs(start, end)}')



