for test_case in range(1,11):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]
    max_sumV = 0

    # 행
    for row in range(100):
        sumV = 0
        for col in range(100):
            sumV += arr[row][col]
        if sumV > max_sumV:
            max_sumV = sumV

    # 열
    for col in range(100):
        sumV = 0
        for row in range(100):
            sumV += arr[row][col]
        if sumV > max_sumV:
            max_sumV = sumV

    # 대각선
    sumV = 0
    for idx in range(100):
        sumV += arr[idx][idx]
    if sumV > max_sumV:
        max_sumV = sumV

    # 반대 방향 대각선
    sumV = 0
    for idx in range(100):
        sumV += arr[idx][100-idx-1]
    if sumV > max_sumV:
        max_sumV = sumV

    print(f'#{test_case} {max_sumV}')


