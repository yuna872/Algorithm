for test_case in range(1, 11):
    TC = int(input())
    Q = list(map(int, input().split()))

    n = 1
    while Q[-1] > 0:
        tmp = Q.pop(0)
        if tmp - n < 0:
            Q.append(0)
        else:
            Q.append(tmp - n)
        if n == 5:
            n = 1
        else:
            n += 1

    print(f'#{test_case}', end=' ')
    for n in Q:
        print(n, end=' ')
    print()
