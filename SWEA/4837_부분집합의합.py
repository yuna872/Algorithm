T = int(input())

for test_case in range(1, T+1):
    N, K = map(int, input().split())
    cnt_subset = 0

    arr = list(range(1,13))

    for i in range(1<<12):  # 2**N개 의 부분집합
        sumV = 0
        cnt_element = 0
        for j in range(12):
            if i & (1<<j):
                cnt_element += 1
                sumV += arr[j]

        # 원소가 다섯개이고 합이 k와 같으면 부분집합 카운트 +1
        if sumV == K and cnt_element == N:
            cnt_subset += 1

    print(f'#{test_case} {cnt_subset}')