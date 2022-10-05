
import sys
sys.stdin = open('1251_input.txt', 'r')

def prim():
    visited = [False for _ in range(N)]

    # 최소 비용을 담을 배열
    D = [1e10] * N

    # 첫번째 원소를 선택할 수 있도록
    D[0] = 0

    for _ in range(N):
        minV = 1e10
        for i in range(N):
            if visited[i]: continue
            if minV > D[i]:
                minV = D[i]
                curV = i

        visited[curV] = True

        for i in range(N):
            if visited[i]: continue
            if G[curV][i] and D[i] > G[curV][i]:
                D[i] = G[curV][i]
    return D


T = int(input())

for test_case in range(1, T+1):
    # 섬의 개수
    N = int(input())

    X = list(map(int, input().split()))
    Y = list(map(int, input().split()))
    E = float(input())

    G = [[0] * N for _ in range(N)]

    for i in range(N):
        for j in range(N):
            d = ((X[i]-X[j])**2 + (Y[i]-Y[j]) ** 2) ** 0.5
            G[i][j] = d
            G[j][i] = d

    # print(G)
    l = prim()
    res = round(sum(list(map(lambda x:x**2 * E, l))))
    print(f'#{test_case} {res}')




