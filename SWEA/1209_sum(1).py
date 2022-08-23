for test_case in range(1, 11):
    testN = int(input())

    arr = [list(map(int, input().split())) for _ in range(100)]
    maxV = 0

    # 행, 열의 합
    for i in range(100):
        # 행의 합
        sumV1 = 0
        for j in range(100):
            sumV1 += arr[i][j]

        if sumV1 > maxV:
            maxV = sumV1

    for i in range(100):
        # 열의 합
        sumV2 = 0
        for j in range(100):
            sumV2 += arr[j][i]

        if sumV2 > maxV:
            maxV = sumV2

    sumV3 = 0
    for i in range(100):
        sumV3 += arr[i][i]

    if sumV3 > maxV:
        maxV = sumV3

    sumV4 = 0
    for i in range(100):
        sumV4 += arr[i][100-i-1]

    if sumV4 > maxV:
        maxV = sumV4

    print(f'#{test_case} {maxV}')


