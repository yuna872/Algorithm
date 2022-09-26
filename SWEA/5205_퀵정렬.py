T = int(input())

def partition(l, r):
    pivot = A[l]

    i, j = l, r
    while i < j:
        while i <= j and A[i] <= pivot:
            i += 1
        while i <= j and A[j] >= pivot:
            j -= 1

        if i < j:
            A[i], A[j] = A[j], A[i]

    A[l], A[j] = A[j], A[l]

    # 새로운 파티션 인덱스 넘겨주기
    return j

def q_sort(l, r):
    if l < r:
        s = partition(l, r)
        q_sort(l, s-1)
        q_sort(s+1, r)
    return


for test_case in range(1, T+1):
    N = int(input())

    A = list(map(int, input().split()))
    q_sort(0, N-1)
    print(f'#{test_case} {A[N//2]}')