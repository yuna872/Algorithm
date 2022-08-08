for test_case in range(1, 11):
    N = int(input())
    count = 0

    arr = list(map(int, input().split()))

    for i in range(2, N - 2):
        if arr[i] > max(max(arr[i - 2:i]), max(arr[i + 1:i + 3])):
            count += arr[i] - max(max(arr[i - 2:i]), max(arr[i + 1:i + 3]))
        else:
            continue

    print(f'#{test_case} {count}')