T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    inputV = list(map(int, input().split()))
    cheeze = [(i+1, inputV[i]) for i in range(M)]
    print(cheeze)

    Q = []
    Q.append(cheeze[0])

    while Q:
        num, c = cheeze.pop(0)
        if c // 2 > 0:
            Q.append([num, c // 2])
        print(cheeze)

    print(cheeze[0][0])

