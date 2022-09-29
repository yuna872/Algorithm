import sys
sys.stdin = open('1795_input.txt', 'r')

def dij(N, X, adj, d):

    # d 초기화
    for i in range(N+1):
        d[i] = adj[X][i]

    U = [X]

    for _ in range(N-1):      # N개의 정점 중 출발을 제외한 정점 선택
        w = 0
        for i in range(1, N+1):
            # 아직 들어있지 않은 애 중에 비용이 최소인 친구
            if (i not in U) and d[i] < d[w]: # 남은 노드 중 비용이 최소인 w
                w = i

        U.append(w)

        for v in range(1, N+1):            # 정점 v가
            if 0 < adj[w][v] < 100_000:    # w에 인접이면
                d[v] = min(d[v], d[w] + adj[w][v])

    return adj1


T = int(input())
T = 1
for test_case in range(1, T+1):
    N, M, X = map(int, input().split())

    # 돌아가는 것
    adj1 = [[100_000]*(N+1) for _ in range(N+1)]

    # 자기 자신으로 가는 가중치는 0으로 초기화
    for i in range(N+1):
        adj1[i][i] = 0

    for _ in range(M):
        x, y, c = map(int, input().split())
        # 각 집으로 가는 비용 저장
        adj1[x][y] = c

    # 인수의 집에서 다른 집으로 가는 비용
    dout = [0] * (N + 1)
    # 다른 집에서 인수의 집으로 가는 비용
    din = [0] * (N + 1)
    print(dij(N, X, adj1, dout))
    print(dout)

