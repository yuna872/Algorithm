T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))

    for i in range(N):
        min_idx = i
        max_idx = i
        # 홀수번째 일때
        if i % 2:
            for j in range(i+1, N):
                if arr[j] < arr[min_idx]:
                    min_idx = j
            arr[min_idx], arr[i] = arr[i], arr[min_idx]

        else:
            for j in range(i+1, N):
                if arr[j] > arr[max_idx]:
                    max_idx = j
            arr[max_idx], arr[i] = arr[i], arr[max_idx]

    print(f'#{test_case}', end=" ")
    for i in range(10):
        print(arr[i], end=" ")
    print()






