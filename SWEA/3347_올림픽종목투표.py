T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    ai = list(map(int, input().split()))
    bi = list(map(int, input().split()))

    result = [0] * N

    for i in range(M):
        for j in range(N):
            if ai[j] <= bi[i]:
                result[j] += 1
                break
    # print(result)

    max_cnt = 0
    max_idx = 0
    for i in range(len(result)):
        if result[i] > max_cnt:
            max_cnt = result[i]
            max_idx = i
    print(f'#{test_case} {max_idx+1}')

