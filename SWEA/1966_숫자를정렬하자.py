import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))

    # 버블정렬
    for i in range(N-1, 0, -1):  # 범위의 끝 위치,,,
        for j in range(i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    print(f'#{test_case}', end=" ")
    for i in arr:
        print(i, end=" ")
    print()