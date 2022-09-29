import sys
sys.stdin = open('5249_input.txt', 'r')

def prim():
    # 노드를 방문하는 순서
    U = []
    # 선택된 최소 가중치
    D = [10000] * (V+1)

    # 첫번째 원소를 선택할 수 있도록
    D[0] = 0

    while len(U) < (V+1):
        minV = 10000
        for i in range(V+1):
            if i in U : continue
            if minV > D[i]:
                minV = D[i]
                curV = i

        U.append(curV)

        for i in range(V+1):
            if i in U : continue
            if G[curV][i] and D[i] > G[curV][i]:
                D[i] = G[curV][i]

    return sum(D[1:])


T = int(input())

for test_case in range(1, T+1):
    V, E = map(int, input().split())

    G = [[0] * (V+1) for _ in range(V+1)]

    for _ in range(E):
        n1, n2, w = map(int, input().split())

        G[n1][n2] = w
        G[n2][n1] = w

    print(f'#{test_case} {prim()}')