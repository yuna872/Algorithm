# import sys
# sys.stdin = open('1219_input.txt', 'r')

def dfs(v):
    visited = [False] * 100
    ST = []

    ST.append(v)
    visited[v] = True

    while ST:
        v = ST.pop()
        for w in G[v]:
            if visited[w] == False:
                ST.append(w)
                v = w
                visited[w] = True

    return visited[99]


for test_case in range(1,11):
    numT, roads = map(int, input().split())


    G = [[] for _ in range(100)]
    # G1 = [''] * 100
    # G2 = [''] * 100
    inputV = list(map(int, input().split()))

    # 인접리스트 만들기
    for i in range(0, len(inputV), 2):
        G[inputV[i]].append(inputV[i + 1])

    # print(G)

    # # 인접리스트 만들기
    # for i in range(0, len(inputV), 2):
    #     # 단방향 그래프
    #     # G1에 데이터가 입력되기 전이라면 G1에 데이터 넣기
    #     if G1[inputV[i]] == '':
    #         G1[inputV[i]] = inputV[i+1]
    #     # 이미 있으면 G2에 넣기
    #     else:
    #         G2[inputV[i]] = inputV[i+1]

    if dfs(0) == True:
        print(f'#{numT} 1')
    else:
        print(f'#{numT} 0')
    # print(dfs(0))













