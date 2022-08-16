T = int(input())

for test_case in range(1,T+1):
    A, B = input().split()

    n = len(A)
    m = len(B)

    cnt = len(A)

    # 고지식한
    i = 0
    j = 0
    while i < n:
        if A[i] == B[j]:
            i += 1
            j += 1
        else:
            i = i - j + 1
            j = 0

        if j == m:
            cnt -= m-1
            j = 0
            continue

    print(f'#{test_case} {cnt}')

