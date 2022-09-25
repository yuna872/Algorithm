import sys
sys.stdin = open('1267_input.txt', 'r')

def bfs(v):
    Q = []

    Q.append(v)
    visited[v] = 1
    res.append(v)

    while Q :
        v = Q.pop(0)

        for t in G[v]:
            check = 1
            for p in P[t]:
                if not visited[p]:
                    check = 0
                    break

            # 앞선 작업을 다 수행한 상황이면 다음 노드로
            if check and visited[t] == 0:
                Q.append(t)
                visited[t] = 1
                res.append(t)


for test_case in range(1, 11):
    V, E = map(int, input().split())
    G = [[] for _ in range(V + 1)]
    P = [[] for _ in range(V + 1)]

    # 방문하는
    visited = [0] * (V + 1)

    lst = list(map(int, input().split()))

    # 인접그래프 그리기
    for i in range(0, len(lst), 2):
        # 그래프 저장
        G[lst[i]].append(lst[i+1])
        # 부모노드
        P[lst[i+1]].append(lst[i])

    res = []
    for i in range(1, len(P)):
        if len(P[i]) == 0:
            bfs(i)

    print(f'#{test_case}', end = ' ')
    print(*res)


