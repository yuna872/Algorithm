T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    print(f'#{test_case}')

    arr = [[0]*N for _ in range(N)]
    direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    i = 0
    j = -1
    for num in range(1, N*N+1):
        for di, dj in direction:
         if 0 <= i + di < N and 0 <= j + dj < N :




    print(arr)
    # p = [0, 0]
    #
    # num = 1
    # for i in range(N - 1, 0, -2):
    #     for d in direction:
    #         count = i
    #
    #         while count > 0:
    #             arr[p[0]][p[1]] = num
    #
    #             p = [x + y for x, y in zip(p, d)]
    #
    #             count -= 1
    #             num += 1
    #
    #     p[0] += 1
    #     p[1] += 1
    #
    # # 홀수이면 가운데 숫자 넣기
    # if N % 2:
    #     arr[N//2][N//2] = N*N
    #
    # for row in arr:
    #     print(" ".join(map(str, row)))








