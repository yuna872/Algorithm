T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))

    # 선택정렬 알고리즘
    for i in range(N):
        maxV_idx = i
        minV_idx = i
        # 짝수번째 이면 큰수 내림차순
        if i % 2 == 0:
            for j in range(i+1, N):
                if arr[maxV_idx] < arr[j]:
                    maxV_idx = j
            arr[i], arr[maxV_idx] = arr[maxV_idx], arr[i]
        # 홀수번째이면 작은 수 오름차순
        else:
            for j in range(i+1, N):
                if arr[minV_idx] > arr[j]:
                    minV_idx = j
            arr[i], arr[minV_idx] = arr[minV_idx], arr[i]

    print(f'#{test_case}', end=" ")
    for n in arr[:10]:
        print(n, end=" ")
    print()



