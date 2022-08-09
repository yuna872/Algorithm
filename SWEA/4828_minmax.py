T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))

    # 버블 정렬
    for i in range(N-1, 0, -1):  # 정렬될 구간의 끝
        for j in range(0, i):     #비교할 원소 중 왼쪽 원소의 인덱스
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    print(f'#{test_case} {arr[-1]-arr[0]}')