import sys

sys.stdin = open('1267_input.txt', 'r')

for test_case in range(1, 11):
    V, E = map(int, input().split())
    G = [[] for _ in range(V + 1)]

    lst = list(map(int, input().split()))

    # 인접그래프 그리기
    for i in range(0, len(lst), 2):
        # 백트래킹 할거라서 화살표 방향은 반대로 저장
        G[lst[i + 1]].append(lst[i])

    print(G)
