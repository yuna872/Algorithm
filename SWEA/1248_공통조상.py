import sys
sys.stdin = open('1248_input.txt', 'r')

def subtreeCnt(n):
    global cnt

    # 노드가 존재하지 않으면 아무것도 리턴하지 않음
    if n == 0:
        return
    cnt += 1

    subtreeCnt(c1[n])
    subtreeCnt(c2[n])

T = int(input())

for test_case in range(1, T+1):
    V, E, n1, n2 = map(int, input().split())

    # '부모 자식' 순서로 표현된 간선
    lst = list(map(int, input().split()))

    # 자식노드 저장
    c1 = [0] * (V + 1)
    c2 = [0] * (V + 1)

    # 부모노드 저장
    par = [0] * (V+1)

    for i in range(0, len(lst), 2):
        if c1[lst[i]] == 0:
            c1[lst[i]] = lst[i+1]
        else:
            c2[lst[i]] = lst[i + 1]

        # 자식노드의 부모노드 인덱스 저장
        par[lst[i+1]] = lst[i]

    # n1의 부모노드 추척
    p1 = []
    while 1 < n1:
        p1.append(par[n1])
        n1 = par[n1]

    # n2의 부모노드 추적,,하면서 가장 가까운 공통조상 찾으면 그만..
    common = 0
    while 1 < n2:
        if par[n2] in p1:
            common = par[n2]
            break
        else:
            n2 = par[n2]

    # 서브트리의 개수 구하기
    cnt = 0
    subtreeCnt(common)

    print(f'#{test_case} {common} {cnt}')


